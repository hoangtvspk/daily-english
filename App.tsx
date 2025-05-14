import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import VocabularyScreen from './src/screens/VocabularyScreen/VocabularyScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import WordDetailScreen from './src/screens/WordDetailScreen';
import PhrasesScreen from './src/screens/PhrasesScreen';
import QuizDetailScreen from './src/screens/QuizDetailScreen/QuizDetailScreen';
import DictionaryScreen from './src/screens/DictionaryScreen/DictionaryScreen';
import { Text } from 'react-native';
import QuizScreen from './src/screens/QuizScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Trang chủ') iconName = focused ? 'home' : 'home-outline';
          else if (route.name === 'Từ vựng') iconName = focused ? 'book' : 'book-outline';
          else if (route.name === 'Bài tập') iconName = focused ? 'school' : 'school-outline';
          else if (route.name === 'Hồ sơ') iconName = focused ? 'person' : 'person-outline';
          return <Ionicons name={iconName ?? 'home'} size={size ?? 24} color={color ?? '#4a90e2'} />;
        },
        tabBarActiveTintColor: '#4a90e2',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Trang chủ" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Từ vựng" component={VocabularyScreen}  />
      <Tab.Screen name="Bài tập" component={QuizScreen} />
      <Tab.Screen name="Hồ sơ" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeTabs" component={HomeTabs} options={{ headerShown: false }} />
        <Stack.Screen name="WordDetail" component={WordDetailScreen} options={{ title: 'Chi tiết từ vựng', headerBackTitle: 'Trang chủ' }} />
        <Stack.Screen name="Phrases" component={PhrasesScreen} options={{ title: 'Cụm từ thông dụng', headerBackTitle: 'Trang chủ' }} />
        <Stack.Screen name="QuizDetail" component={QuizDetailScreen} options={{ title: 'Bài tập', headerBackTitle: 'Trang chủ' }} />
        <Stack.Screen name="Dictionary" component={DictionaryScreen} options={{ title: 'Từ điển', headerBackTitle: 'Trang chủ' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
