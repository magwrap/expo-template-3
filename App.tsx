import "react-native-gesture-handler";
import React from "react";
import { Provider } from "react-redux";
import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { CombinedDarkTheme, CombinedDefaultTheme } from "@/styles/theme";
import useCachedResources from "@/hooks/useCachedResources";
import { useAppSelector } from "@/hooks/reduxHooks";
import { StatusBar } from "expo-status-bar";
import store from "@/redux/store";
import Routes from "@/Navigaton/Routes";

export default function App() {
  const isLoadingComplete = useCachedResources();

  const Themes = () => {
    const isThemeDark = useAppSelector(
      (state) => state.DarkThemeReducer.isDarkTheme
    );
    let theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;
    return (
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme}>
          <Routes />
          <StatusBar />
        </NavigationContainer>
      </PaperProvider>
    );
  };

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <Themes />
      </Provider>
    );
  }
}
