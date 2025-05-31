import { Route, Routes } from "react-router-dom"
import { Careers, Home } from "../pages"


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
        </Routes>
    )
}

export default Main