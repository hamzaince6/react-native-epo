import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const menuItems = [
  { id: 1, title: 'My Orders', icon: 'cart-outline', route: '/(modals)/orders' },
  { id: 2, title: 'Shipping Addresses', icon: 'location-outline', route: '/(modals)/shipping' },
  { id: 3, title: 'Payment Methods', icon: 'card-outline', route: '/(modals)/payment' },
  { id: 4, title: 'Wishlist', icon: 'heart-outline', route: '/(modals)/wishlist' },
  { id: 5, title: 'Settings', icon: 'settings-outline', route: '/(modals)/settings' },
  { id: 6, title: 'Help & Support', icon: 'help-circle-outline', route: '/(modals)/support' },
];

export default function ProfileScreen() {
  const handleMenuPress = (item) => {
    if (item.route) {
      router.push(item.route);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
        <Pressable>
          <Ionicons name="notifications-outline" size={24} color="#000" />
        </Pressable>
      </View>

      <View style={styles.profileSection}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde' }}
          style={styles.profileImage}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>John Doe</Text>
          <Text style={styles.profileEmail}>john.doe@example.com</Text>
        </View>
      </View>

      <View style={styles.menuContainer}>
        {menuItems.map((item) => (
          <Pressable 
            key={item.id} 
            style={styles.menuItem}
            onPress={() => handleMenuPress(item)}
          >
            <View style={styles.menuItemLeft}>
              <Ionicons name={item.icon} size={24} color="#666" />
              <Text style={styles.menuItemTitle}>{item.title}</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#666" />
          </Pressable>
        ))}
      </View>

      <Pressable style={styles.logoutButton}>
        <Ionicons name="log-out-outline" size={24} color="#FF4785" />
        <Text style={styles.logoutText}>Log Out</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f1f1',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  profileInfo: {
    marginLeft: 15,
  },
  profileName: {
    fontSize: 20,
    fontWeight: '600',
  },
  profileEmail: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  menuContainer: {
    padding: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f1f1',
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemTitle: {
    fontSize: 16,
    marginLeft: 15,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    marginHorizontal: 20,
    marginTop: 'auto',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#FF4785',
    borderRadius: 10,
  },
  logoutText: {
    color: '#FF4785',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
  },
});