import React from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';

interface NewsletterProps {
  onSubscribe: (email: string) => void;
}

export const Newsletter = ({ onSubscribe }: NewsletterProps) => {
  return (
    <View style={styles.section}>
      <View style={styles.newsletterBanner}>
        <BlurView intensity={80} style={styles.blurContainer}>
          <Text style={styles.newsletterTitle}>Stay Updated!</Text>
          <Text style={styles.newsletterSubtitle}>Subscribe to our newsletter for exclusive deals</Text>
          <View style={styles.newsletterInput}>
            <TextInput
              placeholder="Enter your email"
              placeholderTextColor="#6B7280"
              style={styles.input}
            />
            <Pressable style={styles.subscribeButton}>
              <Text style={styles.subscribeButtonText}>Subscribe</Text>
            </Pressable>
          </View>
        </BlurView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    paddingVertical: 40,
  },
  newsletterBanner: {
    marginHorizontal: 16,
    borderRadius: 16,
    overflow: 'hidden',
    height: 200,
  },
  blurContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  newsletterTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 8,
  },
  newsletterSubtitle: {
    fontSize: 16,
    color: '#6B7280',
    marginBottom: 16,
    textAlign: 'center',
  },
  newsletterInput: {
    flexDirection: 'row',
    width: '100%',
    gap: 8,
  },
  input: {
    flex: 1,
    height: 44,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
  },
  subscribeButton: {
    backgroundColor: '#22C55E',
    height: 44,
    paddingHorizontal: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subscribeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
