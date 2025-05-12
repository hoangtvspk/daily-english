import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Text } from "react-native";
import DictionaryScreen from "./screens/DictionaryScreen";
import HomeScreen from "./screens/HomeScreen";
import PhrasesScreen from "./screens/PhrasesScreen";
import ProfileScreen from "./screens/ProfileScreen";
import QuizDetailScreen from "./screens/QuizDetailScreen";
import QuizScreen from "./screens/QuizScreen";
import VocabularyScreen from "./screens/VocabularyScreen";
import WordDetailScreen from "./screens/WordDetailScreen";

// Tạo Stack Navigator và Tab Navigator
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Tab Navigator
function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Trang chủ") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Từ vựng") {
            iconName = focused ? "book" : "book-outline";
          } else if (route.name === "Bài tập") {
            iconName = focused ? "school" : "school-outline";
          } else if (route.name === "Hồ sơ") {
            iconName = focused ? "person" : "person-outline";
          }

          // Giả lập Ionicons
          return <Text>{iconName}</Text>;
        },
        tabBarActiveTintColor: "#4a90e2",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Trang chủ"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Từ vựng" component={VocabularyScreen} />
      <Tab.Screen name="Bài tập" component={QuizScreen} />
      <Tab.Screen name="Hồ sơ" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

// App chính
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeTabs"
          component={HomeTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WordDetail"
          component={WordDetailScreen}
          options={{ title: "Chi tiết từ vựng" }}
        />
        <Stack.Screen
          name="Phrases"
          component={PhrasesScreen}
          options={{ title: "Cụm từ thông dụng" }}
        />
        <Stack.Screen
          name="QuizDetail"
          component={QuizDetailScreen}
          options={{ title: "Bài tập" }}
        />
        <Stack.Screen
          name="Dictionary"
          component={DictionaryScreen}
          options={{ title: "Từ điển" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Hiển thị thông báo trong Node.js executor
console.log("Mã nguồn ứng dụng 'Daily English' đã được tạo thành công!");
console.log("Để chạy ứng dụng này, bạn cần:");
console.log("1. Thiết lập môi trường phát triển React Native");
console.log("2. Tạo dự án mới với 'npx react-native init DailyEnglish'");
console.log(
  "3. Cài đặt các thư viện phụ thuộc: '@react-navigation/native', '@react-navigation/native-stack', '@react-navigation/bottom-tabs', '@react-native-async-storage/async-storage'"
);
console.log("4. Thay thế file App.js bằng mã này");
console.log(
  "5. Chạy 'npx react-native run-android' hoặc 'npx react-native run-ios'"
);
