import { SafeAreaProvider } from "react-native-safe-area-context";
import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <SafeAreaProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="sign-in" />
        <Stack.Screen name="sign-up" />
      </Stack>
    </SafeAreaProvider>
  );
}
