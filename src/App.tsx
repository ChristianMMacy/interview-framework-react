import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import { Dashboard } from './routes/Dashboard';

export const App = () => (
  <ChakraProvider theme={theme}>
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  </ChakraProvider>
);
