import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

import "./index.css";

// Import components
import { ToastProvider } from "./components/toast.jsx";

// Import state
import NearProvider from "./providers/near.jsx";

createRoot(document.getElementById("root")).render(
  <NearProvider>
    <BrowserRouter>
      <ToastProvider>
        <App />
      </ToastProvider>
    </BrowserRouter>
  </NearProvider>
);
