import React from "react";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Tela Um",
          headerTitleAlign: "center",
        }}
      />
      <Tabs.Screen
        name="tela_dois"
        options={{
          title: "Tela dois",
          headerTitleAlign: "center",
        }}
      />
    </Tabs>
  );
}
