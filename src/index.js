import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import Berles from "./Berles";
import Kapcsolat from "./Kapcsolat";
import NotFound from "./NotFound";
import reportWebVitals from "./reportWebVitals";
import { sendToVercelAnalytics } from "./vitals";
import { Analytics } from "@vercel/analytics/react";
import Layout from "./Layout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/*" element={<Layout />}>
          <Route path="" element={<App />} />
          <Route path="berles" element={<Berles />} />
          <Route path="kapcsolat" element={<Kapcsolat />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
    <Analytics />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(sendToVercelAnalytics);
