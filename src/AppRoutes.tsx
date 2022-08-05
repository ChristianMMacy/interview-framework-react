import {Outlet, Route, Routes} from "react-router-dom";
import Posts from "routes/Posts";
import {Box} from "@chakra-ui/react";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Box className="pt-5 max-w-2xl m-auto"><Outlet /></Box>}>
                <Route path="posts/" element={<Posts />}/>
            </Route>
        </Routes>
    )
}

export default AppRoutes