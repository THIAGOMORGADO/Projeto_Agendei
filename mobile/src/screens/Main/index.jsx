import { Image, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from "../Tab/Home";
import Profile from "../Tab/profile";
import Calendar from "../Tab/Calendar";
import Header from "../../components/Header";
import icons from "../../constants/icons";


const myTabs = createBottomTabNavigator()

export default function Main() {
  return (
    <NavigationContainer>
      <myTabs.Navigator
        screenOptions={{
          tabBarShowLabel: false,

        }}
      >
        <myTabs.Screen name="Home" component={Home} options={{

          headerTitleAlign: "center",
          tabBarIcon: ({ focused }) => (
            <Image source={icons.Home} style={{ width: 30, height: 30, opacity: focused ? 1 : 0.3 }} />
          ),
          headerTitle: () => (
            <Header />
          )
        }} />
        <myTabs.Screen name="Calendar" component={Calendar}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image source={icons.Calendar} style={{ width: 30, height: 30, opacity: focused ? 1 : 0.3 }} />
            )
          }}
        />
        <myTabs.Screen name="Profile" component={Profile} options={{
          tabBarIcon: ({ focused }) => (
            <Image source={icons.Profile} style={{ width: 30, height: 30, opacity: focused ? 1 : 0.3 }} />
          )
        }} />

      </myTabs.Navigator>
    </NavigationContainer >
  )
}