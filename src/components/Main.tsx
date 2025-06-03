import { Route, Routes } from "react-router-dom"
import { About, Careers, Home, Login, Security } from "../pages"


const Main = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={<Home />}
            />
            <Route
                path="careers"
                element={<Careers/>}
            />
            <Route
                path="about"
                element={<About/>}
            />
            <Route
                path="security"
                element={<Security/>}
            />
            <Route
                path="login"
                element={<Login/>}
            />
        </Routes>
    )
}

export default Main