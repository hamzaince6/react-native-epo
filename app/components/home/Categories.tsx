import React from 'react';
import { View, Text, ScrollView, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface Category {
  id: string;
  name: string;
  icon: any;
  count: string;
}

interface CategoriesProps {
  categories: Category[];
  onSeeAll: () => void;
}

export const Categories = ({ categories, onSeeAll }: CategoriesProps) => {
  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <Pressable onPress={onSeeAll}>
          <Text style={styles.seeAll}>See All</Text>
        </Pressable>
      </View>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesScroll}
      >
        {categories.map((category) => (
          <Pressable key={category.id} style={styles.categoryItem}>
            <View style={styles.categoryIcon}>
              <Ionicons name={category.icon} size={24} color="#22C55E" />
            </View>
            <Text style={styles.categoryName}>{category.name}</Text>
            <Text style={styles.categoryCount}>{category.count}</Text>
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
  categoriesScroll: {
    paddingHorizontal: 16,
    gap: 24,
    paddingVertical: 16,
  },
  categoryItem: {
    width: 120,
    backgroundColor: '#F0FDF4',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
  },
  categoryIcon: {
    width: 60,
    height: 60,
    backgroundColor: '#DCFCE7',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginTop: 8,
  },
  categoryCount: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 4,
  },
});
