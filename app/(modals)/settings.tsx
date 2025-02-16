import { Stack } from 'expo-router';
import SettingsScreen from './SettingsScreen';

export default function SettingsPage() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Settings',
          headerShown: true,
          presentation: 'modal',
        }}
      />
      <SettingsScreen />
    </>
  );
}
