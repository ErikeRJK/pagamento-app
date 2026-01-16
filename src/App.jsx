import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./pages/home";
import Cards from "./pages/cards";
import Card from "./pages/card";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/card/:id" element={<Card />} />
        </Routes>
      </BrowserRouter>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        theme="colored"
        pauseOnHover
        hideProgressBar
        closeOnClick
      />
    </>
  );
}
