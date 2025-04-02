import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
// import Login from "./features/Auth/Login/Login.tsx";
import Signup from "./features/Auth/SignUp/Signup.tsx";
// import Home from "./components/pages/Home/Home.tsx";
import App from "./App.tsx";
import "./i18n/i18n.ts";

// import Signup from "./features/Auth/Signup.tsx";
createRoot(document.getElementById("root")!).render(
  <Suspense fallback="Loading...">
    <StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<App />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </StrictMode>
  </Suspense>
);
