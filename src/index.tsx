import './index.css';
import App from './App';
import {ChakraProvider} from '@chakra-ui/react'
import {BrowserRouter} from "react-router-dom";
import {createRoot} from "react-dom/client";
import React = require('react');


const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ChakraProvider>
                <App/>
            </ChakraProvider>
        </BrowserRouter>
    </React.StrictMode>
);

