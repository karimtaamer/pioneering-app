import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import Page1 from "./page-1/Page1";
import Page2 from "./page-2/Page2";
import TopBar from "./nav/top-bar/Topbar";
import "./styles/root.scss";
import { ThemeProvider } from "./context/ThemeContext";
import SideBar from "./nav/side-bar/SideBar";

function App() {
  return (
    <ThemeProvider>
      <div className="App" id="outer-container">
        <TopBar />
        <SideBar />
        <div id="page-wrap">
          <Routes>
            <Route path="/page1" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
            <Route path="*" element={<Navigate to="/page1" replace />} />
          </Routes>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
