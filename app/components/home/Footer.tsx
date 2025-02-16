import React from 'react';
import { View, Text, StyleSheet, Pressable, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleSocialPress = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      {/* Top Grid Section */}
      <View style={styles.topGrid}>
        <View style={[styles.gridItem, styles.companyInfo]}>
          <Text style={styles.logo}>SHOPZ</Text>
          <Text style={styles.companyDesc}>
            Discover the latest trends in fashion and lifestyle products.
          </Text>
        </View>

        <View style={[styles.gridItem, styles.quickLinks]}>
          <Text style={styles.gridTitle}>Quick Links</Text>
          <Pressable>
            <Text style={styles.linkText}>New Arrivals</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.linkText}>Best Sellers</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.linkText}>Flash Deals</Text>
          </Pressable>
        </View>

        <View style={[styles.gridItem, styles.support]}>
          <Text style={styles.gridTitle}>Support</Text>
          <Pressable>
            <Text style={styles.linkText}>Help Center</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.linkText}>Track Order</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.linkText}>Contact Us</Text>
          </Pressable>
        </View>

        <View style={[styles.gridItem, styles.social]}>
          <Text style={styles.gridTitle}>Connect</Text>
          <View style={styles.socialIcons}>
            <Pressable 
              style={styles.socialButton}
              onPress={() => handleSocialPress('https://instagram.com')}>
              <Ionicons name="logo-instagram" size={24} color="#22C55E" />
            </Pressable>
            <Pressable 
              style={styles.socialButton}
              onPress={() => handleSocialPress('https://twitter.com')}>
              <Ionicons name="logo-twitter" size={24} color="#22C55E" />
            </Pressable>
            <Pressable 
              style={styles.socialButton}
              onPress={() => handleSocialPress('https://facebook.com')}>
              <Ionicons name="logo-facebook" size={24} color="#22C55E" />
            </Pressable>
          </View>
        </View>
      </View>

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        <View style={styles.divider} />
        <Text style={styles.copyright}>
          {currentYear} SHOPZ. All rights reserved.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  topGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 20,
  },
  gridItem: {
    minWidth: 150,
    flex: 1,
    marginBottom: 20,
  },
  companyInfo: {
    flex: 2,
    minWidth: 200,
  },
  logo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#22C55E',
    marginBottom: 12,
  },
  companyDesc: {
    color: '#6B7280',
    lineHeight: 22,
  },
  gridTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 16,
  },
  linkText: {
    color: '#6B7280',
    marginBottom: 12,
    fontSize: 15,
  },
  socialIcons: {
    flexDirection: 'row',
    gap: 16,
  },
  socialButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomSection: {
    marginTop: 20,
  },
  divider: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginBottom: 20,
  },
  copyright: {
    textAlign: 'center',
    color: '#9CA3AF',
    fontSize: 14,
  },
});
