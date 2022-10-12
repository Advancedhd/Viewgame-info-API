import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./Components/Global/Navbar";
import Footer from "./Components/Global/Footer";
import ProjectCards from "./Components/Home/ProjectCards";
import "./sass/style.scss";

export default function App() {
  return (
    <>
      <div className="background">
        <div>
          <Router>
            <NavigationBar />
            <Routes>
              <Route path="/" element={<ProjectCards />} />
            </Routes>
          </Router>
        </div>
        <Footer />
      </div>
    </>
  );
}
