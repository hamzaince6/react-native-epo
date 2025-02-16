import React from 'react';
import { View, Text, ScrollView, StyleSheet, Pressable, Image, Dimensions, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;
const padding = 16;
const gap = 12;
const availableWidth = windowWidth - (padding * 2);
const smallCardWidth = (availableWidth - gap) / 2;
const largeCardWidth = availableWidth;

const categories = [
  {
    id: 1,
    name: 'Electronics',
    icon: 'phone-portrait-outline',
    color: '#22C55E',
    image: 'https://picsum.photos/800/400',
    size: 'large',
  },
  {
    id: 2,
    name: 'Fashion',
    icon: 'shirt-outline',
    color: '#6366F1',
    image: 'https://picsum.photos/401/300',
    size: 'small',
  },
  {
    id: 3,
    name: 'Home',
    icon: 'home-outline',
    color: '#F59E0B',
    image: 'https://picsum.photos/402/300',
    size: 'small',
  },
  {
    id: 4,
    name: 'Sports',
    icon: 'football-outline',
    color: '#EF4444',
    image: 'https://picsum.photos/800/400',
    size: 'large',
  },
  {
    id: 5,
    name: 'Beauty',
    icon: 'color-palette-outline',
    color: '#EC4899',
    image: 'https://picsum.photos/404/300',
    size: 'small',
  },
  {
    id: 6,
    name: 'Books',
    icon: 'book-outline',
    color: '#8B5CF6',
    image: 'https://picsum.photos/405/300',
    size: 'small',
  }
];

export default function CategoriesScreen() {
  const renderCategories = () => {
    let currentIndex = 0;
    const views = [];

    while (currentIndex < categories.length) {
      const currentCategory = categories[currentIndex];

      if (currentCategory.size === 'large') {
        // Render large card
        views.push(
          <Pressable key={currentCategory.id} style={[styles.card, styles.cardLarge]}>
            <Image 
              source={{ uri: currentCategory.image }} 
              style={styles.cardImage}
              resizeMode="cover"
            />
            <View style={styles.overlay}>
              <View style={[styles.iconContainer, { backgroundColor: currentCategory.color }]}>
                <Ionicons name={currentCategory.icon} size={24} color="#fff" />
              </View>
              <Text style={styles.cardTitle}>{currentCategory.name}</Text>
            </View>
          </Pressable>
        );
        currentIndex++;
      } else {
        // Render pair of small cards if available
        const row = (
          <View key={`row-${currentIndex}`} style={styles.row}>
            <Pressable style={[styles.card, styles.cardSmall]}>
              <Image 
                source={{ uri: currentCategory.image }} 
                style={styles.cardImage}
                resizeMode="cover"
              />
              <View style={styles.overlay}>
                <View style={[styles.iconContainer, { backgroundColor: currentCategory.color }]}>
                  <Ionicons name={currentCategory.icon} size={24} color="#fff" />
                </View>
                <Text style={styles.cardTitle}>{currentCategory.name}</Text>
              </View>
            </Pressable>
            {currentIndex + 1 < categories.length && categories[currentIndex + 1].size === 'small' && (
              <Pressable style={[styles.card, styles.cardSmall]}>
                <Image 
                  source={{ uri: categories[currentIndex + 1].image }} 
                  style={styles.cardImage}
                  resizeMode="cover"
                />
                <View style={styles.overlay}>
                  <View style={[styles.iconContainer, { backgroundColor: categories[currentIndex + 1].color }]}>
                    <Ionicons name={categories[currentIndex + 1].icon} size={24} color="#fff" />
                  </View>
                  <Text style={styles.cardTitle}>{categories[currentIndex + 1].name}</Text>
                </View>
              </Pressable>
            )}
          </View>
        );
        views.push(row);
        currentIndex += 2;
      }
    }

    return views;
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Categories</Text>
          <Text style={styles.subtitle}>Discover our collection</Text>
        </View>

        <View style={styles.grid}>
          {renderCategories()}
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
  scrollContent: {
    padding: padding,
  },
  header: {
    marginBottom: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1F2937',
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    marginTop: 4,
  },
  grid: {
    gap: gap,
  },
  row: {
    flexDirection: 'row',
    gap: gap,
    marginBottom: gap,
  },
  card: {
    borderRadius: 16,
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  cardLarge: {
    width: largeCardWidth,
    height: 200,
    marginBottom: gap,
  },
  cardSmall: {
    width: smallCardWidth,
    height: 180,
  },
  cardImage: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    padding: 16,
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
});