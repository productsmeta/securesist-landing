import DOMPurify from "isomorphic-dompurify";

const ALLOWED_TAGS = [
  "h1", "h2", "h3", "h4", "h5", "h6",
  "p", "br", "strong", "em", "u", "b", "i",
  "ul", "ol", "li", "a", "img",
  "blockquote", "code", "pre", "span", "div",
];
const ALLOWED_ATTR = ["href", "src", "alt", "title", "class", "style", "loading"];

function escapeHtmlAttr(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/**
 * Ensures every <img> has meaningful alt and loading="lazy" for SEO and performance.
 * Uses articleTitle as default alt when alt is missing or empty.
 */
function processImgTags(html: string, articleTitle: string): string {
  const defaultAlt = escapeHtmlAttr(articleTitle.trim() || "Article image");
  return html.replace(
    /<img\s([^>]*)>/gi,
    (_match, attrs: string) => {
      const altMatch = attrs.match(/\balt\s*=\s*["']([^"']*)["']/i) ?? attrs.match(/\balt\s*=\s*([^\s>]+)/i);
      const hasMeaningfulAlt = altMatch && altMatch[1].trim().length > 0;
      const hasLoading = /\bloading\s*=/i.test(attrs);
      let out = attrs;
      if (!hasMeaningfulAlt) {
        // Remove empty or missing alt so we can add a proper one
        out = out.replace(/\balt\s*=\s*["'][^"']*["']/gi, "").replace(/\balt\s*=\s*[^\s>]+/gi, "").trim();
        out += ` alt="${defaultAlt}"`;
      }
      if (!hasLoading) out += ' loading="lazy"';
      return `<img ${out.trim()}>`;
    }
  );
}

interface BlogContentProps {
  content: string;
  /** Used as default alt for images that have no alt (accessibility + SEO). */
  articleTitle?: string;
}

/**
 * Server-rendered blog body. Sanitization runs on the server so the full
 * HTML (including H1/H2, paragraphs) is in the initial response for SEO.
 * In-content images get default alt from articleTitle and loading="lazy".
 * Note: For best performance (Core Web Vitals), in-content images should use
 * URLs (e.g. Cloudinary) rather than base64 data URIs; base64 inflates HTML size.
 */
export function BlogContent({ content, articleTitle = "" }: BlogContentProps) {
  let cleanHtml =
    typeof content === "string" && content.trim()
      ? DOMPurify.sanitize(content.trim(), {
          ALLOWED_TAGS,
          ALLOWED_ATTR,
        })
      : "";
  cleanHtml = processImgTags(cleanHtml, articleTitle);

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
  .blog-content h1 {
    font-size: 1.75rem;
    font-weight: 700;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    line-height: 1.4;
  }
  .blog-content h1:first-child { margin-top: 0; color: rgb(0, 44, 140); }
  .blog-content h2 {
    font-size: 1.6rem;
    font-weight: 700;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    color: #2563eb;
    line-height: 1.4;
  }
  .blog-content h2:first-child { margin-top: 0; }
  .blog-content h3 {
    font-size: 1.35rem;
    font-weight: 600;
    margin-top: 0.85rem;
    margin-bottom: 0.4rem;
    line-height: 1.4;
  }
  .blog-content h4 {
    font-size: 1.2rem;
    font-weight: 600;
    margin-top: 0.75rem;
    margin-bottom: 0.35rem;
    line-height: 1.4;
  }
  .blog-content p {
    font-size: 1.05rem;
    line-height: 1.8;
    margin-top: 0.35rem;
    margin-bottom: 0.65rem;
  }
  .blog-content ul,
  .blog-content ol {
    margin-left: 1.4rem;
    margin-top: 0.4rem;
    margin-bottom: 0.6rem;
  }
  .blog-content li {
    font-size: 1.05rem;
    margin-bottom: 0.3rem;
    line-height: 1.6;
  }
  .blog-content a {
    color: #2563eb;
    font-weight: 600;
    text-decoration: none;
  }
  .blog-content a:hover { text-decoration: underline; }
  .blog-content strong { font-weight: 700; }
  .blog-content img {
    border-radius: 0.5rem;
    margin-top: 0.75rem;
    margin-bottom: 0.75rem;
  }
`,
        }}
      />
      <div
        className="blog-content max-w-none mt-4"
        dangerouslySetInnerHTML={{ __html: cleanHtml }}
      />
    </>
  );
}
