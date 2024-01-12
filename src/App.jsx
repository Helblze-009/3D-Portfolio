import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home, Contact, Projects, About } from "./pages/index";

// Fetch environment variables
const emailjsServiceId = process.env.VITE_APP_EMAILJS_SERVICE_ID;
const emailjsTemplateId = process.env.VITE_APP_EMAILJS_TEMPLATE_ID;
const emailjsPublicKey = process.env.VITE_APP_EMAILJS_PUBLIC_KEY;

const App = () => {
  return (
    <main className="bg-slate-300/20 h-full">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/contact"
            element={<Contact serviceId={emailjsServiceId} templateId={emailjsTemplateId} publicKey={emailjsPublicKey} />}
          />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
