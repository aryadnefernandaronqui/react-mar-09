import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="'/" element={<h1>Home</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
