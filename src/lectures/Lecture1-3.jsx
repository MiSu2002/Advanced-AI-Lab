import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";

export default function Lecture1_3() {
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
                  Lecture 1.3: Loss Functions
                </li>
              </ol>
            </nav>

            <article className="card shadow-sm border-0 p-4 p-md-5 bg-white">
              <header className="border-bottom pb-4 mb-4">
                <span className="badge bg-primary mb-2">Module 1.3</span>
                <h2 className="fw-bold text-dark brand-poppins mb-2">
                  Loss Functions in Linear &amp; Logistic Regression
                </h2>
                <p className="text-muted lead mb-0">
                  Mathematical loss formulations, convexity analysis, Mean Squared Error (MSE), and Binary Cross-Entropy (Log Loss).
                </p>
              </header>

              {/* Section 1: MSE */}
              <section className="mb-5">
                <h4 className="fw-bold text-dark mb-3">1. Mean Squared Error (MSE) for Linear Regression</h4>
                <p className="lh-base text-secondary">
                  Mean Squared Error evaluates the average squared difference between actual target values (y) and predicted linear outputs (y&#770;):
                </p>

                <div className="p-3 bg-dark text-white rounded font-monospace fs-6 text-center my-3">
                  Cost Function (MSE) = ( Actual Value - Predicted Value )<sup>2</sup>
                  <br/><br/>MSE = <math><mfrac><mi>1</mi><mn>n</mn></mfrac></math>&nbsp;
                  <math><msubsup><mi>&#8721;</mi><mi>i=1</mi><mi>n</mi></msubsup></math>
                  (y<sup>i</sup> - y&#770;<sup>i</sup>)<sup>2</sup>
                </div>

                <div className="p-3 bg-light border-start stroke-primary border-4 rounded my-3">
                  <h6 className="fw-bold mb-1">Why Square the Errors?</h6>
                  <ul className="mb-0 small text-secondary">
                    <li><strong>Cancels Negative Signs:</strong> Prevents positive and negative errors from canceling each other out.</li>
                    <li><strong>Penalizes Outliers:</strong> Squaring penalizes larger discrepancies significantly more heavily than smaller errors.</li>
                  </ul>
                </div>
              </section>

              {/* Section 2: Why Non-Convexity Fails in Logistic Regression */}
              <section className="mb-5">
                <h4 className="fw-bold text-dark mb-3">2. Why MSE Cannot Be Used for Logistic Regression</h4>
                <p className="lh-base text-secondary">
                  If we plug the non-linear Sigmoid function &sigma; directly into the Mean Squared Error equation, the resulting cost landscape becomes <strong>non-convex</strong> (wavy with multiple local minima). Gradient descent can easily get trapped in local suboptimal points instead of finding the global minimum.
                </p>

                <div className="p-4 bg-light rounded border text-center my-4">
                  <svg viewBox="0 0 700 200" className="w-100" style={{ maxHeight: "240px" }}>
                    <g transform="translate(20, 10)">
                      <rect x="0" y="-5" width="310" height="190" rx="8" fill="#ffffff" stroke="#dee2e6" />
                      <text x="155" y="25" textAnchor="middle" fontWeight="bold" fill="#dc3545" fontSize="13">MSE + Sigmoid (Non-Convex)</text>
                      <path d="M 30 50 Q 80 160 120 90 T 200 130 T 280 60" fill="none" stroke="#dc3545" strokeWidth="2.5" />
                      <circle cx="120" cy="90" r="5" fill="#dc3545" />
                      <text x="120" y="75" textAnchor="middle" fontSize="10" fill="#dc3545">Local Minimum (Trapped)</text>
                    </g>

                    <g transform="translate(370, 10)">
                      <rect x="0" y="-5" width="310" height="190" rx="8" fill="#ffffff" stroke="#dee2e6" />
                      <text x="155" y="25" textAnchor="middle" fontWeight="bold" fill="#198754" fontSize="13">Log Loss / Binary Cross-Entropy (Convex)</text>
                      <path d="M 40 50 Q 155 180 270 50" fill="none" stroke="#198754" strokeWidth="2.5" />
                      <circle cx="155" cy="115" r="5" fill="#198754" />
                      <text x="155" y="135" textAnchor="middle" fontSize="10" fill="#198754">Global Minimum</text>
                    </g>
                  </svg>
                </div>
              </section>

              {/* Section 3: Binary Cross-Entropy / Log Loss */}
              <section className="mb-5">
                <h4 className="fw-bold text-dark mb-3">3. Binary Cross-Entropy Loss (Log Loss)</h4>
                <p className="lh-base text-secondary">
                  To guarantee a smooth, bowl-shaped <strong>convex</strong> optimization landscape, we use Binary Cross-Entropy Loss. For a single sample, the loss function is defined conditionally:
                </p>

                <div className="p-3 bg-dark text-center text-white rounded font-monospace fs-6 my-3">
                  Loss(y&#770;, y) =  -log(y&#770;) if y = 1 
                  -log(1 - y&#770;) if y = 0
                </div>
                <h6 className="fw-bold mt-4 text-dark">Penalty Behavior Analysis:</h6>
                <div className="row g-3 my-2">
                  <div className="col-md-6">
                    <div className="p-3 border rounded bg-light">
                      <strong className="text-primary d-block mb-1">When Actual y = 1:</strong>
                      <ul className="small text-secondary mb-0 ps-3">
                        <li>Predict y&#770; = 0.99 &rarr; -log(0.99) &asymp; 0.01 (Tiny penalty)</li>
                        <li>Predict y&#770; = 0.01 &rarr; -log(0.01) &asymp; 4.60 (Huge penalty)</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="p-3 border rounded bg-light">
                      <strong className="text-primary d-block mb-1">When Actual y = 0:</strong>
                      <ul className="small text-secondary mb-0 ps-3">
                        <li>Predict y&#770; = 0.01 &rarr; -log(0.99) &asymp; 0.01 (Tiny penalty)</li>
                        <li>Predict y&#770; = 0.99 &rarr; -log(0.01) &asymp; 4.60 (Huge penalty)</li> 
                      </ul>
                    </div>
                  </div>
                </div>

                <h6 className="fw-bold mt-4 text-dark">Combined Formula (Cost Function J(&theta;)):</h6>
                <p className="lh-base text-secondary">
                  By joining both conditional equations into a single algebraic expression using indicators y and (1-y), we arrive at the cost function over m samples:
                </p>

                <div className="p-3 bg-dark text-white rounded font-monospace fs-5 text-center my-3">
                  J(&theta;) = - <math><mfrac><mi>1</mi><mn>m</mn></mfrac></math>&nbsp;
                  <math><msubsup><mi>&#8721;</mi><mi>i=1</mi><mi>m</mi></msubsup></math>
                  [y<sup>i</sup> log(y&#770;<sup>i</sup>) + (1 - y<sup>i</sup>) log(1 - y&#770;<sup>i</sup>)]
                </div>
                <div className="row g-3 my-3">
  <div className="col-md-6">
    <div className="p-3 bg-light border-start border-success border-4 rounded shadow-sm h-100">
      <div className="d-flex align-items-center mb-2">
        <span className="badge bg-success me-2">y = 1</span>
        <h6 className="fw-bold text-dark mb-0">Positive Class</h6>
      </div>
      <p className="small text-secondary mb-0">
        The second term <code>(1 - y)</code> becomes <strong>0</strong>, leaving:
      </p>
      <div className="p-2 bg-white rounded border text-center font-monospace mt-2 text-dark">
        -log(y&#770;)
      </div>
    </div>
  </div>

  <div className="col-md-6">
    <div className="p-3 bg-light border-start border-danger border-4 rounded shadow-sm h-100">
      <div className="d-flex align-items-center mb-2">
        <span className="badge bg-danger me-2">y = 0</span>
        <h6 className="fw-bold text-dark mb-0">Negative Class</h6>
      </div>
      <p className="small text-secondary mb-0">
        The first term <code>y</code> becomes <strong>0</strong>, leaving:
      </p>
      <div className="p-2 bg-white rounded border text-center font-monospace mt-2 text-dark">
        -log(1 - y&#770;)
      </div>
    </div>
  </div>
</div>
              </section>

              <div className="d-flex justify-content-between align-items-center mt-5 pt-3 border-top">
                <Link to="/lecture-1-2" className="btn btn-outline-secondary">
                  &larr; Previous: Lecture 1.2
                </Link>
                <Link to="/" className="btn btn-primary">
                  Return to Main Menu &rarr;
                </Link>
              </div>
            </article>
          </div>
        </div>
      </main>
      <footer className="mt-5 text-center text-muted small">
          <p>© {new Date().getFullYear()} Advanced AI Lab by Soumita Basu. Optimized for concurrent laboratory access.</p>
        </footer>
    </div>
  );
}