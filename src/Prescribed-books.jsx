import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function PrescribedBooks() {

  const books = [
    {
      id: 1,
    title: "Artificial Intelligence: A Modern Approach",
    author: "Stuart Russell & Peter Norvig",
    category: "ai",
    edition: "4th Edition (2020)",
    description: "The leading textbook in artificial intelligence, offering comprehensive coverage of intelligent agents, search algorithms, knowledge representation, machine learning, and autonomous decision-making.",
    topics: ["Intelligent Agents", "Problem Solving", "Knowledge Representation", "Probabilistic Reasoning"],
    badge: "Core Reference",
    badgeClass: "bg-danger"
  },
  {
      id: 2,
      title: "Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow",
      author: "Aurélien Géron",
      category: "ml",
      edition: "3rd Edition (2022)",
      description: "Essential practical guide for understanding Scikit-Learn pipelines, regression models, gradient descent, and neural network architectures.",
      topics: ["Scikit-Learn", "Regression", "Gradient Descent", "Neural Networks"],
      badge: "Primary Textbook",
      badgeClass: "bg-success"
    },
    {
      id: 3,
      title: "Pattern Recognition and Machine Learning",
      author: "Christopher M. Bishop",
      category: "ml",
      edition: "1st Edition (2006)",
      description: "The definitive reference for rigorous mathematical proofs behind linear models, logistic regression, cross-entropy, and probabilistic inference.",
      topics: ["Mathematics", "MSE & BCE Loss", "Optimization", "Bayesian Methods"],
      badge: "Core Theory",
      badgeClass: "bg-primary"
    },
    {
      id: 4,
      title: "Mathematics for Machine Learning",
      author: "Marc Peter Deisenroth, A. Aldo Faisal, Cheng Soon Ong",
      category: "math",
      edition: "1st Edition (2020)",
      description: "Comprehensive foundational coverage of matrix algebra, vector calculus, linear transformations, and partial derivatives used in model optimization.",
      topics: ["Linear Algebra", "Vector Calculus", "Partial Derivatives", "Matrix Multiplication"],
      badge: "Math Foundation",
      badgeClass: "bg-warning text-dark"
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
          <li className="breadcrumb-item active" aria-current="page">Prescribed Books</li>
        </ol>
      </nav>

      <div className="mt-3 mb-4">
        <div className="d-flex align-items-center gap-2 mb-2">
          <span className="badge bg-primary px-3 py-2">Course Resources</span>
        </div>
        <h1 className="fw-bold display-6">Prescribed Books &amp; Core References</h1>
        <p className="lead mb-0">
          Essential reading material covering supervised learning mathematics, Scikit-Learn implementations, and enterprise AI agent architectures.
        </p>
      </div>

      <div className="row mt-3 g-4">
        {books.map((book) => (
          <div className="col-md-6 col-lg-6" key={book.id}>
            <div className="card h-100 border-0 shadow-sm rounded-4 p-3 bg-white d-flex flex-column justify-content-between">
              <div>
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <span className={`badge ${book.badgeClass} px-3 py-2 rounded-pill small`}>
                    {book.badge}
                  </span>
                  <span className="text-muted small font-monospace">{book.edition}</span>
                </div>
                <h5 className="fw-bold text-dark mt-2 mb-1">{book.title}</h5>
                <p className="text-primary small fw-semibold mb-3">By {book.author}</p>
                <p className="small text-secondary mb-3" style={{ lineHeight: "1.6" }}>
                  {book.description}
                </p>
              </div>

              <div>
                <div className="d-flex flex-wrap gap-1 mb-3">
                  {book.topics.map((topic, idx) => (
                    <span key={idx} className="badge bg-light text-dark border small fw-normal">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <footer className="mt-5 text-center text-muted small">
          <p>© {new Date().getFullYear()} Advanced AI Lab by Soumita Basu. Optimized for concurrent laboratory access.</p>
        </footer>
    </div>
  );
}