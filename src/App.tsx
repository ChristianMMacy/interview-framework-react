import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import { Dashboard } from './routes/Dashboard';
import {Teams} from "./routes/Teams";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Routes>
      <Route path="/" element={<Dashboard />}>
          <Route path="teams" element={<Teams />} />
      </Route>
    </Routes>
  </ChakraProvider>
);
