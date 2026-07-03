import { Search, ChevronDown } from "lucide-react";
import { useProjectFilters } from "@/hooks/useProjectFilters";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal, StaggeredReveal } from "@/components/StaggeredReveal";

export function ProjectExplorer() {
  const {
    filters,
    filteredProjects,
    companies,
    programs,
    updateFilter,
    clearFilters,
  } = useProjectFilters();

  return (
    <section>
      <div className="wrap">
        <Reveal>
          <span className="label">case_studies</span>
          <h1 className="text-4xl lg:text-5xl font-display font-semibold" style={{ marginTop: "10px" }}>
            Project <span className="accent">explorer</span>
          </h1>
          <p className="sub" style={{ maxWidth: "640px", marginTop: "8px" }}>
            Product marketing programs, execution, and measurable impact across AI infrastructure, data platforms, and enterprise software. Filter by company — more added regularly.
          </p>
        </Reveal>

        <Reveal delay={100}>
          {/* Company filters */}
          <div className="filter-row">
            <span className="filter-label">company</span>
            {companies.map((company) => (
              <button
                key={company}
                onClick={() => updateFilter("company", company)}
                className={`pill ${filters.company === company ? "active" : ""}`}
                data-company={company}
              >
                {company}
              </button>
            ))}
          </div>

          {/* Program filters */}
          <div className="filter-row">
            <span className="filter-label">program</span>
            {programs.map((program) => (
              <button
                key={program}
                onClick={() => updateFilter("program", program)}
                className={`pill ${filters.program === program ? "active" : ""}`}
                data-program={program}
              >
                {program}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="result-count mono text-sm" style={{ color: "hsl(var(--muted))" }}>
            > {filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"}
            {filters.company !== "All" && <span> · {filters.company}</span>}
            {filters.program !== "All" && <span> · {filters.program}</span>}
            {filters.search && <span> · "{filters.search}"</span>}
          </div>
        </Reveal>

        <Reveal delay={200}>
          {filteredProjects.length === 0 ? (
            <div className="empty" style={{ gridColumn: "1 / -1", textAlign: "center", padding: "60px 0", color: "hsl(var(--muted))", fontFamily: "var(--font-mono)", fontSize: "0.9rem" }}>
              no projects match your filters.
              <button
                onClick={clearFilters}
                className="btn btn-ghost mt-4"
              >
                clear filters
              </button>
            </div>
          ) : (
            <StaggeredReveal itemCount={filteredProjects.length} className="project-grid">
              {filteredProjects.map((project, i) => (
                <ProjectCard project={project} index={i} />
              ))}
            </StaggeredReveal>
          )}
        </Reveal>
      </div>
    </section>
  );
}