import React from 'react';
import { View, Text, ScrollView, Pressable, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface FlashDeal {
  id: string;
  image: string;
  title: string;
  price: string;
  originalPrice: string;
  timeLeft: string;
}

interface FlashDealsProps {
  deals: FlashDeal[];
  onSeeAll: () => void;
}

export const FlashDeals = ({ deals, onSeeAll }: FlashDealsProps) => {
  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Flash Deals</Text>
        <Pressable onPress={onSeeAll}>
          <Text style={styles.seeAll}>See All</Text>
        </Pressable>
      </View>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.dealsScroll}
      >
        {deals.map((deal) => (
          <Pressable key={deal.id} style={styles.dealItem}>
            <Image source={{ uri: deal.image }} style={styles.dealImage} />
            <View style={styles.dealContent}>
              <Text style={styles.dealTitle}>{deal.title}</Text>
              <View style={styles.dealPriceContainer}>
                <Text style={styles.dealPrice}>{deal.price}</Text>
                <Text style={styles.dealOriginalPrice}>{deal.originalPrice}</Text>
              </View>
              <View style={styles.dealTimeContainer}>
                <Ionicons name="time-outline" size={16} color="#EF4444" />
                <Text style={styles.dealTime}>{deal.timeLeft}</Text>
              </View>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    paddingVertical: 40,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1F2937',
  },
  seeAll: {
    fontSize: 14,
    fontWeight: '600',
    color: '#22C55E',
  },
  dealsScroll: {
    paddingHorizontal: 16,
    gap: 24,
    paddingVertical: 16,
  },
  dealItem: {
    width: 200,
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  dealImage: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  dealContent: {
    padding: 12,
  },
  dealTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
  },
  dealPriceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    gap: 8,
  },
  dealPrice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#22C55E',
  },
  dealOriginalPrice: {
    fontSize: 14,
    color: '#6B7280',
    textDecorationLine: 'line-through',
  },
  dealTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    gap: 4,
  },
  dealTime: {
    fontSize: 12,
    color: '#EF4444',
  },
});
