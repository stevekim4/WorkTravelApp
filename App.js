import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from "react-native";
import { theme } from "./color";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.btnText}>Work</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.btnText}>Travel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
// <TouchableOpacity> --> touchable object with animation
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    paddingHorizontal: 20,
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 100,
  },
  btnText: {
    color: "white",
    fontSize: 44,
    fontWeight: "600",
  },
});
