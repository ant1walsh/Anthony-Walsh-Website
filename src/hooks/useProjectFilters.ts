import { useMemo, useState } from "react";
import { projects, type Project } from "@/data/projects";

export interface ProjectFilters {
  search: string;
  company: string;
  program: string;
  sort: "recent" | "title" | "company" | "metric";
}

export function useProjectFilters() {
  const [filters, setFilters] = useState<ProjectFilters>({
    search: "",
    company: "All",
    program: "All",
    sort: "recent",
  });

  const companies = useMemo(() => {
    const unique = [...new Set(projects.map((p) => p.company))];
    return ["All", ...unique.sort()];
  }, []);

  const programs = useMemo(() => {
    const unique = [...new Set(projects.map((p) => p.program))];
    return ["All", ...unique.sort()];
  }, []);

  const filteredProjects = useMemo(() => {
    let result = [...projects];

    // Search filter
    if (filters.search) {
      const query = filters.search.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.subtitle.toLowerCase().includes(query) ||
          p.company.toLowerCase().includes(query) ||
          p.program.toLowerCase().includes(query) ||
          p.scenario.toLowerCase().includes(query) ||
          p.challenge.toLowerCase().includes(query) ||
          p.objective.toLowerCase().includes(query) ||
          p.solution.some((s) => s.toLowerCase().includes(query)) ||
          p.impact.toLowerCase().includes(query)
      );
    }

    // Company filter
    if (filters.company !== "All") {
      result = result.filter((p) => p.company === filters.company);
    }

    // Program filter
    if (filters.program !== "All") {
      result = result.filter((p) => p.program === filters.program);
    }

    // Sort
    switch (filters.sort) {
      case "title":
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "company":
        result.sort((a, b) => a.company.localeCompare(b.company));
        break;
      case "metric":
        // Keep original order but group by company
        result.sort((a, b) => a.company.localeCompare(b.company));
        break;
      case "recent":
      default:
        // Keep original order (most recent first)
        break;
    }

    return result;
  }, [filters, projects]);

  const updateFilter = (key: keyof ProjectFilters, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({ search: "", company: "All", program: "All", sort: "recent" });
  };

  return {
    filters,
    filteredProjects,
    companies,
    programs,
    updateFilter,
    clearFilters,
    setFilters,
  };
}