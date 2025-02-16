import React, { useState } from 'react';
import { View, Text, Modal, TextInput, Pressable, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';

interface SearchModalProps {
  visible: boolean;
  onClose: () => void;
}

export const SearchModal = ({ visible, onClose }: SearchModalProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}>
      <BlurView intensity={20} style={styles.modalContainer}>
        <View style={styles.searchContainer}>
          <View style={styles.searchHeader}>
            <View style={styles.searchInputContainer}>
              <Ionicons name="search-outline" size={24} />
              <TextInput
                style={styles.searchInput}
                placeholder="Search products..."
                value={searchQuery}
                onChangeText={setSearchQuery}
                autoFocus
                placeholderTextColor="#6B7280"
              />
            </View>
            <Pressable
              style={styles.cancelButton}
              onPress={onClose}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </Pressable>
          </View>
          {searchQuery.length > 0 && (
            <View style={styles.searchSuggestions}>
              <Text style={styles.suggestionTitle}>Popular Searches</Text>
              <Pressable style={styles.suggestionItem}>
                <Ionicons name="trending-up-outline" size={20} color="#6B7280" />
                <Text style={styles.suggestionText}>Wireless Headphones</Text>
              </Pressable>
              <Pressable style={styles.suggestionItem}>
                <Ionicons name="trending-up-outline" size={20} color="#6B7280" />
                <Text style={styles.suggestionText}>Smart Watches</Text>
              </Pressable>
            </View>
          )}
        </View>
      </BlurView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  searchContainer: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },
  searchHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    marginLeft: 8,
    color: '#1F2937',
    outlineStyle: 'none',
  },
  cancelButton: {
    paddingVertical: 8,
  },
  cancelButtonText: {
    color: '#22C55E',
    fontSize: 16,
    fontWeight: '600',
  },
  searchSuggestions: {
    marginTop: 20,
  },
  suggestionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6B7280',
    marginBottom: 12,
  },
  suggestionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    gap: 12,
  },
  suggestionText: {
    fontSize: 16,
    color: '#1F2937',
  },
});
