import { Link } from "react-router";

interface HookCardProps {
  title: string;
  description: string;
  path: string;
  icon: string;
  packageName: string;
}

export default function HookCard({
  title,
  description,
  path,
  icon,
  packageName,
}: HookCardProps) {
  return (
    <Link
      to={path}
      className="flex items-start gap-4 p-6 bg-bg-default border border-border rounded-lg no-underline text-inherit transition-all hover:border-text-muted hover:bg-bg-secondary group"
    >
      <div className="text-3xl shrink-0">{icon}</div>
      <div className="flex-1 min-w-0">
        <h3 className="text-xl font-semibold text-text-primary mb-1 font-mono">
          {title}
        </h3>
        <p className="text-xs text-text-muted mb-2 font-mono">{packageName}</p>
        <p className="text-sm text-text-secondary leading-relaxed">
          {description}
        </p>
      </div>
      <div className="text-text-muted text-lg shrink-0 transition-transform group-hover:translate-x-1 group-hover:text-text-primary">
        →
      </div>
    </Link>
  );
}
