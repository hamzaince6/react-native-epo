import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const { width } = Dimensions.get('window');

interface FeaturedProduct {
  id: string;
  image: string;
  title: string;
  price: string;
  discount?: string;
}

interface FeaturedCarouselProps {
  products: FeaturedProduct[];
}

export const FeaturedCarousel = ({ products }: FeaturedCarouselProps) => {
  const renderCarouselItem = ({ item }: { item: FeaturedProduct }) => (
    <View style={styles.carouselItem}>
      <Image source={{ uri: item.image }} style={styles.carouselImage} />
      {item.discount && (
        <View style={styles.discountBadge}>
          <Text style={styles.discountText}>{item.discount} OFF</Text>
        </View>
      )}
      <View style={styles.carouselContent}>
        <Text style={styles.carouselTitle}>{item.title}</Text>
        <Text style={styles.carouselPrice}>{item.price}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.carouselContainer}>
      <Carousel
        data={products}
        renderItem={renderCarouselItem}
        sliderWidth={width}
        itemWidth={width - 64}
        inactiveSlideScale={0.95}
        inactiveSlideOpacity={0.7}
        containerCustomStyle={styles.carousel}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    paddingVertical: 40,
  },
  carousel: {
    marginHorizontal: -16,
    padding: 16,
  },
  carouselItem: {
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  carouselImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  carouselContent: {
    padding: 15,
  },
  discountBadge: {
    position: 'absolute',
    top: 15,
    right: 15,
    backgroundColor: '#22C55E',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  discountText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  carouselTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
  },
  carouselPrice: {
    fontSize: 16,
    color: '#22C55E',
    fontWeight: '600',
    marginTop: 5,
  },
});
