import React from "react";
import DashboardSelling from "pages/DashboardSelling";
import Home1 from "pages/Home1";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/home1" element={<Home1 />} />
        <Route path="/dashboardselling" element={<DashboardSelling />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;