import React from 'react';
import { View, Text, Pressable, Image, StyleSheet } from 'react-native';

interface SpecialOffer {
  id: string;
  title: string;
  description: string;
  image: string;
  backgroundColor: string;
}

interface SpecialOffersProps {
  offers: SpecialOffer[];
}

export const SpecialOffers = ({ offers }: SpecialOffersProps) => {
  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Special Offers</Text>
      </View>
      {offers.map((offer) => (
        <Pressable 
          key={offer.id} 
          style={[styles.offerCard, { backgroundColor: offer.backgroundColor }]}
        >
          <View style={styles.offerContent}>
            <Text style={styles.offerTitle}>{offer.title}</Text>
            <Text style={styles.offerDescription}>{offer.description}</Text>
            <Pressable style={styles.shopNowButton}>
              <Text style={styles.shopNowText}>Shop Now</Text>
            </Pressable>
          </View>
          <Image source={{ uri: offer.image }} style={styles.offerImage} />
        </Pressable>
      ))}
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
  offerCard: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginVertical: 16,
    borderRadius: 12,
    overflow: 'hidden',
    height: 140,
  },
  offerContent: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  offerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 8,
  },
  offerDescription: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.8,
    marginBottom: 16,
  },
  shopNowButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  shopNowText: {
    color: '#1F2937',
    fontSize: 14,
    fontWeight: '600',
  },
  offerImage: {
    width: 120,
    height: '100%',
  },
});
