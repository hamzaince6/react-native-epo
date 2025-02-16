import { Stack } from 'expo-router';
import OrdersScreen from './OrdersScreen';

export default function OrdersPage() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'My Orders',
          headerShown: true,
          presentation: 'modal',
        }}
      />
      <OrdersScreen />
    </>
  );
}
