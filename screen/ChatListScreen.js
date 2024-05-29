import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';

const chatData = [
  { id: '1', name: 'Olivia Williams', message: 'Hey, nice to meet you.', time: '4:20', avatar: 'https://your-image-url.com/path-to-avatar1.jpg' },
  { id: '2', name: 'Jack Welster', message: 'Okay, I\'ll be there', time: '3:30', avatar: 'https://your-image-url.com/path-to-avatar2.jpg' },
  { id: '3', name: 'Will Maine', message: 'See you there.', time: '3:45', avatar: 'https://your-image-url.com/path-to-avatar3.jpg' },
];

const ChatListScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Chat</Text>
        <Icon name="search" type="material" color="#fff" />
      </View>
      <FlatList
        data={chatData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.chatItem}>
            <Avatar
              rounded
              size="medium"
              source={{ uri: item.avatar }}
              containerStyle={styles.avatar}
            />
            <View style={styles.chatText}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.message}>{item.message}</Text>
            </View>
            <Text style={styles.time}>{item.time}</Text>
          </View>
        )}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F00',
    padding: 15,
  },
  headerTitle: {
    fontSize: 20,
    color: '#FFF',
    fontWeight: 'bold',
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#EEE',
  },
  avatar: {
    marginRight: 10,
  },
  chatText: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  message: {
    fontSize: 14,
    color: '#888',
  },
  time: {
    fontSize: 12,
    color: '#888',
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#EEE',
    backgroundColor: '#FFF',
  },
});

export default ChatListScreen;
