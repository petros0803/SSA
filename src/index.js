import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import reducer from "./Redux/reducer";
import { Provider } from "react-redux";
import { combineReducers, legacy_createStore } from "redux";
import { IntlReducer as Intl, IntlProvider, IntlActions } from 'react-redux-multilingual';
import translations from "./Components/Common/Translate/Translate";

const container = document.getElementById("root");
const root = createRoot(container);

const reducers = combineReducers({
  Intl,
  reducer,
});

export const store = legacy_createStore(reducers);

const language = localStorage.getItem('language');
const locale = language ?? 'ro';
store.dispatch(IntlActions.setLocale(locale));

root.render(
  <Provider store={store}>
    <IntlProvider translations={translations} locale={locale}>
      <App />
    </IntlProvider>
  </Provider>
);
