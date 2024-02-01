import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const LandingLatestScreen = ({ onButtonClick }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>lAnding</Text>
      <Button title="Go to Home" onPress={onButtonClick} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default LandingLatestScreen;
