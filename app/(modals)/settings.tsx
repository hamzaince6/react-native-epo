import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Pressable, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function Settings() {
  const [notifications, setNotifications] = useState({
    orderUpdates: true,
    promotions: false,
    priceAlerts: true,
    newArrivals: false,
  });

  const [preferences, setPreferences] = useState({
    darkMode: false,
    biometric: true,
    newsletter: true,
  });

  const toggleSetting = (category, setting) => {
    if (category === 'notifications') {
      setNotifications(prev => ({
        ...prev,
        [setting]: !prev[setting]
      }));
    } else if (category === 'preferences') {
      setPreferences(prev => ({
        ...prev,
        [setting]: !prev[setting]
      }));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="#1F2937" />
        </Pressable>
        <Text style={styles.title}>Settings</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {/* Account Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Account</Text>
            <View style={styles.bentoGrid}>
              <Pressable style={[styles.bentoItem, styles.bentoLarge]}>
                <View style={styles.bentoHeader}>
                  <View style={[styles.iconContainer, { backgroundColor: '#EEF2FF' }]}>
                    <Ionicons name="person" size={24} color="#6366F1" />
                  </View>
                  <Text style={styles.bentoTitle}>Personal Information</Text>
                </View>
                <Text style={styles.bentoDescription}>Update your profile details and preferences</Text>
              </Pressable>
              <Pressable style={styles.bentoItem}>
                <View style={[styles.iconContainer, { backgroundColor: '#FEF2F2' }]}>
                  <Ionicons name="shield-checkmark" size={24} color="#EF4444" />
                </View>
                <Text style={styles.bentoTitle}>Privacy</Text>
              </Pressable>
              <Pressable style={styles.bentoItem}>
                <View style={[styles.iconContainer, { backgroundColor: '#ECFDF5' }]}>
                  <Ionicons name="lock-closed" size={24} color="#22C55E" />
                </View>
                <Text style={styles.bentoTitle}>Security</Text>
              </Pressable>
            </View>
          </View>

          {/* Notifications Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Notifications</Text>
            <View style={styles.settingsContainer}>
              <View style={styles.settingItem}>
                <View style={styles.settingInfo}>
                  <Text style={styles.settingTitle}>Order Updates</Text>
                  <Text style={styles.settingDescription}>Get notifications about your order status</Text>
                </View>
                <Switch
                  value={notifications.orderUpdates}
                  onValueChange={() => toggleSetting('notifications', 'orderUpdates')}
                  trackColor={{ false: '#E5E7EB', true: '#DCFCE7' }}
                  thumbColor={notifications.orderUpdates ? '#22C55E' : '#9CA3AF'}
                />
              </View>
              <View style={styles.settingItem}>
                <View style={styles.settingInfo}>
                  <Text style={styles.settingTitle}>Promotions</Text>
                  <Text style={styles.settingDescription}>Receive updates about sales and special offers</Text>
                </View>
                <Switch
                  value={notifications.promotions}
                  onValueChange={() => toggleSetting('notifications', 'promotions')}
                  trackColor={{ false: '#E5E7EB', true: '#DCFCE7' }}
                  thumbColor={notifications.promotions ? '#22C55E' : '#9CA3AF'}
                />
              </View>
              <View style={styles.settingItem}>
                <View style={styles.settingInfo}>
                  <Text style={styles.settingTitle}>Price Alerts</Text>
                  <Text style={styles.settingDescription}>Get notified when items in your wishlist go on sale</Text>
                </View>
                <Switch
                  value={notifications.priceAlerts}
                  onValueChange={() => toggleSetting('notifications', 'priceAlerts')}
                  trackColor={{ false: '#E5E7EB', true: '#DCFCE7' }}
                  thumbColor={notifications.priceAlerts ? '#22C55E' : '#9CA3AF'}
                />
              </View>
              <View style={styles.settingItem}>
                <View style={styles.settingInfo}>
                  <Text style={styles.settingTitle}>New Arrivals</Text>
                  <Text style={styles.settingDescription}>Stay updated with new products and collections</Text>
                </View>
                <Switch
                  value={notifications.newArrivals}
                  onValueChange={() => toggleSetting('notifications', 'newArrivals')}
                  trackColor={{ false: '#E5E7EB', true: '#DCFCE7' }}
                  thumbColor={notifications.newArrivals ? '#22C55E' : '#9CA3AF'}
                />
              </View>
            </View>
          </View>

          {/* Preferences Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Preferences</Text>
            <View style={styles.bentoGrid}>
              <Pressable style={[styles.bentoItem, styles.bentoMedium]}>
                <View style={styles.bentoHeader}>
                  <View style={[styles.iconContainer, { backgroundColor: '#F0FDF4' }]}>
                    <Ionicons name="moon" size={24} color="#22C55E" />
                  </View>
                  <Switch
                    value={preferences.darkMode}
                    onValueChange={() => toggleSetting('preferences', 'darkMode')}
                    trackColor={{ false: '#E5E7EB', true: '#DCFCE7' }}
                    thumbColor={preferences.darkMode ? '#22C55E' : '#9CA3AF'}
                  />
                </View>
                <Text style={styles.bentoTitle}>Dark Mode</Text>
                <Text style={styles.bentoDescription}>Switch between light and dark themes</Text>
              </Pressable>
              <Pressable style={[styles.bentoItem, styles.bentoMedium]}>
                <View style={styles.bentoHeader}>
                  <View style={[styles.iconContainer, { backgroundColor: '#EEF2FF' }]}>
                    <Ionicons name="finger-print" size={24} color="#6366F1" />
                  </View>
                  <Switch
                    value={preferences.biometric}
                    onValueChange={() => toggleSetting('preferences', 'biometric')}
                    trackColor={{ false: '#E5E7EB', true: '#DCFCE7' }}
                    thumbColor={preferences.biometric ? '#22C55E' : '#9CA3AF'}
                  />
                </View>
                <Text style={styles.bentoTitle}>Biometric Login</Text>
                <Text style={styles.bentoDescription}>Use fingerprint for authentication</Text>
              </Pressable>
            </View>
          </View>

          {/* About Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>About</Text>
            <View style={styles.bentoGrid}>
              <Pressable style={styles.bentoItem}>
                <View style={[styles.iconContainer, { backgroundColor: '#FEF3C7' }]}>
                  <Ionicons name="document-text" size={24} color="#F59E0B" />
                </View>
                <Text style={styles.bentoTitle}>Terms of Service</Text>
              </Pressable>
              <Pressable style={styles.bentoItem}>
                <View style={[styles.iconContainer, { backgroundColor: '#F3E8FF' }]}>
                  <Ionicons name="shield" size={24} color="#9333EA" />
                </View>
                <Text style={styles.bentoTitle}>Privacy Policy</Text>
              </Pressable>
              <Pressable style={styles.bentoItem}>
                <View style={[styles.iconContainer, { backgroundColor: '#E0F2FE' }]}>
                  <Ionicons name="information-circle" size={24} color="#0EA5E9" />
                </View>
                <Text style={styles.bentoTitle}>App Info</Text>
              </Pressable>
            </View>
          </View>
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
  content: {
    padding: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 16,
  },
  bentoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  bentoItem: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    width: '48%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  bentoLarge: {
    width: '100%',
    marginBottom: 12,
  },
  bentoMedium: {
    width: '48%',
    aspectRatio: 1,
  },
  bentoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  iconContainer: {
    width: 40,
    height: 40,
    marginRight: 12,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bentoTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginTop: 8,
  },
  bentoDescription: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
  },
  settingsContainer: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  settingInfo: {
    flex: 1,
    marginRight: 16,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
  },
  settingDescription: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 2,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  backButton: {
    marginRight: 12,
    padding: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1F2937',
  },
});
