import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface HeaderProps {
  onSearchPress: () => void;
  onNotificationsPress: () => void;
}

export const Header = ({ onSearchPress, onNotificationsPress }: HeaderProps) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerTop}>
        <Pressable onPress={onSearchPress} style={styles.searchButton}>
          <Ionicons name="search-outline" size={24} color="#1F2937" />
          <Text style={styles.searchPlaceholder}>Search products...</Text>
        </Pressable>
        <Pressable onPress={onNotificationsPress}>
          <Ionicons name="notifications-outline" size={24} color="#1F2937" />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  searchButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 8,
    gap: 8,
  },
  searchPlaceholder: {
    fontSize: 16,
    color: '#6B7280',
  },
});
