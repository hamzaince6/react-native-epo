import React from 'react';
import { View, Text, ScrollView, Pressable, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

interface PopularProduct {
  id: string;
  image: string;
  title: string;
  price: string;
  rating: string;
  reviews: string;
}

interface PopularProductsProps {
  products: PopularProduct[];
  onSeeAll: () => void;
}

export const PopularProducts = ({ products, onSeeAll }: PopularProductsProps) => {
  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Most Popular</Text>
        <Pressable onPress={onSeeAll}>
          <Text style={styles.seeAll}>See All</Text>
        </Pressable>
      </View>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.popularScroll}
      >
        {products.map((product) => (
          <Link
            key={product.id}
            href={{
              pathname: "/product/[id]",
              params: { id: product.id }
            }}
            asChild
          >
            <Pressable style={styles.popularItem}>
              <Image 
                source={{ uri: product.image }} 
                style={styles.popularImage}
                contentFit="cover"
              />
              <View style={styles.popularContent}>
                <Text style={styles.popularTitle}>{product.title}</Text>
                <Text style={styles.popularPrice}>{product.price}</Text>
                <View style={styles.ratingContainer}>
                  <Ionicons name="star" size={16} color="#F59E0B" />
                  <Text style={styles.rating}>{product.rating}</Text>
                  <Text style={styles.reviews}>({product.reviews})</Text>
                </View>
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
    fontWeight: '600',
    color: '#22C55E',
  },
  popularScroll: {
    paddingHorizontal: 16,
    gap: 24,
    paddingVertical: 16,
  },
  popularItem: {
    width: 200,
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  popularImage: {
    width: '100%',
    height: 150,
  },
  popularContent: {
    padding: 12,
  },
  popularTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  popularPrice: {
    fontSize: 18,
    fontWeight: '700',
    color: '#22C55E',
    marginTop: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    gap: 4,
  },
  rating: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
  },
  reviews: {
    fontSize: 14,
    color: '#6B7280',
  },
});
