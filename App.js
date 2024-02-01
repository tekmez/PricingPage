import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import { useState } from "react";
import LandingLatestScreen from "./src/screens/LandingLatestScreen";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("Home");
  const handleButtonClick = () => {
    if (currentScreen === "Home") setCurrentScreen("LandingLatestScreen");
    else setCurrentScreen("Home");
  };
  const CurrentComponent =
    currentScreen === "Home" ? HomeScreen : LandingLatestScreen;
  return <CurrentComponent onButtonClick={handleButtonClick} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
