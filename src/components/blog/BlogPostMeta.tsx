import { Calendar, Clock } from "lucide-react";

interface BlogPostMetaProps {
  createdAt: string;
  readingTime: number;
}

const formatDate = (iso: string) =>
  new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(iso));

export function BlogPostMeta({ createdAt, readingTime }: BlogPostMetaProps) {
  return (
    <div className="flex gap-6 text-sm text-slate-600 mb-8">
      <span className="flex items-center gap-2">
        <Calendar className="h-4 w-4" />
        <time dateTime={createdAt}>{formatDate(createdAt)}</time>
      </span>

      <span className="flex items-center gap-2">
        <Clock className="h-4 w-4" />
        {readingTime} min read
      </span>
    </div>
  );
}
