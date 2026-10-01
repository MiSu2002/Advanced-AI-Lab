import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function AboutAuthor() {
  const skills = [
    "Advanced AI",
    "AI/ML",
    "Autonomous AI Architecture",
    "ReAct & OODA Decision Loops",
    "Salesforce Development",
    "Reactjs & Python Development",
    "Agile Methodology & SDLC",
  ];

  const highlights = [
    {
      title: "22 Months Industry Experience",
      subtitle: "Accenture",
      description: "Developed Salesforce solutions and designed Agentforce architectures for user stories within an Agile SDLC environment for a UK-based water utilities client."
    },
    {
      title: "Advanced AI Teaching Assistant",
      subtitle: "Academic Leadership",
      description: "Appointed by the College Principal to design and deliver a 6-month Advanced AI course for second-year students, grounded in Russell & Norvig's 'Artificial Intelligence: A Modern Approach'."
    },
    {
      title: "Independent AI Researcher & Author",
      subtitle: "Enterprise AI Architecture Thesis",
      description: "Authored an independent thesis on Agentforce Architecture, exploring ReAct loops, OODA frameworks, the Atlas Reasoning Engine, and LLM grounding mechanisms."
    }
  ];

  return (
    <div className="bg-light min-vh-100">
        <Navbar/>
    <div className="container py-5">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb small">
          <li className="breadcrumb-item">
            <Link to="/" className="text-decoration-none">Curriculum</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">About the Author</li>
        </ol>
      </nav>

      {/* Hero Header Card with Circular Profile Image */}
      <div className="card border-0 bg-dark text-white p-4 p-md-5 rounded-4 shadow-sm mb-5">
        <div className="row align-items-center g-4">
          
          {/* Circular Picture Space */}
          <div className="col-lg-3 col-md-4 text-center">
            <div className="position-relative d-inline-block">
              <img
                src="/profile-pic.jpg" 
                alt="Soumita Basu"
                className="rounded-circle img-thumbnail shadow-lg border-3 border-info"
                style={{
                  width: "250px",
                  height: "250px",
                  objectFit: "cover",
                  backgroundColor: "#212529"
                }}
                onError={(e) => {
                  // Fallback avatar if image path is not yet loaded
                  e.target.onerror = null;
                  e.target.src = "https://ui-avatars.com/api/?name=Soumita+Basu&size=200&background=0D6EFD&color=fff";
                }}
              />
            </div>
          </div>

          {/* Author Details */}
          <div className="col-lg-9 col-md-8">
            <div className="d-flex align-items-center gap-2 mb-2 flex-wrap">
              <span className="badge bg-outline-info border border-info text-info px-3 py-2">Advanced AI Teaching Assistant</span>
              <span className="badge bg-outline-info border border-info text-info px-3 py-2">Enterprise AI Researcher</span>
            </div>
            <h1 className="fw-bold display-5 mb-2">Soumita Basu</h1>
            <p className="lead text-white-50 mb-3">
              Former Accenture Software Developer (22 Months) turned Advanced AI Teaching Assistant &amp; Independent AI Researcher. Passionate about uncovering the under-the-hood mechanisms of autonomous agents and enterprise AI architectures.
            </p>
            <div className="d-flex flex-wrap gap-3 pt-2 align-items-center">
              <a
                href="https://agentforce-architecture.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-info font-monospace btn-sm rounded-pill px-4 fw-bold text-dark"
              >
                Thesis: agentforce-architecture.vercel.app
              </a>
              <span className="text-white-50 small">
                Targeting M.Sc. in Computer Science &amp; Engineering (AI Track) @ Uni in Italy
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Highlights Grid */}
      <div className="row g-4 mb-5">
        {highlights.map((item, idx) => (
          <div className="col-md-4" key={idx}>
            <div className="card border-0 shadow-sm rounded-4 p-4 h-100 border-4 border-start border-info">
              <span className="text-info font-monospace small fw-bold uppercase">{item.subtitle}</span>
              <h5 className="fw-bold text-dark mt-1 mb-2">{item.title}</h5>
              <p className="small text-muted mb-0" style={{ lineHeight: "1.6" }}>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Biography Section */}
      <div className="row g-4 mb-5">
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm rounded-4 p-4 p-md-5">
            <h4 className="fw-bold text-dark border-bottom pb-3 mb-4">Author Journey</h4>
            
            <h6 className="fw-bold text-info">Industry Foundations at Accenture</h6>
            <p className="text-black small mb-4" style={{ lineHeight: "1.8" }}>
              During my 22 months as a software developer at Accenture, I built Salesforce solutions and Agentforce features for a UK-based water utilities client. Working within an Agile SDLC process allowed me to design Agentforce architectures for user stories and construct autonomous agent workflows.
            </p>

            <h6 className="fw-bold text-info">Shift from Development to Architecture Research</h6>
            <p className="text-black small mb-4" style={{ lineHeight: "1.8" }}>
              Through hands-on development, I realized my true passion lay in asking <em>why</em> and <em>how</em> things work under the hood rather than simply using existing tools. I wanted to deeply understand how artificial intelligence achieves true autonomy. This drive led me to author an independent thesis on <strong>Enterprise AI Architecture — Agentforce Architecture</strong>, dissecting the Atlas Reasoning Engine, ReAct (Reasoning &amp; Acting) dynamic loops, OODA (Observe-Orient-Decide-Act) frameworks, and LLM grounding techniques.
            </p>

            <h6 className="fw-bold text-info">Academic Leadership &amp; Pedagogy</h6>
            <p className="text-black small mb-0" style={{ lineHeight: "1.8" }}>
              Recognizing my passion for foundational AI, my college Principal appointed me as an <strong>Advanced AI Teaching Assistant</strong> to lead a 6-month course for second-year students. Grounding the lab curriculum in Russell &amp; Norvig's <em>Artificial Intelligence: A Modern Approach</em>, I teach state-space search, knowledge representation, finite state controllers, and vectorized machine learning. Over the next six months, I am expanding my academic outreach as a guest lecturer across regional engineering institutions while preparing for my M.Sc. in Computer Science at recognised universities in Italy.
            </p>
          </div>
        </div>

        {/* Sidebar Cards */}
        <div className="col-lg-4">
          {/* Research & Thesis Focus Card */}
          <div className="card border-0 text-white rounded-4 p-4 shadow-sm mb-4 border-2 border-top border-bottom border-info">
            <h5 className="fw-bold text-dark border-bottom border-secondary pb-2 mb-3">Independent Thesis Focus</h5>
            <p className="small text-black-50 mb-3" style={{ lineHeight: "1.6" }}>
              How autonomous agents fundamentally differ from traditional chatbots through grounded reasoning, dynamic planning, and enterprise integrations.
            </p>
            <ul className="list-unstyled small text-black mb-0">
              <li className="mb-2"><strong className="text-info">Engine:</strong> Salesforce Atlas Reasoning Engine</li>
              <li className="mb-2"><strong className="text-info">Frameworks:</strong> ReAct &amp; OODA Decision Loops</li>
              <li className="mb-2"><strong className="text-info">Grounding:</strong> LLM Retrieval &amp; Enterprise Guardrails</li>
            </ul>
          </div>

          {/* Core Technical Competencies */}
          <div className="card mt-lg-5 border-0 shadow-sm rounded-4 p-4 bg-white border-2 border-top border-bottom border-info">
            <h5 className="fw-bold text-dark border-bottom pb-2 mb-3">Core Competencies</h5>
            <div className="d-flex flex-wrap gap-2">
              {skills.map((skill, idx) => (
                <span key={idx} className="badge bg-light text-dark border p-2 small font-monospace fw-normal">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <footer className="mt-5 text-center text-muted small">
          <p>© {new Date().getFullYear()} Advanced AI Lab by Soumita Basu. Optimized for concurrent laboratory access.</p>
        </footer>
    </div>
    </div>
  );
}