import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Text, Platform, TextInput } from "react-native";
import { Background } from "@react-navigation/elements";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: "#4d0505",
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 1,
          borderBottomColor: "#8b0707",
          borderRadius: 15
        },
        headerTitleStyle: {
          fontWeight: "700",
          fontSize: 28,
          color: "#ffffffff",
        },
        tabBarActiveTintColor: "#aa0000",
        tabBarInactiveTintColor: "#7a4a4a",
        tabBarStyle: {
          backgroundColor: "#000000",
          borderTopWidth: 1,
          borderTopColor: "#8b0707",
          height: Platform.OS === "ios" ? 88 : 64,
          paddingBottom: Platform.OS === "ios" ? 30 : 80,
          paddingTop: 10,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "500",
        }
      }}
    >
      
      <Tabs.Screen
        name="index"
        options={{
          title: "Netflix",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      >
        
      </Tabs.Screen>

      <Tabs.Screen
        name="test"
        options={{
          title: "Área de testes",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "search" : "search-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
      
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explorar",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "search" : "search-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="flex"
        options={{
          title: "Flexbox",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "cube" : "cube-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="view"
        options={{
          title: "View",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "menu" : "menu-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="image"
        options={{
          title: "Imagem",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "add-circle" : "add"}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="btnTouch"
        options={{
          title: "Botão",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "add" : "add"}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="input"
        options={{
          title: "Input",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "add-circle" : "add-circle"}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="flat"
        options={{
          title: "FlatList",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "list" : "list-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
      
      
    </Tabs>
  );
}
