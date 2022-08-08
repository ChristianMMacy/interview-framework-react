import AppRoutes from "./AppRoutes"
import { BrowserRouter } from "react-router-dom"
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Header from "header/Header"
import theme from "Theme"
import NavigationContext from "NavigationContext"
import PostContext from "routes/postDetail/PostContext"


function App() {
    return (
        <BrowserRouter>
            <ChakraProvider theme={theme}>
                <QueryClientProvider client={new QueryClient()}>
                    <NavigationContext>
                        <PostContext>
                            <Header />
                            <AppRoutes />
                        </PostContext>
                    </NavigationContext>
                </QueryClientProvider>
            </ChakraProvider>
        </BrowserRouter>
    )
}

export default App;
