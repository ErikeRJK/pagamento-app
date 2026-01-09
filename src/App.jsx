import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Cards from "./pages/cards"

export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cards" element={<Cards/>} />
      </Routes>
    </BrowserRouter>
  )
}