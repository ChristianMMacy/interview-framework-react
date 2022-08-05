import './index.css';
import App from './App';
import {ChakraProvider} from '@chakra-ui/react'
import {BrowserRouter} from "react-router-dom";
import {createRoot} from "react-dom/client";
import {StrictMode} from 'react';


const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <StrictMode>
        <BrowserRouter>
            <ChakraProvider>
                <App/>
            </ChakraProvider>
        </BrowserRouter>
    </StrictMode>
);

