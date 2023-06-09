import {
  MD3DarkTheme,
  MD3LightTheme,
  adaptNavigationTheme,
} from "react-native-paper";

import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";

const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});
import { MyColors } from "@/styles/ColorPallete";

const roundness = 5;

export const CombinedDefaultTheme = {
  ...MD3LightTheme,
  ...LightTheme,
  // roundness,
  colors: {
    ...MD3LightTheme.colors,
    ...LightTheme.colors,
    // primary: MyColors.PRIMARY,
    // accent: MyColors.ACCENT,
  },
};
export const CombinedDarkTheme = {
  ...MD3DarkTheme,
  ...DarkTheme,
  // roundness,
  colors: {
    ...MD3DarkTheme.colors,
    ...DarkTheme.colors,
    // primary: MyColors.PRIMARY,
    // accent: MyColors.ACCENT,
  },
};
