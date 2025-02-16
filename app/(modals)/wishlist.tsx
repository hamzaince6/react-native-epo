import { Stack } from 'expo-router';
import WishlistScreen from './WishlistScreen';

export default function WishlistPage() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Wishlist',
          headerShown: true,
          presentation: 'modal',
        }}
      />
      <WishlistScreen />
    </>
  );
}
