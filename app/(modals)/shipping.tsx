import { Stack } from 'expo-router';
import ShippingScreen from './ShippingScreen';

export default function ShippingPage() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Shipping Addresses',
          headerShown: true,
          presentation: 'modal',
        }}
      />
      <ShippingScreen />
    </>
  );
}
