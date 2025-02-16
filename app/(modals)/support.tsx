import { Stack } from 'expo-router';
import SupportScreen from './SupportScreen';

export default function SupportPage() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Help & Support',
          headerShown: true,
          presentation: 'modal',
        }}
      />
      <SupportScreen />
    </>
  );
}
