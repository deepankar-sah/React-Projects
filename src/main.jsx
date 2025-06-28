
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";


//DarkMode Provider
import { DarkModeProvider } from "./pages/TodoApp/context/DarkModeContext.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
      <DarkModeProvider>
        <App />
      </DarkModeProvider>
    </BrowserRouter>
);
