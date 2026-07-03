import { ProjectExplorer } from "@/components/ProjectExplorer";

const Projects = () => {
  return (
    <div className="page">
      <section className="detail-hero">
        <div className="hero-glow" />
        <div className="wrap">
          <span className="label reveal">case_studies</span>
          <h1 className="reveal" style={{ marginTop: "10px" }}>
            Project <span className="accent">explorer</span>
          </h1>
          <p className="sub reveal" style={{ maxWidth: "640px" }}>
            Product marketing programs, execution, and measurable impact across AI infrastructure, data platforms, and enterprise software. Filter by company — more added regularly.
          </p>
        </div>
      </section>
      <ProjectExplorer />
    </div>
  );
};

export default Projects;