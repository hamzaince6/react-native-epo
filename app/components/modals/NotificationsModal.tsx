import React from 'react';
import { View, Text, Modal, Pressable, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';

interface Notification {
  id: number;
  title: string;
  message: string;
  time: string;
  unread: boolean;
}

interface NotificationsModalProps {
  visible: boolean;
  onClose: () => void;
}

const notifications: Notification[] = [
  {
    id: 1,
    title: 'Flash Sale Started!',
    message: 'Don\'t miss out on our biggest sale of the year.',
    time: '2 hours ago',
    unread: true,
  },
  {
    id: 2,
    title: 'Order Shipped',
    message: 'Your order #12345 has been shipped.',
    time: '1 day ago',
    unread: false,
  },
  {
    id: 3,
    title: 'New Arrival',
    message: 'Check out our latest collection of summer wear.',
    time: '2 days ago',
    unread: false,
  },
];

export const NotificationsModal = ({ visible, onClose }: NotificationsModalProps) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}>
      <BlurView intensity={20} style={styles.modalContainer}>
        <View style={styles.notificationsContainer}>
          <View style={styles.notificationsHeader}>
            <Text style={styles.notificationsTitle}>Notifications</Text>
            <Pressable
              style={styles.closeButton}
              onPress={onClose}>
              <Ionicons name="close" size={24} color="#1F2937" />
            </Pressable>
          </View>
          {notifications.map((notification) => (
            <Pressable key={notification.id} style={styles.notificationItem}>
              {notification.unread && <View style={styles.unreadDot} />}
              <View style={styles.notificationContent}>
                <Text style={styles.notificationTitle}>{notification.title}</Text>
                <Text style={styles.notificationMessage}>{notification.message}</Text>
                <Text style={styles.notificationTime}>{notification.time}</Text>
              </View>
            </Pressable>
          ))}
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
  notificationsContainer: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    maxHeight: '80%',
  },
  notificationsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  notificationsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  closeButton: {
    padding: 4,
  },
  notificationItem: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
    position: 'relative',
  },
  unreadDot: {
    position: 'absolute',
    top: 20,
    left: 0,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#22C55E',
  },
  notificationContent: {
    flex: 1,
    marginLeft: 12,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  notificationMessage: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 8,
  },
  notificationTime: {
    fontSize: 12,
    color: '#9CA3AF',
  },
});
