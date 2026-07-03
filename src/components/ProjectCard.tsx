import { Link } from "react-router-dom";
import { Bolt, ArrowRight } from "lucide-react";
import { type Project } from "@/data/projects";

const companyStyles: Record<string, string> = {
  Meta: "bg-cobalt/14 text-cobalt",
  SalesIntel: "border border-border-strong text-foreground",
  Mintigo: "bg-muted text-muted-foreground",
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const companyStyle = companyStyles[project.company] || "border border-border-strong";

  return (
    <Link
      to={`/projects/${project.slug}`}
      className="pcard group block"
      style={{
        animation: `fadePage 0.45s cubic-bezier(0.22, 1, 0.36, 1) ${index * 35}ms both`,
      }}
    >
      <div className="top">
        <span className={`co ${companyStyle}`}>
          {project.company}
        </span>
        <span className="idx mono text-[0.7rem]" style={{ color: "hsl(var(--muted))" }}>
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <h3 className="text-lg lg:text-xl font-display font-semibold" style={{ color: "hsl(var(--foreground))" }}>
        {project.title}
      </h3>
      <div className="sub" style={{ color: "hsl(var(--muted))" }}>
        {project.subtitle}
      </div>
      <div className="metric mono font-medium text-sm" style={{ color: "hsl(var(--cobalt))" }}>
        <Bolt size={12} className="inline-block mr-1" /> {project.metric}
      </div>
      <div className="prog mono text-[0.68rem]" style={{ color: "hsl(var(--muted))" }}>
        <span>◇</span> {project.program}
      </div>
      <span className="read mono text-xs font-medium" style={{ color: "hsl(var(--cobalt))" }}>
        read_case_study <ArrowRight size={12} className="inline transition-transform duration-250 group-hover:translate-x-1" />
      </span>
    </Link>
  );
}