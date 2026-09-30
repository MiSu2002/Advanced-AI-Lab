import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";

export default function Lecture1_2() {
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
                  Lecture 1.2: Logistic Regression
                </li>
              </ol>
            </nav>

            <article className="card shadow-sm border-0 p-4 p-md-5 bg-white">
              <header className="border-bottom pb-4 mb-4">
                <span className="badge bg-primary mb-2">Module 1.2</span>
                <h2 className="fw-bold text-dark brand-poppins mb-2">
                  Logistic Regression &amp; Binary Classification
                </h2>
                <p className="text-muted lead mb-0">
                  Mapping continuous raw outputs into bounded probability distributions using the Sigmoid activation function.
                </p>
              </header>

              <section className="mb-5">
                <h4 className="fw-bold text-dark mb-3">1. Why Not Use Linear Regression for Classification?</h4>
                <p className="lh-base text-secondary">
                  Attempting to use a straight regression line for binary classification fails due to two core issues:
                </p>
                <div className="row g-3 mb-4">
                  <div className="col-md-6">
                    <div className="p-3 bg-light border rounded h-100">
                      <h6 className="fw-bold text-danger">Unbounded Output</h6>
                      <p className="small text-secondary mb-0">
                        Linear lines produce outputs from -&infin; to +&infin;, whereas probabilities must strictly remain between 0 and 1 (0% to 100%).
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="p-3 bg-light border rounded h-100">
                      <h6 className="fw-bold text-danger">Sensitivity to Outliers</h6>
                      <p className="small text-secondary mb-0">
                        A single extreme data point significantly tilts a straight line, incorrectly shifting decision boundaries for the entire dataset.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-5">
                <h4 className="fw-bold text-dark mb-3">2. The Sigmoid "Squeezer" Function</h4>
                <p className="lh-base text-secondary">
                  Logistic Regression passes raw linear predictions (z = &theta;<sub>0</sub> + &theta;<sub>1</sub>x) through a mathematical function called the <strong>Sigmoid function</strong> (&sigma;(z)), acting as a "squeezer" to map any number into a probability bounded between 0 and 1.
                </p>

                <div className="p-3 bg-dark text-white rounded font-monospace fs-5 text-center my-3">
                  &sigma;(z) = <math><mfrac><mi>1</mi><mn>1 + e⁻ᶻ</mn></mfrac></math>
                </div>

                <div className="p-4 bg-light rounded border text-center my-4">
                  <svg viewBox="0 0 500 220" className="w-100" style={{ maxHeight: "260px" }}>
                    <line x1="50" y1="180" x2="450" y2="180" stroke="#6c757d" strokeWidth="1.5" />
                    <line x1="50" y1="30" x2="450" y2="30" stroke="#adb5bd" strokeDasharray="4" />
                    <text x="40" y="35" fontSize="11" fill="#6c757d" textAnchor="end">1.0 (100%)</text>
                    <text x="40" y="185" fontSize="11" fill="#6c757d" textAnchor="end">0.0 (0%)</text>
                    <text x="40" y="105" fontSize="11" fill="#0d6efd" textAnchor="end">0.5 Threshold</text>
                    
                    <line x1="50" y1="105" x2="450" y2="105" stroke="#0d6efd" strokeDasharray="2" strokeWidth="1" />

                    <path d="M 50 175 Q 200 175 250 105 T 450 35" fill="none" stroke="#0d6efd" strokeWidth="3" />

                    <circle cx="250" cy="105" r="5" fill="#0d6efd" />
                    <text x="260" y="120" fontSize="11" fontWeight="bold" fill="#212529">z = 0 &rarr; P = 0.5</text>
                  </svg>
                </div>
              </section>

              <section className="mb-5">
                <h4 className="fw-bold text-dark mb-3">3. Decision Boundaries &amp; Multiple Inputs</h4>
                <p className="lh-base text-secondary">
                  By default, a probability cutoff threshold is set at 0.5 (50%):
                </p>
                <ul className="text-muted">
                  <li>If y&#770; &ge; 0.5 &rArr; Predict <strong>Class 1</strong> (Pass / Yes)</li>
                  <li>If y&#770; &lt; 0.5 &rArr; Predict <strong>Class 0</strong> (Fail / No)</li>
                </ul>
                <p className="lh-base text-secondary">
                  When dealing with multiple input features (x<sub>1</sub>, x<sub>2</sub>, x<sub>3</sub>), the linear term inside the sigmoid simply expands:
                  <div className="p-3 bg-dark text-white rounded font-monospace fs-5 text-center my-3">
                  y&#770; = &sigma; (&theta;<sub>0</sub> + &theta;<sub>1</sub>x<sub>1</sub> + &theta;<sub>2</sub>x<sub>2</sub> + &theta;<sub>3</sub>x<sub>3</sub>)
                  </div>
                </p>
              </section>

              <div className="d-flex justify-content-between align-items-center mt-5 pt-3 border-top">
                <Link to="/lecture-1-1" className="btn btn-outline-secondary">
                  &larr; Previous: Lecture 1.1
                </Link>
                <Link to="/lecture-1-3" className="btn btn-primary">
                  Next: Lecture 1.3 Loss Functions &rarr;
                </Link>
              </div>
            </article>
          </div>
        </div>
      </main>
    </div>
  );
}