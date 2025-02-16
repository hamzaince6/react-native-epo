import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Pressable, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

// Sample payment methods data
const paymentMethods = [
  {
    id: 1,
    type: 'credit',
    cardNumber: '•••• •••• •••• 4242',
    cardHolder: 'John Doe',
    expiry: '12/25',
    brand: 'visa',
    isDefault: true,
  },
  {
    id: 2,
    type: 'credit',
    cardNumber: '•••• •••• •••• 5555',
    cardHolder: 'John Doe',
    expiry: '09/24',
    brand: 'mastercard',
    isDefault: false,
  },
  {
    id: 3,
    type: 'paypal',
    email: 'john.doe@example.com',
    isDefault: false,
  },
];

export default function PaymentScreen() {
  const [selectedMethod, setSelectedMethod] = useState(1);

  const getCardIcon = (brand) => {
    switch (brand) {
      case 'visa':
        return { uri: 'https://e7.pngegg.com/pngimages/308/426/png-clipart-visa-logo-credit-card-visa-logo-payment-visa-blue-text-thumbnail.png' };
      case 'mastercard':
        return { uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/2560px-MasterCard_Logo.svg.png' };
      default:
        return null;
    }
  };

  const renderPaymentMethod = (method) => {
    if (method.type === 'credit') {
      return (
        <Pressable
          key={method.id}
          style={[
            styles.paymentCard,
            selectedMethod === method.id && styles.selectedCard,
          ]}
          onPress={() => setSelectedMethod(method.id)}
        >
          <View style={styles.cardHeader}>
            <Image source={getCardIcon(method.brand)} style={styles.cardBrandIcon} />
            {method.isDefault && (
              <View style={styles.defaultBadge}>
                <Text style={styles.defaultText}>Default</Text>
              </View>
            )}
          </View>

          <View style={styles.cardInfo}>
            <Text style={styles.cardNumber}>{method.cardNumber}</Text>
            <View style={styles.cardDetails}>
              <Text style={styles.cardHolder}>{method.cardHolder}</Text>
              <Text style={styles.expiryDate}>Expires {method.expiry}</Text>
            </View>
          </View>

          <View style={styles.actionButtons}>
            <Pressable style={styles.editButton}>
              <Ionicons name="create-outline" size={20} color="#22C55E" />
              <Text style={styles.editButtonText}>Edit</Text>
            </Pressable>
            {!method.isDefault && (
              <Pressable style={styles.deleteButton}>
                <Ionicons name="trash-outline" size={20} color="#EF4444" />
                <Text style={styles.deleteButtonText}>Delete</Text>
              </Pressable>
            )}
          </View>
        </Pressable>
      );
    } else if (method.type === 'paypal') {
      return (
        <Pressable
          key={method.id}
          style={[
            styles.paymentCard,
            selectedMethod === method.id && styles.selectedCard,
          ]}
          onPress={() => setSelectedMethod(method.id)}
        >
          <View style={styles.cardHeader}>
            <View style={styles.paypalIcon}>
              <Ionicons name="logo-paypal" size={24} color="#00457C" />
            </View>
          </View>

          <View style={styles.cardInfo}>
            <Text style={styles.paypalEmail}>{method.email}</Text>
            <Text style={styles.paypalLabel}>PayPal Account</Text>
          </View>

          <View style={styles.actionButtons}>
            <Pressable style={styles.deleteButton}>
              <Ionicons name="trash-outline" size={20} color="#EF4444" />
              <Text style={styles.deleteButtonText}>Remove</Text>
            </Pressable>
          </View>
        </Pressable>
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.methodsContainer}>
          {paymentMethods.map(renderPaymentMethod)}
        </View>
      </ScrollView>

      <View style={styles.bottomContainer}>
        <Pressable style={styles.addButton}>
          <Ionicons name="add-circle-outline" size={24} color="#fff" />
          <Text style={styles.addButtonText}>Add New Payment Method</Text>
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
  methodsContainer: {
    padding: 16,
    gap: 16,
  },
  paymentCard: {
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
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  cardBrandIcon: {
    width: 60,
    height: 40,
    resizeMode: 'contain',
  },
  paypalIcon: {
    width: 48,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
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
  cardInfo: {
    marginBottom: 16,
  },
  cardNumber: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 8,
    letterSpacing: 1,
  },
  cardDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardHolder: {
    fontSize: 14,
    color: '#6B7280',
  },
  expiryDate: {
    fontSize: 14,
    color: '#6B7280',
  },
  paypalEmail: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  paypalLabel: {
    fontSize: 14,
    color: '#6B7280',
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
