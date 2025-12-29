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
    <Link to={path} className="hook-card">
      <div className="hook-card-icon">{icon}</div>
      <div className="hook-card-content">
        <h3 className="hook-card-title">{title}</h3>
        <p className="hook-card-package">{packageName}</p>
        <p className="hook-card-description">{description}</p>
      </div>
      <div className="hook-card-arrow">→</div>
    </Link>
  );
}
