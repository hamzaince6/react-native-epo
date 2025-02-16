import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

const menuItems = [
  { 
    id: 1, 
    title: 'My Orders', 
    icon: 'cart-outline', 
    route: '/(modals)/orders'
  },
  { 
    id: 2, 
    title: 'Shipping Addresses', 
    icon: 'location-outline', 
    route: '/(modals)/shipping'
  },
  { 
    id: 3, 
    title: 'Payment Methods', 
    icon: 'card-outline', 
    route: '/(modals)/payment'
  },
  { 
    id: 4, 
    title: 'Wishlist', 
    icon: 'heart-outline', 
    route: '/(modals)/wishlist'
  },
  { 
    id: 5, 
    title: 'Settings', 
    icon: 'settings-outline', 
    route: '/(modals)/settings'
  },
  { 
    id: 6, 
    title: 'Help & Support', 
    icon: 'help-circle-outline', 
    route: '/(modals)/support'
  },
];

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Profile</Text>
        </View>

        <View style={styles.profileSection}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e' }}
            style={styles.profileImage}
          />
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.email}>john.doe@example.com</Text>
        </View>

        <View style={styles.menuSection}>
          {menuItems.map((item) => (
            <Link
              key={item.id}
              href={item.route}
              asChild
            >
              <Pressable style={styles.menuItem}>
                <View style={styles.menuIcon}>
                  <Ionicons name={item.icon as any} size={24} color="#22C55E" />
                </View>
                <Text style={styles.menuTitle}>{item.title}</Text>
                <Ionicons name="chevron-forward" size={24} color="#9CA3AF" />
              </Pressable>
            </Link>
          ))}
        </View>

        <Pressable style={styles.logoutButton}>
          <Ionicons name="log-out-outline" size={24} color="#EF4444" />
          <Text style={styles.logoutText}>Log Out</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1F2937',
  },
  profileSection: {
    alignItems: 'center',
    padding: 24,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  email: {
    fontSize: 16,
    color: '#6B7280',
  },
  menuSection: {
    paddingHorizontal: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  menuIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#DCFCE7',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  menuTitle: {
    flex: 1,
    fontSize: 16,
    color: '#1F2937',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32,
    marginBottom: 16,
    padding: 16,
    marginHorizontal: 16,
    borderRadius: 12,
    backgroundColor: '#FEE2E2',
  },
  logoutText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '600',
    color: '#EF4444',
  },
});