import logo from "./logo.svg";
import "./App.css";

// route
import { Routes, Route } from "react-router-dom";

// pages
import { HomePage } from "./pages/HomePage/HomePage";
import { NotFoundPage } from "./pages/NotFound/NotFound";
import { LayOut } from "./components/LayOut";
import { VerificationPage } from "./pages/VerificationPage/VerificationPage";

import Axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./redux/userSlice";

const url = process.env.REACT_APP_API_BASE_URL;

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  const keepLogin = async () => {
    try {
      const result = await Axios.get(`${url}/user/keeplogin`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(result.data);

      dispatch(
        login({
          email: result.data.email,
        })
      );
    } catch (err) {
      console.log(err);
      console.log(err.response.data);
    }
  };

  const testApi = async () => {
    try {
      const response = await (await Axios.get(url)).data;
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    keepLogin();
  });

  useEffect(() => {
    testApi();
    console.log(`Mokomdo Here!`);
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
