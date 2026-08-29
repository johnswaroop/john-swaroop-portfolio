import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const Arrow = () => <span aria-hidden="true">↗</span>;

function Wordmark() {
  return (
    <a className="wordmark" href="#top" aria-label="John Swaroop, home">
      <span>JS</span>
      <span className="wordmark-name">John Swaroop</span>
    </a>
  );
}

function ProjectVisual({ type, label }) {
  if (type === "dcernx") {
    return (
      <div className="project-visual visual-dcernx" aria-label={`${label} NDA-safe product mockup`}>
        <div className="window-bar"><i /><i /><i /><span>Research workspace</span></div>
        <div className="dcernx-shell">
          <div className="dcernx-rail">
            <b>D</b><i /><i /><i /><i />
          </div>
          <div className="dcernx-main">
            <div className="ui-kicker">DILIGENCE BRIEF</div>
            <div className="ui-title">Investment thesis</div>
            <div className="evidence-row">
              <span className="evidence-score">84</span>
              <div><b>Evidence confidence</b><small>12 sources · 38 claims mapped</small></div>
            </div>
            <div className="ui-lines"><i /><i /><i /><i /></div>
            <div className="citation-pills"><span>[01]</span><span>[04]</span><span>[12]</span></div>
          </div>
          <div className="dcernx-side">
            <small>RESEARCH PLAN</small>
            <div className="agent-step done"><i />Market landscape</div>
            <div className="agent-step active"><i />Risk analysis</div>
            <div className="agent-step"><i />Source synthesis</div>
          </div>
        </div>
        <span className="placeholder-note">NDA-safe product mockup</span>
      </div>
    );
  }

  if (type === "garden") {
    return (
      <div className="project-visual visual-garden" aria-label={`${label} NDA-safe 3D product mockup`}>
        <img src="/mockups/garden-designer-3d.webp" alt="Fictional 3D garden design editor showing a rendered home, planting library and object properties" loading="lazy" />
        <span className="placeholder-note">NDA-safe 3D product mockup</span>
      </div>
    );
  }

  return (
    <div className="project-visual visual-krooki" aria-label={`${label} NDA-safe workflow mockup`}>
      <div className="window-bar"><i /><i /><i /><span>Approval operations</span></div>
      <div className="krooki-layout">
        <aside><b>K</b><i /><i /><i /><i /></aside>
        <main>
          <small>APPLICATIONS</small>
          <strong>Construction approvals</strong>
          <div className="metric-row"><span><b>128</b><small>In review</small></span><span><b>46</b><small>Approved</small></span><span><b>08</b><small>Flagged</small></span></div>
          <div className="approval-table"><i /><i /><i /><i /></div>
        </main>
      </div>
      <span className="placeholder-note">NDA-safe workflow mockup</span>
    </div>
  );
}

function ResumePage() {
  return (
    <div className="resume-page">
      <header>
        <a className="resume-back" href="/">← Back to portfolio</a>
        <a className="resume-page-download" href="/resume/John-Swaroop-Resume.pdf" download>Download PDF <span>↓</span></a>
      </header>
      <main>
        <iframe src="/resume/John-Swaroop-Resume.pdf#view=FitH" title="John Swaroop résumé PDF" />
      </main>
    </div>
  );
}

function App() {
  const experience = [
    ["2025—Now", "Founder & CTO", "DcernX", "AI operating system for investment research and diligence."],
    ["2024—Now", "Founder / Product & Engineering Lead", "P101 Labs", "Applied AI and full-stack products for startups and SMEs."],
    ["2023—Now", "Independent Consultant", "Full-Stack & AI", "Architecture, prototyping and end-to-end product delivery."],
    ["2024", "Founding Full-Stack Engineer", "CultureCo", "Creator commerce, community and business-management platform."],
    ["2021—2024", "Founding Engineer", "Truts", "Web3 discovery and quest platform built from the ground up."],
  ];

  return (
    <>
      <header className="site-header" id="top">
        <Wordmark />
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a><a href="#about">About</a><a href="#experience">Experience</a>
        </nav>
        <div className="header-actions">
          <a className="header-resume" href="/resume/">Résumé <Arrow /></a>
          <a className="nav-cta" href="mailto:johnswaroop28@gmail.com">Get in touch <Arrow /></a>
        </div>
      </header>

      <main>
        <section className="hero section-pad">
          <div className="hero-status"><span>Open to full-time and select consulting roles</span><span>Hyderabad, India · Working globally</span></div>
          <h1>I build thoughtful products <em>from early ideas</em> to production.</h1>
          <div className="hero-bottom">
            <p>Founder, full-stack engineer and applied AI specialist. I work with early ideas and evolving requirements, contributing across system architecture, interface design, AI workflows and deployment.</p>
            <div className="hero-links">
              <a className="button button-dark" href="/resume/John-Swaroop-Resume.pdf" download>Download résumé <span>↓</span></a>
              <a className="text-link" href="mailto:johnswaroop28@gmail.com">Get in touch <Arrow /></a>
            </div>
          </div>
        </section>

        <section className="proof-bar" aria-label="Highlights">
          <span><b>5+</b> years building products</span>
          <span><b>0→1</b> early-stage product work</span>
          <span><b>AI + Full-stack</b> across the product stack</span>
        </section>

        <section className="resume-callout section-pad" aria-labelledby="resume-heading">
          <p className="section-label">Résumé</p>
          <h2 id="resume-heading">Download my résumé.</h2>
          <a className="resume-download" href="/resume/John-Swaroop-Resume.pdf" download>Download PDF <span>↓</span></a>
        </section>

        <section className="intro section-pad" id="about">
          <p className="section-label">01 / Profile</p>
          <div className="intro-copy">
            <div className="intro-heading">
              <h2>A full-stack foundation, applied to products with complex systems underneath.</h2>
              <p>I tend to work where product decisions and engineering decisions overlap.</p>
            </div>
            <div className="profile-grid">
              <article>
                <span>01</span>
                <h3>From early idea to production</h3>
                <p>Helping define the product, choose the architecture, build the application and carry it through deployment.</p>
              </article>
              <article>
                <span>02</span>
                <h3>Across the product stack</h3>
                <p>Working across interfaces, APIs, data, realtime systems, integrations and infrastructure as the product requires.</p>
              </article>
              <article>
                <span>03</span>
                <h3>Applied AI in context</h3>
                <p>Bringing agents, retrieval, document intelligence and voice into useful workflows—not treating them as isolated features.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="work section-pad" id="work">
          <div className="section-heading">
            <p className="section-label">02 / Selected work</p>
            <h2>Selected work across intelligence, design, and public infrastructure.</h2>
          </div>

          <article className="case-study case-featured">
            <div className="case-info">
              <div><span className="project-index">01</span><span className="project-type">Founder product · Applied AI</span></div>
              <h3>DcernX</h3>
              <p className="case-lede">An AI operating system for venture capital, private equity and investment teams, built in partnership with a UK-based accelerator and designed to make complex research more structured, collaborative and traceable.</p>
              <p>Working across the product and technical architecture: multi-agent research, document ingestion, hierarchical retrieval, evidence mapping, structured outputs, provider routing and the full-stack workspace around them.</p>
              <div className="tag-list"><span>Product architecture</span><span>Agentic workflows</span><span>Next.js</span><span>Python</span><span>RAG</span><span>LangGraph</span></div>
            </div>
            <ProjectVisual type="dcernx" label="DcernX" />
          </article>

          <div className="case-grid">
            <article className="case-study">
              <ProjectVisual type="garden" label="3D garden and home designer" />
              <div className="case-info">
                <div><span className="project-index">02</span><span className="project-type">Full-stack product</span></div>
                <h3>3D Garden & Home Designer</h3>
                <p className="case-lede">A visual design tool that makes it simple to create polished 3D garden and home mockups without specialist software.</p>
                <p>Worked across the interactive product experience and supporting platform, translating complex 3D-design workflows into an approachable tool for everyday users.</p>
                <div className="tag-list"><span>3D experience</span><span>Product engineering</span><span>Interaction design</span></div>
              </div>
            </article>

            <article className="case-study">
              <ProjectVisual type="krooki" label="Krooki management system" />
              <div className="case-info">
                <div><span className="project-index">03</span><span className="project-type">GovTech · Workflow platform</span></div>
                <h3>Krooki Management System</h3>
                <p className="case-lede">A government platform for Oman that digitizes and automates construction-approval workflows.</p>
                <p>Helped turn a multi-stage operational process into a structured digital system—supporting application management, review flows, approvals and clearer coordination across stakeholders.</p>
                <div className="tag-list"><span>Workflow automation</span><span>Full-stack</span><span>Systems design</span><span>GovTech</span></div>
              </div>
            </article>
          </div>

          <div className="systems-strip">
            <div className="systems-intro"><span>Applied AI systems</span><h3>AI systems designed around real workflows.</h3></div>
            <div className="system-card"><span>01</span><h4>Deep research agents</h4><p>Evidence-backed research across private documents, web sources and structured data—with citations and claim-to-evidence links.</p></div>
            <div className="system-card"><span>02</span><h4>Realtime voice agents</h4><p>Streaming STT–LLM–TTS systems with turn detection, tool execution and production integration workflows.</p></div>
            <div className="system-card"><span>03</span><h4>AI interview systems</h4><p>Interview and screening products covering question generation, response analysis, evaluation and video assessment.</p></div>
          </div>
        </section>

        <section className="capabilities section-pad">
          <p className="section-label light">03 / What I bring</p>
          <div className="capability-intro"><h2>Working across the product stack.</h2><p>A full-stack engineering foundation, with added depth in modern AI systems.</p></div>
          <div className="capability-grid">
            <div><span>01</span><h3>Zero-to-one product</h3><p>Problem framing, rapid prototyping, technical planning and pragmatic decisions that help move an idea toward production.</p></div>
            <div><span>02</span><h3>Full-stack engineering</h3><p>Interfaces, APIs, realtime systems, data models, integrations, infrastructure and deployments—with a bias toward maintainable systems.</p></div>
            <div><span>03</span><h3>Applied AI systems</h3><p>Agents, retrieval, document intelligence, tool calling, voice and model routing designed around reliability, cost and evidence.</p></div>
          </div>
          <div className="stack-line"><span>TypeScript</span><span>Python</span><span>React / Next.js</span><span>Node.js</span><span>PostgreSQL</span><span>AWS</span><span>Docker</span><span>LangGraph</span><span>LiveKit</span></div>
        </section>

        <section className="experience section-pad" id="experience">
          <div className="section-heading horizontal"><p className="section-label">04 / Experience</p><h2>Experience across founding and early-stage teams.</h2></div>
          <div className="experience-list">
            {experience.map(([date, role, company, detail]) => (
              <article className="experience-row" key={`${company}-${role}`}>
                <span className="experience-date">{date}</span><h3>{role}</h3><p><b>{company}</b><span>{detail}</span></p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact section-pad" id="contact">
          <p className="section-label light">05 / Let’s talk</p>
          <h2>Let’s build something useful.</h2>
          <p>I’m open to the right full-time role and select consulting engagements—especially where product thinking, full-stack ownership and applied AI meet.</p>
          <a className="contact-email" href="mailto:johnswaroop28@gmail.com">johnswaroop28@gmail.com <Arrow /></a>
          <div className="contact-footer">
            <Wordmark />
            <div><a href="/resume/">Résumé <Arrow /></a><a href="https://github.com/johnswaroop" target="_blank" rel="noreferrer">GitHub <Arrow /></a><a href="https://linkedin.com/in/john-swaroop-4389961b7" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a><a href="https://dcernx.com" target="_blank" rel="noreferrer">DcernX <Arrow /></a></div>
            <span>© {new Date().getFullYear()} John Swaroop</span>
          </div>
        </section>
      </main>
    </>
  );
}

const isResumeRoute = ["/resume", "/resume/"].includes(window.location.pathname);

createRoot(document.getElementById("root")).render(isResumeRoute ? <ResumePage /> : <App />);
