import '../global.css';

import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(app)" options={{ headerShown: false }} />
      <Stack.Screen name="auth/sign-in" options={{ title: 'Login', headerShown: false }} />
      <Stack.Screen name="auth/sign-up" options={{ title: 'Create Account', headerShown: false }} />
    </Stack>
  );
}
