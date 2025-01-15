import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Details from "./pages/Details"
import Homescreen from "./pages/Homescreen"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homescreen />}></Route>
        <Route path="/details/:platform/:id" element={<Details />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
