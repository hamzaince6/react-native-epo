import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Dimensions } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import Carousel from 'react-native-reanimated-carousel';
import { Image } from 'expo-image';

const { width } = Dimensions.get('window');

const productData = {
  id: '1',
  name: 'Premium Comfort Sneakers',
  price: 129.99,
  description: 'Experience ultimate comfort with our premium sneakers. Featuring advanced cushioning technology and breathable materials for all-day wear.',
  sizes: ['38', '39', '40', '41', '42', '43', '44'],
  colors: ['#000000', '#FFFFFF', '#22C55E', '#3B82F6'],
  images: [
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
    'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa',
    'https://images.unsplash.com/photo-1608231387042-66d1773070a5',
    'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb',
  ],
  features: [
    'Breathable mesh upper',
    'Responsive cushioning',
    'Durable rubber outsole',
    'Ergonomic design',
  ],
  rating: 4.8,
  reviews: 128,
};

export default function ProductDetail() {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <View style={styles.mainContainer}>
      <StatusBar style="light" />
      <Stack.Screen
        options={{
          headerShown: false
        }}
      />
      
      {/* Back Button */}
      <Pressable 
        style={styles.backButton}
        onPress={handleBack}>
        <View style={styles.backButtonCircle}>
          <Ionicons name="arrow-back" size={24} color="#1F2937" />
        </View>
      </Pressable>

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Image Carousel */}
        <View style={styles.carouselContainer}>
          <Carousel
            loop
            width={width}
            height={width}
            data={productData.images}
            scrollAnimationDuration={1000}
            renderItem={({ item }) => (
              <Image
                source={{ uri: item }}
                style={styles.carouselImage}
                contentFit="cover"
              />
            )}
          />
        </View>

        {/* Product Info Section */}
        <View style={styles.infoContainer}>
          <View style={styles.headerSection}>
            <Text style={styles.productName}>{productData.name}</Text>
            <View style={styles.ratingContainer}>
              <Ionicons name="star" size={20} color="#F59E0B" />
              <Text style={styles.rating}>{productData.rating}</Text>
              <Text style={styles.reviews}>({productData.reviews} reviews)</Text>
            </View>
            <Text style={styles.price}>${productData.price}</Text>
          </View>

          {/* Description Section */}
          <View style={styles.descriptionSection}>
            <Text style={styles.sectionTitle}>Description</Text>
            <Text style={styles.description}>{productData.description}</Text>
          </View>

          {/* Features Grid */}
          <View style={styles.featuresGrid}>
            {productData.features.map((feature, index) => (
              <View key={index} style={styles.featureItem}>
                <Ionicons name="checkmark-circle" size={24} color="#22C55E" />
                <Text style={styles.featureText}>{feature}</Text>
              </View>
            ))}
          </View>

          {/* Size Selection */}
          <View style={styles.sizeSection}>
            <Text style={styles.sectionTitle}>Select Size</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.sizeContainer}>
                {productData.sizes.map((size) => (
                  <Pressable
                    key={size}
                    style={[
                      styles.sizeButton,
                      selectedSize === size && styles.selectedSize,
                    ]}
                    onPress={() => setSelectedSize(size)}>
                    <Text style={[
                      styles.sizeText,
                      selectedSize === size && styles.selectedSizeText,
                    ]}>{size}</Text>
                  </Pressable>
                ))}
              </View>
            </ScrollView>
          </View>

          {/* Color Selection */}
          <View style={styles.colorSection}>
            <Text style={styles.sectionTitle}>Available Colors</Text>
            <View style={styles.colorContainer}>
              {productData.colors.map((color) => (
                <Pressable
                  key={color}
                  style={[
                    styles.colorButton,
                    { backgroundColor: color },
                    selectedColor === color && styles.selectedColor,
                  ]}
                  onPress={() => setSelectedColor(color)}
                />
              ))}
            </View>
          </View>
        </View>

        {/* Add to Cart Button */}
        <View style={styles.bottomSection}>
          <Pressable style={styles.addToCartButton}>
            <Ionicons name="cart-outline" size={24} color="#fff" />
            <Text style={styles.addToCartText}>Add to Cart</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 10,
  },
  backButtonCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  carouselContainer: {
    backgroundColor: '#F3F4F6',
  },
  carouselImage: {
    width: width,
    height: width,
  },
  infoContainer: {
    padding: 20,
  },
  headerSection: {
    marginBottom: 20,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  rating: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginLeft: 4,
  },
  reviews: {
    fontSize: 14,
    color: '#6B7280',
    marginLeft: 4,
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#22C55E',
  },
  descriptionSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#6B7280',
    lineHeight: 24,
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    marginBottom: 20,
    backgroundColor: '#F9FAFB',
    padding: 16,
    borderRadius: 12,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '45%',
  },
  featureText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#4B5563',
  },
  sizeSection: {
    marginBottom: 20,
  },
  sizeContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  sizeButton: {
    width: 56,
    height: 56,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  selectedSize: {
    backgroundColor: '#22C55E',
    borderColor: '#22C55E',
  },
  sizeText: {
    fontSize: 16,
    color: '#1F2937',
  },
  selectedSizeText: {
    color: '#fff',
  },
  colorSection: {
    marginBottom: 20,
  },
  colorContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  colorButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedColor: {
    borderColor: '#22C55E',
  },
  bottomSection: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  addToCartButton: {
    backgroundColor: '#22C55E',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 12,
    gap: 8,
  },
  addToCartText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
