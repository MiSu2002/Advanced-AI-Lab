import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

export default function HomePage() {
  const lectures = [
  {
    id: '1.0',
    title: 'Lecture 1.0: What is ML? How it\'s different from traditional programming?',
    description: 'An overview of Machine Learning paradigms, comparing explicit rule-based algorithms with data-driven predictive modeling and case studies.',
    path: '/lecture-1-0',
    tag: 'Overview',
    type: 'lecture',
    badgeBg: 'bg-info text-dark'
  },
  {
    id: '1.1',
    module: 'Module 1.1',
    title: 'Lecture 1.1: Linear Regression',
    description: 'Foundations of continuous numerical scalar prediction, hypothesis formulation, feature weights, and parameter fitting.',
    path: '/lecture-1-1',
    tag: 'Supervised ML',
    type: 'lecture',
    badgeBg: 'bg-primary'
  },
  {
    id: '1.2',
    module: 'Module 1.2',
    title: 'Lecture 1.2: Logistic Regression',
    description: 'Binary classification mechanics, sigmoid activation mapping, log-odds, decision boundaries, and probabilistic prediction.',
    path: '/lecture-1-2',
    tag: 'Supervised ML',
    type: 'lecture',
    badgeBg: 'bg-primary'
  },
  {
    id: '1.3',
    module: 'Module 1.3',
    title: 'Lecture 1.3: Loss Functions & Optimization',
    description: 'Mathematical mechanics of Mean Squared Error (MSE), Binary Cross-Entropy Loss, cost surfaces, and Gradient Descent convergence.',
    path: '/lecture-1-3',
    tag: 'Optimization',
    type: 'lecture',
    badgeBg: 'bg-primary'
  },
  {
    id: '1.4',
    module: 'Lab 1',
    title: 'Lab 1: Supervised Learning — Inference, Loss & Optimization',
    description: 'Practical code implementations of Linear Regression and Logistic Regression using Python, including model training, evaluation metrics, and visualization.',
    path: '/lab-1',
    tag: 'Lab / Hands-On',
    type: 'lab',
    badgeBg: 'bg-warning text-dark'
  }
];

  return (
    <div className="bg-light min-vh-100">
      <Navbar/>
      <div className="container mt-5">
        <header className="mb-5 text-center">
          <span className="badge bg-dark text-uppercase px-3 py-2 mb-2">
            Advanced AI Laboratory Coursework
          </span>
          <h1 className="fw-bold display-5 text-dark">Course Modules & Lectures</h1>
          <p className="text-muted lead mx-auto" style={{ maxWidth: '650px' }}>
            Interactive lab guides, practical exercises, and theoretical foundations for modern Artificial Intelligence.
          </p>
        </header>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-header bg-white py-3 border-bottom d-flex align-items-center justify-content-between">
                <h4 className="mb-0 fw-bold text-primary">
                  Module 1: Foundations of Machine Learning
                </h4>
                <span className="badge bg-secondary">4 Lectures / 1 Lab</span>
              </div>
              <div className="list-group list-group-flush">
                {lectures.map((lecture) => (
                  <div key={lecture.id} className="list-group-item p-4 transition-hover">
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
                      <div>
                        <div className="d-flex align-items-center gap-2 mb-2">
                          <span className={`badge ${lecture.badgeBg} rounded-pill`}>
                            {lecture.tag}
                          </span>
                          <span className="text-muted small fw-semibold">
                            {lecture.module}
                          </span>
                        </div>
                        <h5 className="mb-2 fw-bold text-dark">
                          {lecture.title}
                        </h5>
                        <p className="mb-0 text-muted small">
                          {lecture.description}
                        </p>
                      </div>
                      <Link
                        to={lecture.path}
                        className="btn btn-outline-primary rounded-pill px-4 py-2 text-nowrap align-self-start align-self-md-center"
                      >
                        Access {lecture.type} &rarr;
                      </Link>
                    </div>
                  </div>
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