import {Route} from "react-router-dom";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="about" element={<About/>}/>
        </Routes>
    )
}

export default AppRoutes