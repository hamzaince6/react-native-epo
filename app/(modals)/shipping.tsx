import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

// Sample addresses data
const addresses = [
  {
    id: 1,
    name: 'Home',
    recipient: 'John Doe',
    address: '123 Main Street',
    city: 'San Francisco',
    state: 'CA',
    zipCode: '94105',
    phone: '+1 (555) 123-4567',
    isDefault: true,
  },
  {
    id: 2,
    name: 'Office',
    recipient: 'John Doe',
    address: '456 Market Street',
    city: 'San Francisco',
    state: 'CA',
    zipCode: '94103',
    phone: '+1 (555) 987-6543',
    isDefault: false,
  },
];

export default function Shipping() {
  const [selectedAddress, setSelectedAddress] = useState(1);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="#1F2937" />
        </Pressable>
        <Text style={styles.title}>Shipping Addresses</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Address Cards */}
        <View style={styles.addressContainer}>
          {addresses.map((address) => (
            <Pressable
              key={address.id}
              style={[
                styles.addressCard,
                selectedAddress === address.id && styles.selectedCard,
              ]}
              onPress={() => setSelectedAddress(address.id)}
            >
              <View style={styles.addressHeader}>
                <View style={styles.addressNameContainer}>
                  <View style={styles.iconContainer}>
                    <Ionicons
                      name={address.name.toLowerCase() === 'home' ? 'home' : 'business'}
                      size={20}
                      color="#22C55E"
                    />
                  </View>
                  <Text style={styles.addressName}>{address.name}</Text>
                </View>
                {address.isDefault && (
                  <View style={styles.defaultBadge}>
                    <Text style={styles.defaultText}>Default</Text>
                  </View>
                )}
              </View>

              <View style={styles.addressDetails}>
                <Text style={styles.recipientName}>{address.recipient}</Text>
                <Text style={styles.addressText}>{address.address}</Text>
                <Text style={styles.addressText}>
                  {address.city}, {address.state} {address.zipCode}
                </Text>
                <Text style={styles.phoneNumber}>{address.phone}</Text>
              </View>

              <View style={styles.actionButtons}>
                <Pressable style={styles.editButton}>
                  <Ionicons name="create-outline" size={20} color="#22C55E" />
                  <Text style={styles.editButtonText}>Edit</Text>
                </Pressable>
                {!address.isDefault && (
                  <Pressable style={styles.deleteButton}>
                    <Ionicons name="trash-outline" size={20} color="#EF4444" />
                    <Text style={styles.deleteButtonText}>Delete</Text>
                  </Pressable>
                )}
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>

      {/* Add New Address Button */}
      <View style={styles.bottomContainer}>
        <Pressable style={styles.addButton}>
          <Ionicons name="add-circle-outline" size={24} color="#fff" />
          <Text style={styles.addButtonText}>Add New Address</Text>
        </Pressable>
      </View>
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
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  backButton: {
    marginRight: 12,
    padding: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1F2937',
  },
  addressContainer: {
    padding: 16,
    gap: 16,
  },
  addressCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  selectedCard: {
    borderColor: '#22C55E',
    backgroundColor: '#F0FDF4',
  },
  addressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  addressNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#DCFCE7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addressName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
  },
  defaultBadge: {
    backgroundColor: '#22C55E20',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  defaultText: {
    color: '#22C55E',
    fontSize: 12,
    fontWeight: '600',
  },
  addressDetails: {
    marginBottom: 16,
  },
  recipientName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  addressText: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 2,
  },
  phoneNumber: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 12,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    paddingTop: 16,
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#F0FDF4',
  },
  editButtonText: {
    color: '#22C55E',
    fontSize: 14,
    fontWeight: '600',
  },
  deleteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#FEE2E2',
  },
  deleteButtonText: {
    color: '#EF4444',
    fontSize: 14,
    fontWeight: '600',
  },
  bottomContainer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#22C55E',
    padding: 16,
    borderRadius: 12,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
