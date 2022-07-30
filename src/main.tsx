import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import useAuthStore from "./store/useAuthStore";

import "./css/index.css";

async function prepare() {
  // if (import.meta.env.DEV) {
  //   const { worker } = await import("./mocks/browser");
  //   worker.start();
  // }

  return Promise.resolve();
}

prepare().then(() => {
  useAuthStore.getState().initialize();

  ReactDOM.createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
});
