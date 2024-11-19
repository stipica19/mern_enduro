import React, { Suspense } from "react";
import ReactDOM from "react-dom/client"; // Za React 18 koristimo 'react-dom/client'
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

// i18next konfiguracija
i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ["de", "en"],
    fallbackLng: "de",
    debug: false,
    detection: {
      order: ["path", "cookie", "htmlTag"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/assets/locales/{{lng}}/translation.json",
    },
  });

const loadingMarkup = <div className="py-4 text-center"></div>;

// Kreiraj React root element za React 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
