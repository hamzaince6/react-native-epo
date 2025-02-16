import React from 'react';
import { View, Text, ScrollView, Pressable, Image, StyleSheet } from 'react-native';

interface NewArrival {
  id: string;
  image: string;
  title: string;
  price: string;
  isNew: boolean;
}

interface NewArrivalsProps {
  products: NewArrival[];
  onSeeAll: () => void;
}

export const NewArrivals = ({ products, onSeeAll }: NewArrivalsProps) => {
  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>New Arrivals</Text>
        <Pressable onPress={onSeeAll}>
          <Text style={styles.seeAll}>See All</Text>
        </Pressable>
      </View>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.arrivalsScroll}
      >
        {products.map((product) => (
          <Pressable key={product.id} style={styles.arrivalItem}>
            <Image source={{ uri: product.image }} style={styles.arrivalImage} />
            {product.isNew && (
              <View style={styles.newBadge}>
                <Text style={styles.newBadgeText}>NEW</Text>
              </View>
            )}
            <View style={styles.arrivalContent}>
              <Text style={styles.arrivalTitle}>{product.title}</Text>
              <Text style={styles.arrivalPrice}>{product.price}</Text>
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
  arrivalsScroll: {
    paddingHorizontal: 16,
    gap: 24,
    paddingVertical: 16,
  },
  arrivalItem: {
    width: 160,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  arrivalImage: {
    width: '100%',
    height: 160,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  newBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#22C55E',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  newBadgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '600',
  },
  arrivalContent: {
    padding: 12,
  },
  arrivalTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
  },
  arrivalPrice: {
    fontSize: 16,
    fontWeight: '700',
    color: '#22C55E',
    marginTop: 4,
  },
});
