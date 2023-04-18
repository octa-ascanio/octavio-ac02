import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const Home = () => <h1>Pagina 1</h1>;
const About = () => <h1>Pagina 2</h1>;

const App = () => (
  <BrowserRouter>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">My App</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">Pagina 1</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">Pagina 2</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
);

export default App;
