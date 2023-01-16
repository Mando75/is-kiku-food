import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/home";
import Proof from "./routes/proof";
import "@picocss/pico/css/pico.min.css";
import "./index.scss";
import Nav from "./components/Nav";
import Footer from "./components/Footer/Footer";
import Exhibits from "./routes/proof/exhibits";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/proof",
    element: <Proof />,
  },
  {
    path: "/proof/exhibits",
    element: <Exhibits />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <article className="article-root">
      <header>
        <Nav />
      </header>
      <RouterProvider router={router} />
      <Footer />
    </article>
  </React.StrictMode>
);
