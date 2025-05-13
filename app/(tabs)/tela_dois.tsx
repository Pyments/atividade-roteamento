import React from "react";
import { View, StyleSheet } from "react-native";
import Animated, {
  withRepeat,
  withTiming,
  withSequence,
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

export default function TelaDois() {
  const translateY = useSharedValue(0);

  translateY.value = withRepeat(
    withSequence(
      withTiming(-20, { duration: 1000 }),
      withTiming(0, { duration: 800 })
    ),
    -1,
    true
  );

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.text, animatedStyle]}>
        Tela Dois
      </Animated.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c3c3dd",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
  },
});
