import AppRoutes from "./AppRoutes";
import {BrowserRouter} from "react-router-dom";
import {ChakraProvider} from '@chakra-ui/react'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";


function App() {
    return (
        <BrowserRouter>
            <ChakraProvider>
                <QueryClientProvider client={new QueryClient()}>
                    <AppRoutes/>
                </QueryClientProvider>
            </ChakraProvider>
        </BrowserRouter>
    );
}

export default App;
