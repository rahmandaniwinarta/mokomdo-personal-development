import logo from "./logo.svg";
import "./App.css";

// route
import { Routes, Route } from "react-router-dom";

// pages
import { HomePage } from "./pages/HomePage/HomePage";
import { NotFoundPage } from "./pages/NotFound/NotFound";
import { LayOut } from "./components/LayOut";
import { VerificationPage } from "./pages/VerificationPage/VerificationPage";

import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const testApi = async () => {
    try {
      const response = await (
        await axios.get(`${process.env.REACT_APP_API_BASE_URL}`)
      ).data;
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    testApi();
    console.log("MOKOMDO HERE");
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<HomePage />} />
        </Route>
        {/* not found  */}
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/verification/:token" element={<VerificationPage />} />
      </Routes>
    </div>
  );
}

export default App;
