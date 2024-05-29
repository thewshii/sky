import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';

const UserProfile = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.headerImage}
          source={require('C:/Users/conta/Desktop/$500/sky/assets/pexels-clarango-3866555.jpg')}
        />
        <Icon
          name="edit"
          type="material"
          color="#fff"
          containerStyle={styles.editIcon}
        />
      </View>
      <View style={styles.profileInfo}>
        <Avatar
          rounded
          size="large"
          source={require('C:/Users/conta/Desktop/$500/sky/assets/pexels-clarango-3866555.jpg')}
          containerStyle={styles.avatar}
        />
        <Text style={styles.name}>Camille Lauren</Text>
        <Text style={styles.title}>Law student</Text>
        <Text style={styles.subtitle}>Hobbies</Text>
        <Text style={styles.hobbies}>Drawing</Text>
        <Text style={styles.subtitle}>Interested In</Text>
        <Text style={styles.interests}>Friends</Text>
      </View>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    position: 'relative',
    height: 200,
  },
  headerImage: {
    width: '100%',
    height: '100%',
  },
  editIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  profileInfo: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  avatar: {
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 16,
    color: '#888',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  hobbies: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  interests: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#EEE',
  },
});

export default UserProfile;
