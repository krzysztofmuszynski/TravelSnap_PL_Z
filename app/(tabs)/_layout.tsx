import { Tabs, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import {Ionicons} from '@expo/vector-icons';
import {Colors} from "@/Components/Colors";

export default function RootLayout() {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: Colors.dark.tint,
            tabBarInactiveTintColor: Colors.dark.inactiveTint,
            tabBarStyle: {
                backgroundColor: Colors.dark.background,
                borderTopWidth: 0,
            },
            headerShown: false,
        }}>
            <Tabs.Screen name="index" options={{
                title: "Home",
                tabBarIcon: ({color, size}) => (
                    <Ionicons name="home" size={size} color={color} />
                ),
            }} />
            <Tabs.Screen name="index" options={{
                title: "Explore",
                tabBarIcon: ({color, size}) => (
                    <Ionicons name="compass-outline" size={size} color={color} />
                ),
            }} />
            <Tabs.Screen name="index" options={{
                title: "Profile",
                tabBarIcon: ({color, size}) => (
                    <Ionicons name="person" size={size} color={color} />
                ),
            }} />
        </Tabs>
    );
}
