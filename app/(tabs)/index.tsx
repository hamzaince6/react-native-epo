import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Import components
import { Header } from '../components/home/Header';
import { FeaturedCarousel } from '../components/home/FeaturedCarousel';
import { Categories } from '../components/home/Categories';
import { FlashDeals } from '../components/home/FlashDeals';
import { Newsletter } from '../components/home/Newsletter';
import { PopularProducts } from '../components/home/PopularProducts';
import { NewArrivals } from '../components/home/NewArrivals';
import { SpecialOffers } from '../components/home/SpecialOffers';
import { Footer } from '../components/home/Footer';

// Import modals
import { SearchModal } from '../components/modals/SearchModal';
import { NotificationsModal } from '../components/modals/NotificationsModal';

const featuredProducts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
    title: 'Nike Air Max',
    price: '$129',
    discount: '20% OFF',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
    title: 'Wireless Headphones',
    price: '$199',
    discount: '15% OFF',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f',
    title: 'Camera Lens',
    price: '$499',
    discount: '10% OFF',
  },
];

const categories = [
  { id: 1, name: 'Electronics', icon: 'phone-portrait-outline', count: '2,145 items' },
  { id: 2, name: 'Fashion', icon: 'shirt-outline', count: '3,890 items' },
  { id: 3, name: 'Home', icon: 'home-outline', count: '1,672 items' },
  { id: 4, name: 'Beauty', icon: 'color-palette-outline', count: '925 items' },
];

const flashDeals = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12',
    title: 'Smart Watch',
    price: '$99',
    originalPrice: '$149',
    timeLeft: '2h 15m',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad',
    title: 'Bluetooth Speaker',
    price: '$79',
    originalPrice: '$129',
    timeLeft: '3h 45m',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb',
    title: 'Fitness Band',
    price: '$49',
    originalPrice: '$89',
    timeLeft: '1h 30m',
  },
];

const popularProducts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
    title: 'Premium Watch',
    price: '$299',
    rating: 4.8,
    reviews: 245,
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
    title: 'Wireless Headphones',
    price: '$199',
    rating: 4.6,
    reviews: 189,
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1625772452859-1c03d5bf1137',
    title: 'Smart Ring',
    price: '$159',
    rating: 4.7,
    reviews: 156,
  },
];

const newArrivals = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d',
    title: 'Running Shoes',
    price: '$89',
    isNew: true,
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6',
    title: 'Laptop Backpack',
    price: '$49',
    isNew: true,
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1600080972464-8e5f35f63d08',
    title: 'Wireless Earbuds',
    price: '$79',
    isNew: true,
  },
];

const specialOffers = [
  {
    id: 1,
    title: 'Summer Sale',
    description: 'Up to 50% off on summer collection',
    backgroundColor: '#22C55E',
    image: 'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a',
  },
  {
    id: 2,
    title: 'New User Offer',
    description: 'Get 20% off on your first purchase',
    backgroundColor: '#6366F1',
    image: 'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a',
  },
];

const notifications = [
  {
    id: 1,
    title: 'Flash Sale Started!',
    message: 'Don\'t miss out on our biggest sale of the year.',
    time: '2 hours ago',
    unread: true,
  },
  {
    id: 2,
    title: 'Order Shipped',
    message: 'Your order #12345 has been shipped.',
    time: '1 day ago',
    unread: false,
  },
  {
    id: 3,
    title: 'New Arrival',
    message: 'Check out our latest collection of summer wear.',
    time: '2 days ago',
    unread: false,
  },
];

export default function HomeScreen() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isNotificationsVisible, setIsNotificationsVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header 
          onSearchPress={() => setIsSearchVisible(true)}
          onNotificationsPress={() => setIsNotificationsVisible(true)}
        />
        
        <FeaturedCarousel products={featuredProducts} />
        
        <Categories 
          categories={categories}
          onSeeAll={() => {}}
        />
        
        <FlashDeals 
          deals={flashDeals}
          onSeeAll={() => {}}
        />
        
        <Newsletter onSubscribe={() => {}} />
        
        <PopularProducts 
          products={popularProducts}
          onSeeAll={() => {}}
        />
        
        <NewArrivals 
          products={newArrivals}
          onSeeAll={() => {}}
        />
        
        <SpecialOffers offers={specialOffers} />
        
        <Footer />
      </ScrollView>

      <SearchModal 
        visible={isSearchVisible}
        onClose={() => setIsSearchVisible(false)}
      />
      
      <NotificationsModal 
        visible={isNotificationsVisible}
        onClose={() => setIsNotificationsVisible(false)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});