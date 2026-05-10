import { Tabs, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import {Ionicons} from '@expo/vector-icons';
import {Colors} from "@/Components/Colors";

export default function RootLayout() {
    return (
        <Stack screenOptions={{
            headerStyle: {
                backgroundColor: Colors.dark.background,
            },
            headerTintColor: Colors.dark.tint,
            contentStyle: {
                backgroundColor: Colors.dark.background,
            }
        }}>
            <Stack.Screen name="(tabs)" options={{headerShown: false}} />
            <Stack.Screen name="trip/[id]" options={{title: 'Trip Details'}} />
        </Stack>
    );
}
