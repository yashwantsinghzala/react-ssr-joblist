import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/styles";
import configureStore from "./store";
import App from "./App";
import theme from "./theme";

const AppContainer = () => {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);

  return (
    <Provider store={configureStore()}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  );
};

export default AppContainer;
