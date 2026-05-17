import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import {Colors} from "@/Components/Colors";

export default function RootLayout() {
  return (
    <>
      <Stack screenOptions={{
          headerStyle: { backgroundColor: Colors.dark.background },
          headerTitleStyle: { color: Colors.textPrimary },
      }}>
          <Stack.Screen name="addTrip" options={{ title: "Add Trip", presentation: "modal" }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="trip/[id]" options={{ title: "Trip Details" }} />
      </Stack>
    </>
  );
}
