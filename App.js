import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';

import UserProfile from './screen/UserProfileScreen';
import ChatListScreen from './screen/ChatListScreen';
import SearchScreen from './screen/SearchScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const ProfileStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="UserProfile" component={UserProfile} options={{ headerShown: false }} />
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            display: 'flex',
          },
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Profile') {
              iconName = 'person';
            } else if (route.name === 'Search') {
              iconName = 'search';
            } else if (route.name === 'Chat') {
              iconName = 'chat';
            }
            return <Icon name={iconName} type="material" color={color} size={size} />;
          },
        })}
      
      >
        <Tab.Screen name="Profile" component={ProfileStack} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Chat" component={ChatListScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
