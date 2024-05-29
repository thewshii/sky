import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';

const SearchScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={{ flex: 5, justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        style={{ width: 250, height: 300 }}
                        source={require('C:/Users/conta/Desktop/$500/sky/assets/pexels-clarango-3866555.jpg')}
                        resizeMode="cover"
                    />
                </View>
            </View>
            <View style={styles.profileDetails}>
                <Avatar
                    rounded
                    size="medium"
                    source={require('C:/Users/conta/Desktop/$500/sky/assets/pexels-clarango-3866555.jpg')}
                    containerStyle={styles.avatar}
                />
                <View style={styles.profileText}>
                    <Text style={styles.name}>Charlotte Brown, 18</Text>
                    <Text style={styles.title}>Craft Artist</Text>
                </View>
                <Icon name="heart" type="material-community" color="#fff" />
            </View>
            
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    position: 'relative',
    height: 300,
  },
  headerImage: {
    width: '100%',
    height: '100%',
  },
  profileDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  avatar: {
    marginRight: 10,
  },
  profileText: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
  title: {
    fontSize: 14,
    color: '#FFF',
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

export default SearchScreen;
