import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Main } from "./components";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
// import reportWebVitals from './reportWebVitals';

// const registerServiceWorker = async () => {
//   if ("serviceWorker" in navigator) {
//     try {
//       const registration = await navigator.serviceWorker.register(
//         "/sw-test/sw.js",
//         {
//           scope: "/sw-test/",
//         }
//       );
//       if (registration.installing) {
//         console.log("Service worker installing");
//       } else if (registration.waiting) {
//         console.log("Service worker installed");
//       } else if (registration.active) {
//         console.log("Service worker active");
//       }
//     } catch (error) {
//       console.error(`Registration failed with ${error}`);
//     }
//   }
// };

// ...

// registerServiceWorker();

const container = document.getElementById("root");

// Create a root.
const root = ReactDOM.createRoot(container);

// Initial render
root.render(<Main />);

// ReactDOM.render(
//   <React.StrictMode>
//       <Main />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
