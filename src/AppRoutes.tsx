import {Route, Routes} from "react-router-dom";
import Posts from "routes/Posts";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Posts />}/>
        </Routes>
    )
}

export default AppRoutes