import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Homescreen from "./pages/Homescreen"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homescreen />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
