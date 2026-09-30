import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";

export default function Lecture1_0() {
  return (
    <div className="bg-light min-vh-100">
    <Navbar/>
      <main className="container my-5">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <nav aria-label="breadcrumb" className="mb-4">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/" className="text-decoration-none">Lab Modules</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Lecture 1.0: What is ML?
                </li>
              </ol>
            </nav>

            <article className="card shadow-sm border-0 p-4 p-md-5 bg-white">
              <header className="border-bottom pb-4 mb-4">
                <span className="badge bg-info text-dark mb-2">Module 1.0</span>
                <h2 className="fw-bold text-dark brand-poppins mb-2">
                  What is Machine Learning?
                </h2>
                <p className="text-muted lead mb-0">
                  Comparing Traditional Rule-Based Software Development with Data-Driven Predictive Modeling
                </p>
              </header>

              {/* SECTION 1 */}
              <section className="mb-5 mt-3">
                <h4 className="fw-bold text-dark mb-3">1. Traditional Programming vs. Machine Learning</h4>
                <p className="lh-base text-secondary">
                  In classical computer science, programmers explicitly codify rules in software to transform input data into expected outputs. In Machine Learning (ML), the paradigm flips: the algorithm is provided with historical data and answers (labels) to automatically discover the underlying rules.
                </p>
                <div className="p-4 bg-light rounded border text-center my-4">
                  <svg viewBox="0 0 800 280" className="w-100" style={{ maxHeight: "300px" }}>
                    <g transform="translate(20, 20)">
                      <rect x="-5" y="0" width="370" height="230" rx="12" fill="#ffffff" stroke="#dee2e6" strokeWidth="2" />
                      <text x="180" y="35" textAnchor="middle" fontWeight="bold" fill="#212529" fontSize="16">Traditional Programming</text>
                      
                      <rect x="30" y="60" width="100" height="40" rx="6" fill="#e9ecef" />
                      <text x="80" y="85" textAnchor="middle" fontSize="14" fill="#495057">Data</text>
                      
                      <rect x="30" y="120" width="100" height="40" rx="6" fill="#e9ecef" />
                      <text x="80" y="145" textAnchor="middle" fontSize="14" fill="#495057">Rules</text>
                      <line x1="130" y1="80" x2="180" y2="100" stroke="#0d6efd" strokeWidth="2" />
                      <line x1="130" y1="140" x2="180" y2="100" stroke="#0d6efd" strokeWidth="2" />

                      <rect x="180" y="80" width="80" height="40" rx="6" fill="#0d6efd" />
                      <text x="220" y="105" textAnchor="middle" fontSize="14" fill="#ffffff" fontWeight="bold">Engine</text>

                      <line x1="260" y1="100" x2="310" y2="100" stroke="#0d6efd" strokeWidth="2" />
                      
                      <circle cx="320" cy="100" r="27" fill="#198754" />
                      <text x="320" y="105" textAnchor="middle" fontSize="11" fill="#ffffff" fontWeight="bold">Answers</text>
                    </g>
                    <g transform="translate(430, 20)">
                      <rect x="0" y="0" width="370" height="230" rx="12" fill="#ffffff" stroke="#dee2e6" strokeWidth="2" />
                      <text x="195" y="35" textAnchor="middle" fontWeight="bold" fill="#212529" fontSize="16">Machine Learning</text>

                      <rect x="30" y="60" width="100" height="40" rx="6" fill="#e9ecef" />
                      <text x="80" y="85" textAnchor="middle" fontSize="14" fill="#495057">Data</text>
                      
                      <rect x="30" y="120" width="100" height="40" rx="6" fill="#e9ecef" />
                      <text x="80" y="145" textAnchor="middle" fontSize="14" fill="#495057">Answers</text>
                      <line x1="130" y1="80" x2="180" y2="100" stroke="#0d6efd" strokeWidth="2" />
                      <line x1="130" y1="140" x2="180" y2="100" stroke="#0d6efd" strokeWidth="2" />

                      <rect x="180" y="80" width="80" height="40" rx="6" fill="#0d6efd" />
                      <text x="220" y="105" textAnchor="middle" fontSize="14" fill="#ffffff" fontWeight="bold">ML Model</text>

                      <line x1="260" y1="100" x2="310" y2="100" stroke="#0d6efd" strokeWidth="2" />
                      
                      <circle cx="320" cy="100" r="27" fill="#ffc107" />
                      <text x="320" y="105" textAnchor="middle" fontSize="11" fill="#000" fontWeight="bold">Rules</text>
                    </g>
                  </svg>
                </div>

                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="p-3 bg-light border rounded h-100">
                      <h6 className="fw-bold text-dark mb-1">Traditional Paradigm</h6>
                      <p className="small text-secondary mb-0">
                        <code>Data + Rules &rarr; Answers</code><br />
                        Requires human domain experts to write explicit procedural rules for every edge case.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="p-3 bg-light border rounded h-100">
                      <h6 className="fw-bold text-dark mb-1">Machine Learning Paradigm</h6>
                      <p className="small text-secondary mb-0">
                        <code>Data + Answers &rarr; Rules</code><br />
                        An optimization algorithm analyzes historical data to learn mathematical parameters automatically.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* SECTION 2: Applied Case Study */}
              <section className="mb-5 mt-3">
                <h4 className="fw-bold text-dark mb-3">
                  2. Applied Case Study: Real Estate Valuation (House Sales Price Prediction)
                </h4>
                <p className="lh-base text-secondary">
                  Predicting home prices serves as the foundational case study for understanding regression. Real estate prices are continuous values influenced by several input features like property size (&theta;<sub>1</sub>) and buyer budget (&theta;<sub>2</sub>).
                </p>
                <div className="row g-4 my-3">
                  <div className="col-md-6">
                    <div className="card h-100 border-danger border-top border-6 shadow-sm bg-light">
                      <div className="card-body">
                        <span className="badge bg-danger mb-2">Approach A</span>
                        <h5 className="fw-bold text-dark">Traditional Software Engineering</h5>
                        <p className="small text-secondary">
                          Developers manually program explicit heuristics and nested logical conditionals:
                        </p>

                        <div className="p-3 bg-dark text-white rounded font-monospace small mb-3">
                          <code>
                            if (size &gt; 2000 &amp;&amp; budget &lt;= 500000) {"{"}<br />
                            &nbsp;&nbsp;return 450000;<br />
                            {"}"} else if (size &gt; 1500) {"{"}<br />
                            &nbsp;&nbsp;return 350000;<br />
                            {"}"}
                          </code>
                        </div>

                        <h6 className="fw-bold text-danger fs-6 mb-1">Core Flaws:</h6>
                        <ul className="small text-secondary mb-0 ps-3">
                          <li><strong>Brittle &amp; Unscalable:</strong> Writing manual rules for thousands of multi-dimensional feature combinations leads to unmaintainable code.</li>
                          <li><strong>Poor Generalization:</strong> Fails completely when evaluating unseen queries outside predefined ranges.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card h-100 border-success border-top border-6 shadow-sm bg-light">
                      <div className="card-body">
                        <span className="badge bg-success mb-2">Approach B</span>
                        <h5 className="fw-bold text-dark">Machine Learning Modeling</h5>
                        <p className="small text-secondary">
                          The system receives historical data pairings (size, budget, actual price) to discover the mapping function <span><i>f</i>(<i>X</i>) {"\u2248"} <i>Y</i></span>:
                        </p>

                        <div className="p-3 bg-dark text-white rounded font-monospace small mb-3 text-center">
                          y&#770; = &theta;<sub>0</sub> + &theta;<sub>1</sub>(Size) + &theta;<sub>2</sub>(Budget)
                        </div>

                        <h6 className="fw-bold text-success fs-6 mb-1">Key Advantages:</h6>
                        <ul className="small text-secondary mb-0 ps-3">
                          <li><strong>Automatic Parameter Discovery:</strong> Calculates optimal feature weights &theta; without human guessing.</li>
                          <li><strong>Continuous Generalization:</strong> Predicts fluid prices for any property size smoothly.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

<div className="p-4 mt-5 mb-5 bg-light rounded border text-center my-4">
  <h6 className="fw-bold text-dark mb-3">Data Flow in Real Estate ML Model</h6>
  <svg viewBox="0 0 700 160" className="w-100" style={{ maxHeight: "180px" }}>
    <rect x="20" y="20" width="140" height="40" rx="6" fill="#e9ecef" stroke="#ced4da" />
    <text x="90" y="45" textAnchor="middle" fontSize="12" fill="#212529">
      Feature: Size (<tspan fontStyle="italic">x</tspan><tspan fontSize="9" dy="2">1</tspan>)
    </text>
    <rect x="20" y="80" width="140" height="40" rx="6" fill="#e9ecef" stroke="#ced4da" />
    <text x="90" y="105" textAnchor="middle" fontSize="12" fill="#212529">
      Feature: Budget (<tspan fontStyle="italic">x</tspan><tspan fontSize="9" dy="2">2</tspan>)
    </text>
    <line x1="160" y1="40" x2="260" y2="65" stroke="#0d6efd" strokeWidth="2" />
    <line x1="160" y1="100" x2="260" y2="75" stroke="#0d6efd" strokeWidth="2" />
    <rect x="260" y="45" width="180" height="50" rx="8" fill="#0d6efd" />
    <text x="350" y="75" textAnchor="middle" fontSize="13" fill="#ffffff" fontWeight="bold">
      ML Optimization Engine
    </text>
    <line x1="440" y1="70" x2="520" y2="70" stroke="#0d6efd" strokeWidth="2" />
    <rect x="520" y="45" width="160" height="50" rx="8" fill="#198754" />
    <text x="600" y="75" textAnchor="middle" fontSize="13" fill="#ffffff" fontWeight="bold">
      Predicted Price (y&#770;)
    </text>
  </svg>
</div>

<div className="col-12 mb-5">
            <div className="card border-0 shadow-sm p-4 bg-white">
              <h5 className="fw-bold text-dark border-bottom pb-2 mb-3">Supervised vs. Unsupervised Learning</h5>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="p-3 border rounded bg-light h-100">
                    <h6 className="fw-bold text-primary">Supervised Learning</h6>
                    <p className="small text-secondary mb-2">
                      <strong>Input Data:</strong> Features (<em>X</em>) + Target Labels (<em>y</em>).
                    </p>
                    <p className="small text-secondary mb-0">
                      <strong>Objective:</strong> Learn a mapping function <em>f(X) &rarr; y</em> to predict targets on unseen data. The model receives constant ground-truth feedback during training via a loss function.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="p-3 border rounded bg-light h-100">
                    <h6 className="fw-bold text-primary">Unsupervised Learning</h6>
                    <p className="small text-secondary mb-2">
                      <strong>Input Data:</strong> Features (<em>X</em>) only (No target labels).
                    </p>
                    <p className="small text-secondary mb-0">
                      <strong>Objective:</strong> Discover underlying patterns, groupings, or lower-dimensional structures within data without explicit target feedback (e.g., K-Means, PCA).
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-3 p-3 bg-primary bg-opacity-10 border border-primary rounded">
                <h6 className="fw-bold text-dark mb-1">Why is Regression Supervised Learning?</h6>
                <ul className="small text-secondary mb-0 ps-3">
                  <li>
                    <strong>Ground-Truth Targets (<em>y</em>):</strong> Regression relies on paired dataset targets (e.g., house prices, test scores).
                  </li>
                  <li>
                    <strong>Explicit Error Calculation:</strong> Model outputs <em>y&#770;</em> are directly subtracted from true target values <em>y</em> to compute residual error: <em>Error = y&#770; - y</em>.
                  </li>
                  <li>
                    <strong>Supervised Updates:</strong> Optimization algorithms (like Gradient Descent) require this explicit target difference to calculate parameter gradients and update weights.
                  </li>
                </ul>
              </div>
            </div>
          </div>

                <div className="card border-0 shadow-sm bg-info bg-opacity-10 border-start border-info border-4 rounded-3 p-4 mt-4">
  <div className="d-flex align-items-center gap-2 mb-3">
    <h6 className="fw-bold text-dark mb-0 fs-6">Key Takeaways for Students</h6>
  </div>
  <ol className="list-unstyled mb-0 d-flex flex-column gap-3 small text-secondary">
    <li className="d-flex align-items-start gap-2">
      <span className="badge bg-info text-dark rounded-pill px-2 py-1 mt-1">1</span>
      <div>
        <strong className="text-dark">Regression Target:</strong> In house price estimation, the output (y&#770;) is a <em>continuous numerical scalar</em> rather than a discrete classification label.
      </div>
    </li>
    <li className="d-flex align-items-start gap-2">
      <span className="badge bg-info text-dark rounded-pill px-2 py-1 mt-1">2</span>
      <div>
        <strong className="text-dark">Role of Weights (&theta;):</strong> &theta;<sub>1</sub> and &theta;<sub>2</sub> quantify how much y&#770; shifts for every single unit increase in property size or buyer budget.
      </div>
    </li>
    <li className="d-flex align-items-start gap-2">
      <span className="badge bg-info text-dark rounded-pill px-2 py-1 mt-1">3</span>
      <div>
        <strong className="text-dark">Transition to Next Lecture:</strong> In Lecture 1.1, we learn in depth <strong>Gradient Descent</strong> and <strong>Linear Regression</strong>.
      </div>
    </li>
  </ol>
</div>
              </section>

              <div className="d-flex justify-content-between align-items-center mt-5 pt-3 border-top">
                <Link to="/" className="btn btn-outline-secondary">
                  &larr; Back to Curriculum
                </Link>
                <Link to="/lecture-1-1" className="btn btn-primary">
                  Next: Lecture 1.1 Linear Regression &rarr;
                </Link>
              </div>
            </article>
          </div>
        </div>
      </main>
    </div>
  );
}