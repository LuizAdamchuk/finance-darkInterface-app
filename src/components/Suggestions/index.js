import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

const imagesUsers = [
  {
    key: 1,
    image: require('../../assets/users/peep-43.png'),
    name: 'John Doe',
  },
  {
    key: 2,

    image: require('../../assets/users/peep-55.png'),
    name: 'John Doe',
  },
  {
    key: 3,

    image: require('../../assets/users/peep-59.png'),
    name: 'John Doe',
  },
  {
    key: 4,

    image: require('../../assets/users/peep-76.png'),
    name: 'John Doe',
  },
  {
    key: 5,

    image: require('../../assets/users/peep-91.png'),
    name: 'John Doe',
  },
];

export const Suggestions = () => {
  return (
    <ScrollView horizontal={true}>
      {imagesUsers.map(item => (
        <TouchableOpacity key={item.key} style={styles.sendMoneySuggestions}>
          <Image
            resizeMode="contain"
            style={styles.imgUser}
            source={item.image}
          />
          <Text style={styles.textNormal}> {item.name} </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  sendMoneySuggestions: {
    height: 120,
    width: 112,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222',
    marginVertical: 16,
    marginHorizontal: 8,
  },
  imgUser: {
    height: 72,
    width: 72,
    borderRadius: 36,
  },
  textNormal: {
    color: '#999',
    fontWeight: 'bold',
  },
});
