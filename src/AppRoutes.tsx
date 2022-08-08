import { Route, Routes } from "react-router-dom"
import Posts from "routes/Posts"
import PostDetail from "routes/postDetail/PostDetail"
import Home from "routes/Home"
import AdminPosts from "routes/admin/AdminPosts"
import UserDetail from "routes/UserDetail"

function AppRoutes() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="posts/" element={<Posts />} />
            <Route path="posts/:postId" element={<PostDetail />} />
            <Route path="users/:userId" element={<UserDetail />} />
            <Route path="admin" element={<AdminPosts />} />
        </Routes>
    )
}

export default AppRoutes