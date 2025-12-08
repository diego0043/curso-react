import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FirstStepsApp } from "./components/FirstStepsApp";
// import { MyAwesomeApp } from "./components/MyAwesomeApp";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {
      <FirstStepsApp />
      /* 
    <MyAwesomeApp /> */
    }
  </StrictMode>
);
