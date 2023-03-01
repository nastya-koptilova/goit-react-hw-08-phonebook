import React from 'react';
import { GlobalStyle } from './GlobalStyle';
import { ContactsPage } from 'pages/ContactsPage';
import { Layout } from './Layout/Layout';
import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from 'pages/LoginPage';
import { RegisterPage } from 'pages/RegisterPage';
import { ErrorPage } from 'pages/ErrorPage';
import { ChakraProvider } from '@chakra-ui/react';

export const App = () => {
  return (
    <>
      <ChakraProvider>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/login" />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </ChakraProvider>
    </>
  );
};
