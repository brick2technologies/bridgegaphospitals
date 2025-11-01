// src/index.tsx
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import App from "./App";
import "./index.css";

// Optional: a tiny full-screen spinner while the bundle loads
const AppLoading = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-b from-[#E92393] to-[#0A1D56]">
    <div className="h-12 w-12 animate-spin rounded-full border-4 border-white border-t-transparent"></div>
  </div>
);

const root = ReactDOM.createRoot(
  document.getElementById("root")! as HTMLElement
);

root.render(
  <React.StrictMode>
    {/* HelmetProvider is required for react-helmet-async */}
    <HelmetProvider>
      {/* Suspense gives a smooth loading experience for lazy routes/components */}
      <Suspense fallback={<AppLoading />}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Suspense>
    </HelmetProvider>
  </React.StrictMode>
);