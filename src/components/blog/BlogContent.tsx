interface BlogContentProps {
  /** HTML from API — must be sanitized by the API before sending. */
  content: string;
}

/**
 * Renders blog body HTML. Sanitization must happen in the API (before response).
 * Do not sanitize here: Edge/Cloudflare can throw 500 with DOMPurify/jsdom.
 */
export function BlogContent({ content }: BlogContentProps) {
  const html = typeof content === "string" ? content : "";

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
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </>
  );
}
