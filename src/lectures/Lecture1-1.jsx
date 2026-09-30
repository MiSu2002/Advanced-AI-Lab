import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";

export default function Lecture1_1() {
  return (
    <div className="bg-light min-vh-100">
      <Navbar />
      <main className="container my-5">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <nav aria-label="breadcrumb" className="mb-4">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/" className="text-decoration-none">Lab Modules</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Lecture 1.1: Linear Regression
                </li>
              </ol>
            </nav>

            <article className="card shadow-sm border-0 p-4 p-md-5 bg-white">
              <header className="border-bottom pb-4 mb-4">
                <span className="badge bg-primary mb-2">Module 1.1</span>
                <h2 className="fw-bold text-dark brand-poppins mb-2">
                  Linear Regression &amp; Continuous Predictions
                </h2>
                <p className="text-muted lead mb-0">
                  Modelling continuous targets using lines of best fit, residuals, and paramater adjustments.
                </p>
              </header>

              <section className="mb-5">
                <h4 className="fw-bold text-dark mb-3">1. Continuous vs. Discrete Data</h4>
                <p className="lh-base text-secondary">
                  Linear Regression predicts a continuous numerical target (e.g., price, salary, temperature) rather than discrete categorical labels (e.g., pass/fail).
                </p>
              </section>

              <section className="mb-5">
                <h4 className="fw-bold text-dark mb-3">2. Straight Line Equation &amp; ML Notation</h4>
                <p className="lh-base text-secondary">
                  In secondary school algebra, a straight line is written as y = mx + c. In Machine Learning, we rewrite this hypothesis function as:
                </p>

                <div className="p-3 bg-dark text-white rounded font-monospace fs-5 text-center my-3">
                  y&#770; = &theta;<sub>0</sub> + &theta;<sub>1</sub>x
                </div>

                <div className="row g-3 my-3">
                  <div className="col-md-3">
                    <div className="p-3 border bg-light rounded text-center">
                      <strong className="d-block text-primary fs-5">y&#770;</strong>
                      <span className="small text-muted">Predicted Target <br/> (e.g., Salary)</span>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="p-3 border bg-light rounded text-center">
                      <strong className="d-block text-primary fs-5">&theta;<sub>0</sub></strong>
                      <span className="small text-muted">Bias or Intercept <br/>(Starting Salary)</span>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="p-3 border bg-light rounded text-center">
                      <strong className="d-block text-primary fs-5">&theta;<sub>1</sub></strong>
                      <span className="small text-muted">Weight / Slope <br/>(&delta; y&#770; / &delta; x)</span>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="p-3 border bg-light rounded text-center">
                      <strong className="d-block text-primary fs-5">x</strong>
                      <span className="small text-muted">Input Feature <br/>(Years of Experience)</span>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-5">
                <h4 className="fw-bold text-dark mb-3">3. Finding the Line of Best Fit &amp; Residuals</h4>
                <p className="lh-base text-secondary">
                  The model iteratively adjusts slope (&theta;<sub>1</sub>) and intercept (&theta;<sub>0</sub>) to minimize vertical distances—termed <strong>residuals (errors)</strong>—between actual data points (y) and predicted points (y&#770;).
                </p>

                <div className="p-4 bg-light rounded border text-center my-4">
                  <svg viewBox="0 0 500 260" className="w-100" style={{ maxHeight: "280px" }}>
                    <line x1="50" y1="220" x2="450" y2="220" stroke="#495057" strokeWidth="2" />
                    <line x1="50" y1="20" x2="50" y2="220" stroke="#495057" strokeWidth="2" />
                    <text x="250" y="250" textAnchor="middle" fontSize="12" fill="#6c757d">Experience (x)</text>
                    <text x="20" y="120" textAnchor="middle" fontSize="12" fill="#6c757d" transform="rotate(-90 20 120)">Salary (y)</text>

                    <line x1="70" y1="180" x2="420" y2="50" stroke="#0d6efd" strokeWidth="3" />

                    <circle cx="120" cy="140" r="5" fill="#dc3545" />
                    <line x1="120" y1="140" x2="120" y2="161" stroke="#dc3545" strokeDasharray="4" strokeWidth="2" />
                    
                    <circle cx="220" cy="100" r="5" fill="#dc3545" />
                    <line x1="220" y1="100" x2="220" y2="124" stroke="#dc3545" strokeDasharray="4" strokeWidth="2" />

                    <circle cx="320" cy="110" r="5" fill="#dc3545" />
                    <line x1="320" y1="110" x2="320" y2="87" stroke="#dc3545" strokeDasharray="4" strokeWidth="2" />

                    <text x="330" y="100" fontSize="11" fill="#dc3545" fontWeight="bold">Residual (Error)</text>
                  </svg>
                </div>
              </section>

              <div className="d-flex justify-content-between align-items-center mt-5 pt-3 border-top">
                <Link to="/lecture-1-0" className="btn btn-outline-secondary">
                  &larr; Previous: Lecture 1.0
                </Link>
                <Link to="/lecture-1-2" className="btn btn-primary">
                  Next: Lecture 1.2 Logistic Regression &rarr;
                </Link>
              </div>
            </article>
          </div>
        </div>
      </main>
    </div>
  );
}