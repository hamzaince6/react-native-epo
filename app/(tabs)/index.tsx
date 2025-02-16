import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

// Import components
import { Header } from '../components/home/Header';
import { SearchModal } from '../components/modals/SearchModal';
import { NotificationsModal } from '../components/modals/NotificationsModal';
import { FeaturedCarousel } from '../components/home/FeaturedCarousel';
import { Categories } from '../components/home/Categories';
import { FlashDeals } from '../components/home/FlashDeals';
import { PopularProducts } from '../components/home/PopularProducts';
import { NewArrivals } from '../components/home/NewArrivals';
import { SpecialOffers } from '../components/home/SpecialOffers';
import { Newsletter } from '../components/home/Newsletter';
import { Footer } from '../components/home/Footer';

// Sample data
const featuredProducts = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
    title: 'Premium Comfort Sneakers',
    price: '$129.99',
    discount: '20% OFF',
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772',
    title: 'Running Shoes',
    price: '$89.99',
    discount: '15% OFF',
  },
];

const categories = [
  { id: '1', name: 'Sneakers', icon: 'footsteps', image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3' },
  { id: '2', name: 'Running', icon: 'bicycle', image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a' },
  { id: '3', name: 'Basketball', icon: 'basketball', image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc' },
];

const flashDeals = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb',
    title: 'Limited Edition Sneakers',
    price: '$79.99',
    originalPrice: '$149.99',
    timeLeft: '2h 15m',
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329',
    title: 'Sport Shoes',
    price: '$59.99',
    originalPrice: '$99.99',
    timeLeft: '1h 30m',
  },
];

const popularProducts = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa',
    title: 'Nike Air Max 270',
    price: '$150',
    rating: '4.8',
    reviews: '2.5k',
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5',
    title: 'Adidas UltraBoost',
    price: '$180',
    rating: '4.7',
    reviews: '1.8k',
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb',
    title: 'Puma RS-X',
    price: '$110',
    rating: '4.5',
    reviews: '956',
  },
];

const newArrivals = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2',
    title: 'Nike Air Force 1 Shadow',
    price: '$120',
    isNew: true,
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519',
    title: 'Adidas NMD R1',
    price: '$140',
    isNew: true,
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a',
    title: 'Nike React Vision',
    price: '$160',
    isNew: true,
  },
];

const specialOffers = [
  {
    id: '1',
    title: 'Summer Sale',
    description: 'Get up to 50% off on selected summer collection',
    image: 'https://images.unsplash.com/photo-1588117305388-c2631a279f82',
    backgroundColor: '#FEF3C7',
  },
  {
    id: '2',
    title: 'New Season',
    description: 'Check out our latest autumn collection',
    image: 'https://images.unsplash.com/photo-1595341888016-a392ef81b7de',
    backgroundColor: '#DBEAFE',
  },
];

export default function HomeScreen() {
  const [isSearchModalVisible, setSearchModalVisible] = React.useState(false);
  const [isNotificationsModalVisible, setNotificationsModalVisible] = React.useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      
      <Header 
        onSearchPress={() => setSearchModalVisible(true)}
        onNotificationsPress={() => setNotificationsModalVisible(true)}
      />

      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <FeaturedCarousel products={featuredProducts} />
        
        <View style={styles.section}>
          <Categories categories={categories} />
        </View>

        <View style={styles.section}>
          <FlashDeals deals={flashDeals} onSeeAll={() => {}} />
        </View>

        <View style={styles.section}>
          <PopularProducts products={popularProducts} onSeeAll={() => {}} />
        </View>

        <View style={styles.section}>
          <NewArrivals products={newArrivals} onSeeAll={() => {}} />
        </View>

        <View style={styles.section}>
          <SpecialOffers offers={specialOffers} />
        </View>

        <View style={styles.section}>
          <Newsletter />
        </View>

        <Footer />
      </ScrollView>

      <SearchModal 
        visible={isSearchModalVisible}
        onClose={() => setSearchModalVisible(false)}
      />

      <NotificationsModal 
        visible={isNotificationsModalVisible}
        onClose={() => setNotificationsModalVisible(false)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  section: {
    marginVertical: 20,
  },
});
