import React from "react";
import { useTheme, Appbar, TouchableRipple, Switch } from "react-native-paper";
import { PreferencesContext } from "@/Context/PreferencesContex";

const Header = ({ scene }: any) => {
  const theme = useTheme();
  const { toggleTheme, isThemeDark } = React.useContext(PreferencesContext);

  return (
    <Appbar.Header
      theme={{
        colors: {
          primary: theme?.colors.surface,
        },
      }}>
      <Appbar.Content title={scene.route?.name} />
      <Switch color={"red"} value={isThemeDark} onValueChange={toggleTheme} />
    </Appbar.Header>
  );
};
