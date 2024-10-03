import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Contact from "./pages/Contact"
import Project from "./pages/Projects"
function App (){
    return <div>

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Contact" element={<Contact />}  ></Route>
            <Route path="/Project" element={<Project />}  ></Route>
            {/* <Route path="/about" element={<About />} /> */}
        </Routes>

    </div>
}

export default App