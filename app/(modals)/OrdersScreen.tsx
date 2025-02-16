import React from 'react';
import { View, Text, ScrollView, StyleSheet, Pressable, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

// Sample order data
const orders = [
  {
    id: 1,
    orderNumber: '#ORD-2024-001',
    date: 'Feb 15, 2024',
    items: [
      {
        id: 1,
        name: 'Nike Air Max',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
        price: '$129',
        status: 'Delivered',
      }
    ],
    total: '$129',
    status: 'Delivered',
    statusColor: '#22C55E',
  },
  {
    id: 2,
    orderNumber: '#ORD-2024-002',
    date: 'Feb 14, 2024',
    items: [
      {
        id: 2,
        name: 'Wireless Headphones',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
        price: '$199',
        status: 'In Transit',
      }
    ],
    total: '$199',
    status: 'In Transit',
    statusColor: '#F59E0B',
  },
  {
    id: 3,
    orderNumber: '#ORD-2024-003',
    date: 'Feb 13, 2024',
    items: [
      {
        id: 3,
        name: 'Camera Lens',
        image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f',
        price: '$499',
        status: 'Processing',
      }
    ],
    total: '$499',
    status: 'Processing',
    statusColor: '#6366F1',
  },
];

export default function OrdersScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>My Orders</Text>
          <Text style={styles.headerSubtitle}>View and track your orders</Text>
        </View>

        {/* Orders Grid */}
        <View style={styles.ordersContainer}>
          {orders.map((order) => (
            <Pressable key={order.id} style={styles.orderCard}>
              <View style={styles.orderHeader}>
                <View>
                  <Text style={styles.orderNumber}>{order.orderNumber}</Text>
                  <Text style={styles.orderDate}>{order.date}</Text>
                </View>
                <View style={[styles.statusBadge, { backgroundColor: `${order.statusColor}20` }]}>
                  <View style={[styles.statusDot, { backgroundColor: order.statusColor }]} />
                  <Text style={[styles.statusText, { color: order.statusColor }]}>{order.status}</Text>
                </View>
              </View>

              {order.items.map((item) => (
                <View key={item.id} style={styles.itemContainer}>
                  <Image source={{ uri: item.image }} style={styles.itemImage} />
                  <View style={styles.itemDetails}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemPrice}>{item.price}</Text>
                  </View>
                </View>
              ))}

              <View style={styles.orderFooter}>
                <Text style={styles.totalLabel}>Total</Text>
                <Text style={styles.totalAmount}>{order.total}</Text>
              </View>

              <Pressable style={styles.trackButton}>
                <Ionicons name="location-outline" size={20} color="#22C55E" />
                <Text style={styles.trackButtonText}>Track Order</Text>
              </Pressable>
            </Pressable>
          ))}
        </View>
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
    padding: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#6B7280',
    marginTop: 4,
  },
  ordersContainer: {
    padding: 20,
    gap: 20,
  },
  orderCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  orderNumber: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
  },
  orderDate: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 2,
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 6,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#F9FAFB',
    padding: 12,
    borderRadius: 12,
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  itemDetails: {
    marginLeft: 12,
    flex: 1,
  },
  itemName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
  },
  itemPrice: {
    fontSize: 14,
    color: '#22C55E',
    fontWeight: '600',
    marginTop: 4,
  },
  orderFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  totalLabel: {
    fontSize: 14,
    color: '#6B7280',
  },
  totalAmount: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
  },
  trackButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0FDF4',
    padding: 12,
    borderRadius: 12,
    marginTop: 16,
  },
  trackButtonText: {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: '600',
    color: '#22C55E',
  },
});
