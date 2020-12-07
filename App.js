import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import AboutDialog from "./components/AboutDialog";
import { Provider, DefaultTheme } from "react-native-paper";
import { Provider as Redux } from "react-redux";
import store from "./state/store";

export default function App() {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: "#183059",
    },
  };

  return (
    <Redux store={store}>
      <Provider theme={theme}>
        <View style={{ flex: 1 }}>
          <Navbar />
          <Main />
          <AboutDialog />
          <StatusBar style="auto" />
        </View>
      </Provider>
    </Redux>
  );
}
