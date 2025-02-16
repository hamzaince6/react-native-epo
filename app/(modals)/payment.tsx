import { Stack } from 'expo-router';
import PaymentScreen from './PaymentScreen';

export default function PaymentPage() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Payment Methods',
          headerShown: true,
          presentation: 'modal',
        }}
      />
      <PaymentScreen />
    </>
  );
}
