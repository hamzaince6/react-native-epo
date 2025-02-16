import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Pressable, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

// Sample FAQ data
const faqs = [
  {
    id: 1,
    question: 'How do I track my order?',
    answer: 'You can track your order by going to My Orders section and clicking on the specific order. You\'ll see real-time updates about your package\'s location and estimated delivery date.',
  },
  {
    id: 2,
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and Apple Pay. You can manage your payment methods in the Payment Methods section.',
  },
  {
    id: 3,
    question: 'How can I return an item?',
    answer: 'To return an item, go to My Orders, select the order containing the item you want to return, and click "Return Item". Follow the instructions to print your return label.',
  },
];

export default function SupportScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {/* Search Bar */}
          <View style={styles.searchContainer}>
            <Ionicons name="search-outline" size={20} color="#6B7280" />
            <TextInput
              style={styles.searchInput}
              placeholder="Search help articles..."
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholderTextColor="#6B7280"
            />
          </View>

          {/* Quick Actions */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Quick Actions</Text>
            <View style={styles.bentoGrid}>
              <Pressable style={[styles.bentoItem, styles.bentoMedium]}>
                <View style={[styles.iconContainer, { backgroundColor: '#F0FDF4' }]}>
                  <Ionicons name="chatbubbles" size={24} color="#22C55E" />
                </View>
                <Text style={styles.bentoTitle}>Live Chat</Text>
                <Text style={styles.bentoDescription}>Talk to our support team</Text>
                <View style={styles.statusBadge}>
                  <View style={styles.statusDot} />
                  <Text style={styles.statusText}>Online</Text>
                </View>
              </Pressable>
              <Pressable style={[styles.bentoItem, styles.bentoMedium]}>
                <View style={[styles.iconContainer, { backgroundColor: '#EEF2FF' }]}>
                  <Ionicons name="mail" size={24} color="#6366F1" />
                </View>
                <Text style={styles.bentoTitle}>Email Support</Text>
                <Text style={styles.bentoDescription}>Get help via email</Text>
                <Text style={styles.responseTime}>Response time: ~24h</Text>
              </Pressable>
            </View>
          </View>

          {/* Common Topics */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Common Topics</Text>
            <View style={styles.bentoGrid}>
              <Pressable style={styles.bentoItem}>
                <View style={[styles.iconContainer, { backgroundColor: '#FEF2F2' }]}>
                  <Ionicons name="cube" size={24} color="#EF4444" />
                </View>
                <Text style={styles.bentoTitle}>Orders</Text>
              </Pressable>
              <Pressable style={styles.bentoItem}>
                <View style={[styles.iconContainer, { backgroundColor: '#FEF3C7' }]}>
                  <Ionicons name="repeat" size={24} color="#F59E0B" />
                </View>
                <Text style={styles.bentoTitle}>Returns</Text>
              </Pressable>
              <Pressable style={styles.bentoItem}>
                <View style={[styles.iconContainer, { backgroundColor: '#F0FDF4' }]}>
                  <Ionicons name="card" size={24} color="#22C55E" />
                </View>
                <Text style={styles.bentoTitle}>Payments</Text>
              </Pressable>
              <Pressable style={styles.bentoItem}>
                <View style={[styles.iconContainer, { backgroundColor: '#EEF2FF' }]}>
                  <Ionicons name="gift" size={24} color="#6366F1" />
                </View>
                <Text style={styles.bentoTitle}>Promos</Text>
              </Pressable>
            </View>
          </View>

          {/* FAQs */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>
            <View style={styles.faqContainer}>
              {faqs.map((faq) => (
                <Pressable
                  key={faq.id}
                  style={styles.faqItem}
                  onPress={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                >
                  <View style={styles.faqHeader}>
                    <Text style={styles.faqQuestion}>{faq.question}</Text>
                    <Ionicons
                      name={expandedFaq === faq.id ? 'chevron-up' : 'chevron-down'}
                      size={20}
                      color="#6B7280"
                    />
                  </View>
                  {expandedFaq === faq.id && (
                    <Text style={styles.faqAnswer}>{faq.answer}</Text>
                  )}
                </Pressable>
              ))}
            </View>
          </View>

          {/* Contact Info */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Contact Information</Text>
            <View style={[styles.bentoItem, styles.bentoLarge]}>
              <View style={styles.contactInfo}>
                <View style={styles.contactRow}>
                  <View style={[styles.iconContainer, { backgroundColor: '#F0FDF4' }]}>
                    <Ionicons name="call" size={24} color="#22C55E" />
                  </View>
                  <View style={styles.contactDetails}>
                    <Text style={styles.contactLabel}>Phone Support</Text>
                    <Text style={styles.contactValue}>1-800-123-4567</Text>
                    <Text style={styles.contactHours}>Mon-Fri, 9AM-6PM EST</Text>
                  </View>
                </View>
                <View style={styles.contactRow}>
                  <View style={[styles.iconContainer, { backgroundColor: '#EEF2FF' }]}>
                    <Ionicons name="location" size={24} color="#6366F1" />
                  </View>
                  <View style={styles.contactDetails}>
                    <Text style={styles.contactLabel}>Headquarters</Text>
                    <Text style={styles.contactValue}>123 Commerce Street</Text>
                    <Text style={styles.contactValue}>New York, NY 10001</Text>
                  </View>
                </View>
              </View>
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    padding: 12,
    marginBottom: 24,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: '#1F2937',
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
  },
  bentoMedium: {
    width: '48%',
    aspectRatio: 1,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  bentoTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
  },
  bentoDescription: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0FDF4',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
    marginTop: 8,
  },
  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#22C55E',
    marginRight: 4,
  },
  statusText: {
    fontSize: 12,
    color: '#22C55E',
    fontWeight: '500',
  },
  responseTime: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 8,
  },
  faqContainer: {
    backgroundColor: '#fff',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    overflow: 'hidden',
  },
  faqItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    padding: 16,
  },
  faqHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  faqQuestion: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    flex: 1,
    marginRight: 16,
  },
  faqAnswer: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 12,
    lineHeight: 20,
  },
  contactInfo: {
    gap: 16,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactDetails: {
    marginLeft: 12,
  },
  contactLabel: {
    fontSize: 14,
    color: '#6B7280',
  },
  contactValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
  },
  contactHours: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 2,
  },
});
