import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorFallback";
import { AuthProvider } from './components/AuthContext';
import { SnackbarProvider } from "notistack";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./components/AppTheme/AppTheme";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <SnackbarProvider maxSnack={3}>
        <ThemeProvider theme={theme}>
          <AuthProvider>
            <App />
          </AuthProvider>
        </ThemeProvider>
      </SnackbarProvider>
    </ErrorBoundary>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
