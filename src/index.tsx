import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/tailwind.css"; // Tailwind CSS가 포함된 CSS 파일
import App from "./App";
import "./styles/font.css"; // font.css를 불러옴
import reportWebVitals from "./reportWebVitals";
import GlobalStyle from "./styles/global";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
