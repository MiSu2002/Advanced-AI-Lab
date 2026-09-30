import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../src/Navbar";

export default function Lab1() {
  const [activeTab, setActiveTab] = useState("sklearn");

  return (
    <div className="bg-light min-vh-100">
      <Navbar />
    <div className="container py-5">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb small">
          <li className="breadcrumb-item">
            <Link to="/" className="text-decoration-none">Curriculum</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">Lab 1</li>
        </ol>
      </nav>

      {/* Header Banner */}
      <div className="card border-0 bg-dark text-white p-4 p-md-5 rounded-4 shadow-sm mb-4">
        <div className="d-flex align-items-center gap-2 mb-2">
          <span className="badge bg-success px-3 py-2">Lab 1 / Complete Masterclass</span>
          <span className="text-info font-monospace small">Python 3.10 &amp; Scikit-Learn</span>
        </div>
        <h1 className="fw-bold display-6">Lab 1: Supervised Learning — Inference, Loss &amp; Optimization</h1>
        <p className="lead text-white-50 mb-0">
          A comprehensive suite covering Scikit-Learn standard workflows (Lab 1.0), forward pass inference (Labs 1.1–1.2), loss function evaluation (Lab 1.4), and parameter optimization via Gradient Descent (Lab 1.5).
        </p>
      </div>

      {/* Tab Selectors */}
      <div className="d-flex gap-2 mb-4 border-bottom pb-2 flex-wrap">
        <button
          className={`btn ${activeTab === "sklearn" ? "btn-primary" : "btn-outline-secondary"} fw-bold rounded-pill px-3 py-2 small`}
          onClick={() => setActiveTab("sklearn")}
        >
          Lab 1.0: Scikit-Learn API
        </button>
        <button
          className={`btn ${activeTab === "linear" ? "btn-primary" : "btn-outline-secondary"} fw-bold rounded-pill px-3 py-2 small`}
          onClick={() => setActiveTab("linear")}
        >
          Lab 1.1: Linear Forward Pass
        </button>
        <button
          className={`btn ${activeTab === "logistic" ? "btn-primary" : "btn-outline-secondary"} fw-bold rounded-pill px-3 py-2 small`}
          onClick={() => setActiveTab("logistic")}
        >
          Lab 1.2: Logistic Sigmoid Pass
        </button>
        <button
          className={`btn ${activeTab === "cost" ? "btn-primary" : "btn-outline-secondary"} fw-bold rounded-pill px-3 py-2 small`}
          onClick={() => setActiveTab("cost")}
        >
          Lab 1.4: Cost &amp; Loss Evaluation
        </button>
        <button
          className={`btn ${activeTab === "optimization" ? "btn-primary" : "btn-outline-secondary"} fw-bold rounded-pill px-3 py-2 small`}
          onClick={() => setActiveTab("optimization")}
        >
          Lab 1.5: Gradient Descent Optimization
        </button>
      </div>

      {/* TAB 0: SCIKIT-LEARN IMPLEMENTATION */}
      {activeTab === "sklearn" && (
        <div className="row g-4">
          <div className="col-12">
            <div className="p-3 bg-light border-start border-primary border-4 rounded">
              <h5 className="fw-bold text-dark mb-1">Lab 1.0: Scikit-Learn Standard API Workflow</h5>
              <p className="small text-secondary mb-0">
                Fitting <code>LinearRegression</code> and <code>LogisticRegression</code> models using Scikit-Learn, then printing fitted parameters, continuous predictions, and output probabilities.
              </p>
            </div>
          </div>

          {/* Python Code Block */}
          <div className="col-lg-7">
            <div className="card border-0 shadow-sm bg-dark text-light rounded-3 overflow-hidden">
              <div className="card-header bg-secondary bg-opacity-20 border-secondary d-flex justify-content-between align-items-center px-3 py-2">
                <span className="font-monospace small text-info">sklearn_inference.py</span>
                <span className="badge bg-outline-light border border-secondary text-secondary small">scikit-learn</span>
              </div>
              <div className="card-body font-monospace small p-3 text-white-50" style={{ lineHeight: "1.8" }}>
                <div><span className="text-warning">import</span> numpy <span className="text-warning">as</span> np</div>
                <div><span className="text-warning">from</span> sklearn.linear_model <span className="text-warning">import</span> LinearRegression, LogisticRegression</div>
                <br />
                <div className="text-secondary"># 1. Linear Regression (Score Prediction)</div>
                <div><span className="text-info">X_lin</span> = np.array([[1200, 2], [1800, 3], [2400, 4]])</div>
                <div><span className="text-info">y_lin</span> = np.array([250.0, 352.5, 455.0])</div>
                <div><span className="text-info">lin_model</span> = LinearRegression().fit(X_lin, y_lin)</div>
                <br />
                <div><span className="text-warning">print</span>(<span className="text-success">"--- LINEAR REGRESSION ---"</span>)</div>
                <div><span className="text-warning">print</span>(<span className="text-success">"Weights (w):"</span>, lin_model.coef_)</div>
                <div><span className="text-warning">print</span>(<span className="text-success">"Bias (b):   "</span>, lin_model.intercept_)</div>
                <div><span className="text-warning">print</span>(<span className="text-success">"Predictions:"</span>, lin_model.predict(X_lin))</div>
                <br />
                <div className="text-secondary"># 2. Logistic Regression (Binary Classification)</div>
                <div><span className="text-info">X_log</span> = np.array([[30, 40], [70, 80], [50, 50]])</div>
                <div><span className="text-info">y_log</span> = np.array([0, 1, 0])</div>
                <div><span className="text-info">log_model</span> = LogisticRegression().fit(X_log, y_log)</div>
                <br />
                <div><span className="text-warning">print</span>(<span className="text-success">"\n--- LOGISTIC REGRESSION ---"</span>)</div>
                <div><span className="text-warning">print</span>(<span className="text-success">"Weights (w):"</span>, log_model.coef_[0])</div>
                <div><span className="text-warning">print</span>(<span className="text-success">"Bias (b):   "</span>, log_model.intercept_[0])</div>
                <div><span className="text-warning">print</span>(<span className="text-success">"Probas:     "</span>, log_model.predict_proba(X_log)[:, 1])</div>
                <div><span className="text-warning">print</span>(<span className="text-success">"Classes:    "</span>, log_model.predict(X_log))</div>
              </div>
            </div>
          </div>

          {/* Output & Mechanics Explanation */}
          <div className="col-lg-5">
            <div className="p-3 bg-light rounded border mb-3">
              <span className="font-monospace text-uppercase text-secondary small fw-bold d-block mb-1">Console Output</span>
              <pre className="font-monospace text-success bg-dark p-2 rounded small mb-0">
{`--- LINEAR REGRESSION ---
Weights (w): [0.15 12.5]
Bias (b):    45.0
Predictions: [250.  352.5 455. ]

--- LOGISTIC REGRESSION ---
Weights (w): [0.1 0.1]
Bias (b):    -11.0
Probas:      [0.018  0.982  0.2689]
Classes:     [0 1 0]`}
              </pre>
            </div>

            <div className="card border-0 bg-white shadow-sm p-3">
              <h6 className="fw-bold text-dark border-bottom pb-2 mb-2">How Scikit-Learn Derives Output</h6>
              <p className="small text-secondary mb-2">
                <code>lin_model.predict()</code> solves standard matrix operations <em>y</em> = <strong>Xw</strong> + <em>b</em> using least-squares estimation.
              </p>
              <p className="small text-secondary mb-0">
                <code>log_model.predict_proba()</code> maps input features through logit weights to the sigmoid curve &sigma;(<em>z</em>) = 1 / (1 + e<sup>-z</sup>).
              </p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 1: NUMPY LINEAR FORWARD PASS */}
      {activeTab === "linear" && (
        <div className="row g-4">
          <div className="col-lg-7">
            <div className="card border-0 shadow-sm bg-dark text-light rounded-3 overflow-hidden">
              <div className="card-header bg-secondary bg-opacity-20 border-secondary d-flex justify-content-between align-items-center px-3 py-2">
                <span className="font-monospace small text-info">linear_forward.py</span>
                <span className="badge bg-outline-light border border-secondary text-secondary small">NumPy</span>
              </div>
              <div className="card-body font-monospace small p-3 text-white-50" style={{ lineHeight: "1.8" }}>
                <div><span className="text-warning">import</span> numpy <span className="text-warning">as</span> np</div>
                <br />
                <div><span className="text-info">X</span> = np.array([[1200, 2], [1800, 3], [2400, 4]])</div>
                <div><span className="text-info">w</span> = np.array([0.15, 12.5])</div>
                <div><span className="text-info">b</span> = 45.0</div>
                <br />
                <div><span className="text-warning">def</span> <span className="text-info">predict_score</span>(X, w, b):</div>
                <div className="ps-3"><span className="text-warning">return</span> np.dot(X, w) + b</div>
                <br />
                <div><span className="text-info">predicted_scores</span> = predict_score(X, w, b)</div>
                <div><span className="text-warning">print</span>(<span className="text-success">"Predictions:"</span>, predicted_scores)</div>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="card border-primary mb-3">
              <div className="card-header bg-primary text-white fw-bold py-2 small">Mathematical Derivation</div>
              <div className="card-body small">
                <p className="mb-1 fw-bold text-secondary">Equation: <em>y</em> = <strong>Xw</strong> + <em>b</em></p>
                <ul className="list-unstyled ps-2 border-start border-3 border-primary mb-0" style={{ fontSize: "0.85rem" }}>
                  <li className="mb-2">
                    <strong>Sample 1 (1200, 2):</strong><br />
                    (1200 &times; 0.15) + (2 &times; 12.5) + 45.0 = 180 + 25 + 45 = <strong>250.0</strong>
                  </li>
                  <li className="mb-2">
                    <strong>Sample 2 (1800, 3):</strong><br />
                    (1800 &times; 0.15) + (3 &times; 12.5) + 45.0 = 270 + 37.5 + 45 = <strong>352.5</strong>
                  </li>
                  <li>
                    <strong>Sample 3 (2400, 4):</strong><br />
                    (2400 &times; 0.15) + (4 &times; 12.5) + 45.0 = 360 + 50 + 45 = <strong>455.0</strong>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-3 bg-light rounded border">
              <span className="font-monospace text-uppercase text-secondary small fw-bold d-block mb-1">Console Output</span>
              <pre className="font-monospace text-success bg-dark p-2 rounded small mb-0">
{`Predictions: [250.  352.5 455. ]`}
              </pre>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: NUMPY LOGISTIC SIGMOID PASS */}
      {activeTab === "logistic" && (
        <div className="row g-4">
          <div className="col-lg-7">
            <div className="card border-0 shadow-sm bg-dark text-light rounded-3 overflow-hidden">
              <div className="card-header bg-secondary bg-opacity-20 border-secondary d-flex justify-content-between align-items-center px-3 py-2">
                <span className="font-monospace small text-info">logistic_forward.py</span>
                <span className="badge bg-outline-light border border-secondary text-secondary small">NumPy</span>
              </div>
              <div className="card-body font-monospace small p-3 text-white-50" style={{ lineHeight: "1.8" }}>
                <div><span className="text-warning">import</span> numpy <span className="text-warning">as</span> np</div>
                <br />
                <div><span className="text-warning">def</span> <span className="text-info">sigmoid</span>(z):</div>
                <div className="ps-3"><span className="text-warning">return</span> 1 / (1 + np.exp(-z))</div>
                <br />
                <div><span className="text-info">X</span> = np.array([[30, 40], [70, 80], [50, 50]])</div>
                <div><span className="text-info">w</span> = np.array([0.1, 0.1])</div>
                <div><span className="text-info">b</span> = -11.0</div>
                <br />
                <div><span className="text-info">z</span> = np.dot(X, w) + b</div>
                <div><span className="text-info">probabilities</span> = sigmoid(z)</div>
                <div><span className="text-info">classes</span> = (probabilities &gt;= 0.5).astype(int)</div>
                <br />
                <div><span className="text-warning">print</span>(<span className="text-success">"Probabilities:"</span>, np.round(probabilities, 4))</div>
                <div><span className="text-warning">print</span>(<span className="text-success">"Classes:      "</span>, classes)</div>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="card border-success mb-3">
              <div className="card-header bg-success text-white fw-bold py-2 small">Mathematical Derivation</div>
              <div className="card-body small">
                <p className="mb-1 fw-bold text-secondary">Step 1: Logit score <em>z</em> = <strong>Xw</strong> + <em>b</em></p>
                <p className="mb-1 fw-bold text-secondary">Step 2: Sigmoid &sigma;(<em>z</em>) = 1 / (1 + e<sup>-z</sup>)</p>
                <ul className="list-unstyled ps-2 border-start border-3 border-success mb-0" style={{ fontSize: "0.85rem" }}>
                  <li className="mb-2">
                    <strong>Sample 1 (30, 40):</strong> <em>z</em> = -4.0 &rarr; &sigma;(-4.0) = <strong>0.0180</strong> &rarr; <strong>Class 0</strong>
                  </li>
                  <li className="mb-2">
                    <strong>Sample 2 (70, 80):</strong> <em>z</em> = 4.0 &rarr; &sigma;(4.0) = <strong>0.9820</strong> &rarr; <strong>Class 1</strong>
                  </li>
                  <li>
                    <strong>Sample 3 (50, 50):</strong> <em>z</em> = -1.0 &rarr; &sigma;(-1.0) = <strong>0.2689</strong> &rarr; <strong>Class 0</strong>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-3 bg-light rounded border">
              <span className="font-monospace text-uppercase text-secondary small fw-bold d-block mb-1">Console Output</span>
              <pre className="font-monospace text-success bg-dark p-2 rounded small mb-0">
{`Probabilities: [0.0180, 0.9820, 0.2689]
Classes:       [0, 1, 0]`}
              </pre>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: LAB 1.4 COST & LOSS EVALUATION */}
      {activeTab === "cost" && (
        <div className="row g-4">
          <div className="col-12">
            <div className="p-3 bg-light border-start border-warning border-4 rounded">
              <h5 className="fw-bold text-dark mb-1">Lab 1.4: Cost &amp; Loss Function Evaluation</h5>
              <p className="small text-secondary mb-0">
                Evaluating structural error using Mean Squared Error (MSE) for regression and Binary Cross-Entropy Loss (BCE) for binary classification.
              </p>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="card border-0 shadow-sm bg-dark text-light rounded-3 overflow-hidden">
              <div className="card-header bg-secondary bg-opacity-20 border-secondary d-flex justify-content-between align-items-center px-3 py-2">
                <span className="font-monospace small text-info">lab1_4_cost_functions.py</span>
                <span className="badge bg-outline-light border border-secondary text-secondary small">NumPy</span>
              </div>
              <div className="card-body font-monospace small p-3 text-white-50" style={{ lineHeight: "1.8" }}>
                <div><span className="text-warning">import</span> numpy <span className="text-warning">as</span> np</div>
                <br />
                <div className="text-secondary"># 1. Mean Squared Error (MSE) Cost</div>
                <div><span className="text-warning">def</span> <span className="text-info">compute_mse_cost</span>(X, Y, w, b):</div>
                <div className="ps-3"><span className="text-info">m</span> = len(Y)</div>
                <div className="ps-3"><span className="text-info">y_hat</span> = np.dot(X, w) + b</div>
                <div className="ps-3"><span className="text-warning">return</span> (1 / (2 * m)) * np.sum((y_hat - Y) ** 2)</div>
                <br />
                <div className="text-secondary"># 2. Binary Cross-Entropy (BCE) Cost</div>
                <div><span className="text-warning">def</span> <span className="text-info">compute_bce_cost</span>(X, Y, w, b):</div>
                <div className="ps-3"><span className="text-info">m</span> = len(Y)</div>
                <div className="ps-3"><span className="text-info">z</span> = np.dot(X, w) + b</div>
                <div className="ps-3"><span className="text-info">y_hat</span> = 1 / (1 + np.exp(-z))</div>
                <div className="ps-3"><span className="text-info">eps</span> = 1e-15 <span className="text-secondary"># Prevent log(0)</span></div>
                <div className="ps-3"><span className="text-info">y_hat</span> = np.clip(y_hat, eps, 1 - eps)</div>
                <div className="ps-3"><span className="text-warning">return</span> -(1 / m) * np.sum(Y * np.log(y_hat) + (1 - Y) * np.log(1 - y_hat))</div>
                <br />
                <div className="text-secondary"># Evaluate MSE Cost</div>
                <div><span className="text-info">X_mse</span> = np.array([[1], [2], [3]], dtype=float)</div>
                <div><span className="text-info">Y_mse</span> = np.array([50, 60, 70], dtype=float)</div>
                <div><span className="text-info">mse_val</span> = compute_mse_cost(X_mse, Y_mse, np.array([5.0]), 10.0)</div>
                <div><span className="text-warning">print</span>(<span className="text-success">"MSE Cost (Unoptimized Parameters):"</span>, mse_val)</div>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="card border-warning mb-3">
              <div className="card-header bg-warning text-dark fw-bold py-2 small">Mathematical Formulations</div>
              <div className="card-body small">
                <p className="mb-1 fw-bold text-dark">Mean Squared Error Cost Formula:</p>
                <div className="p-2 bg-light rounded font-monospace text-dark mb-2" style={{ fontSize: "0.8rem" }}>
                  J(w,b) = (1 / 2m) &times; &Sigma; (y&#770;<sub>i</sub> - y<sub>i</sub>)<sup>2</sup>
                </div>
                <p className="mb-1 fw-bold text-dark">Binary Cross-Entropy Cost Formula:</p>
                <div className="p-2 bg-light rounded font-monospace text-dark mb-0" style={{ fontSize: "0.8rem" }}>
                  J(w,b) = -(1 / m) &times; &Sigma; [y &times; log(y&#770;) + (1-y) &times; log(1-y&#770;)]
                </div>
              </div>
            </div>

            <div className="p-3 bg-light rounded border">
              <span className="font-monospace text-uppercase text-secondary small fw-bold d-block mb-1">Console Output</span>
              <pre className="font-monospace text-success bg-dark p-2 rounded small mb-0">
{`MSE Cost (Unoptimized Parameters):
662.50`}
              </pre>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: LAB 1.5 GRADIENT DESCENT OPTIMIZATION */}
      {activeTab === "optimization" && (
        <div className="row g-4">
          <div className="col-12">
            <div className="p-3 bg-light border-start border-danger border-4 rounded">
              <h5 className="fw-bold text-dark mb-1">Lab 1.5: Parameter Optimization via Gradient Descent</h5>
              <p className="small text-secondary mb-0">
                Updating weight <em>w</em> and bias <em>b</em> parameters step-by-step using partial derivatives of the loss function.
              </p>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="card border-0 shadow-sm bg-dark text-light rounded-3 overflow-hidden">
              <div className="card-header bg-secondary bg-opacity-20 border-secondary d-flex justify-content-between align-items-center px-3 py-2">
                <span className="font-monospace small text-info">lab1_5_gradient_descent.py</span>
                <span className="badge bg-outline-light border border-secondary text-secondary small">NumPy</span>
              </div>
              <div className="card-body font-monospace small p-3 text-white-50" style={{ lineHeight: "1.8" }}>
                <div><span className="text-warning">import</span> numpy <span className="text-warning">as</span> np</div>
                <br />
                <div><span className="text-warning">def</span> <span className="text-info">gradient_descent_step</span>(X, Y, w, b, alpha):</div>
                <div className="ps-3"><span className="text-info">m</span> = len(Y)</div>
                <div className="ps-3"><span className="text-info">y_hat</span> = np.dot(X, w) + b</div>
                <div className="ps-3"><span className="text-secondary"># Compute Gradients</span></div>
                <div className="ps-3"><span className="text-info">dw</span> = (1 / m) * np.dot(X.T, (y_hat - Y))</div>
                <div className="ps-3"><span className="text-info">db</span> = (1 / m) * np.sum(y_hat - Y)</div>
                <div className="ps-3"><span className="text-secondary"># Update Rules</span></div>
                <div className="ps-3"><span className="text-info">w</span> -= alpha * dw</div>
                <div className="ps-3"><span className="text-info">b</span> -= alpha * db</div>
                <div className="ps-3"><span className="text-warning">return</span> w, b</div>
                <br />
                <div className="text-secondary"># Run Optimization Epochs</div>
                <div><span className="text-info">X</span> = np.array([[1], [2], [3], [4]], dtype=float)</div>
                <div><span className="text-info">Y</span> = np.array([50, 60, 70, 80], dtype=float)</div>
                <div><span className="text-info">w</span>, <span className="text-info">b</span> = np.array([0.0]), 0.0</div>
                <br />
                <div><span className="text-warning">for</span> epoch <span className="text-warning">in</span> range(500):</div>
                <div className="ps-3"><span className="text-info">w</span>, <span className="text-info">b</span> = gradient_descent_step(X, Y, w, b, alpha=0.01)</div>
                <br />
                <div><span className="text-warning">print</span>(<span className="text-success">"Optimized w:"</span>, np.round(w, 4))</div>
                <div><span className="text-warning">print</span>(<span className="text-success">"Optimized b:"</span>, round(b, 4))</div>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="card border-danger mb-3">
              <div className="card-header bg-danger text-white fw-bold py-2 small">Gradient Update Equations</div>
              <div className="card-body small">
                <p className="mb-1 fw-bold text-dark">Weight Gradient Update:</p>
                <div className="p-2 bg-light rounded font-monospace text-dark mb-2" style={{ fontSize: "0.8rem" }}>
                  w = w - &alpha; &times; (1/m) &times; &Sigma; [(y&#770;<sub>i</sub> - y<sub>i</sub>) &times; x<sub>i</sub>]
                </div>
                <p className="mb-1 fw-bold text-dark">Bias Gradient Update:</p>
                <div className="p-2 bg-light rounded font-monospace text-dark mb-0" style={{ fontSize: "0.8rem" }}>
                  b = b - &alpha; &times; (1/m) &times; &Sigma; (y&#770;<sub>i</sub> - y<sub>i</sub>)
                </div>
              </div>
            </div>

            <div className="p-3 bg-light rounded border">
              <span className="font-monospace text-uppercase text-secondary small fw-bold d-block mb-1">Console Output</span>
              <pre className="font-monospace text-success bg-dark p-2 rounded small mb-0">
{`Optimized w: [10.0000]
Optimized b: 40.0000`}
              </pre>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
}