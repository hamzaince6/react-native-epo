import React from 'react';
import { View, Text, ScrollView, Pressable, Image, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

interface NewArrival {
  id: string;
  image: string;
  title: string;
  price: string;
  isNew: boolean;
}

interface NewArrivalsProps {
  products?: NewArrival[];
  onSeeAll?: () => void;
}

export const NewArrivals = ({ products = [], onSeeAll }: NewArrivalsProps) => {
  if (products.length === 0) {
    return null;
  }

  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>New Arrivals</Text>
        {onSeeAll && (
          <Pressable onPress={onSeeAll}>
            <Text style={styles.seeAll}>See All</Text>
          </Pressable>
        )}
      </View>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.arrivalsScroll}
      >
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
            asChild
          >
            <Pressable style={styles.arrivalItem}>
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
          </Link>
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
    color: '#22C55E',
    fontWeight: '600',
  },
  arrivalsScroll: {
    paddingHorizontal: 16,
    gap: 16,
  },
  arrivalItem: {
    width: 180,
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  arrivalImage: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },
  arrivalContent: {
    padding: 12,
  },
  arrivalTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 8,
  },
  arrivalPrice: {
    fontSize: 18,
    fontWeight: '700',
    color: '#22C55E',
  },
  newBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#22C55E',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  newBadgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
});
