import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const dataTransactions = [
  {
    key: 1,
    image: require('../../assets/users/peep-43.png'),
    name: 'John Doe',
    date: '08/04/2020',
    value: 750,
    type: 'receive',
  },
  {
    key: 2,
    image: require('../../assets/users/peep-55.png'),
    name: 'John Doe',
    date: '21/02/2020',
    value: 230,
    type: 'dispend',
  },
  {
    key: 3,
    image: require('../../assets/users/peep-59.png'),
    name: 'John Doe',
    date: '07/02/2020',
    value: 30,
    type: 'dispend',
  },
  {
    key: 4,

    image: require('../../assets/users/peep-76.png'),
    name: 'John Doe',
    date: '13/11/2019',
    value: 50,
    type: 'receive',
  },
  {
    key: 5,
    image: require('../../assets/users/peep-91.png'),
    name: 'John Doe',
    date: '02/09/2019',
    value: 15,
    type: 'receive',
  },
];

export const Transactions = () => {
  return (
    <View style={styles.container}>
      {dataTransactions.map(transaction => (
        <View key={transaction.key} style={styles.content}>
          <View style={styles.contentLeft}>
            <Image
              source={transaction.image}
              resizeMode="contain"
              style={styles.img}
            />
            <View style={{ justifyContent: 'center' }}>
              <Text style={styles.textNormal}>{transaction.name}</Text>
              <Text style={styles.textDescription}> {transaction.date} </Text>
            </View>
          </View>
          <View style={styles.contentRight}>
            <Text style={styles.textNormal}>R$ {transaction.value},00</Text>
            <AntDesign
              name="swap"
              size={24}
              color={transaction.type === 'receive' ? 'green' : 'red'}
            />
          </View>
        </View>
      ))}
      <TouchableOpacity style={{ alignSelf: 'center', marginTop: 8 }}>
        <Text style={styles.textNormal}>Veja mais</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ alignSelf: 'center', marginTop: 8 }}>
        <AntDesign name="down" size={24} color="#666" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    borderWidth: 1,
    borderColor: '#666',
    borderRadius: 16,
    marginVertical: 8,
    padding: 2,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  img: {
    height: 64,
    width: 64,
    borderRadius: 32,
  },
  contentLeft: {
    flexDirection: 'row',
  },
  contentRight: {
    marginRight: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textTitle: {
    fontSize: 24,
    color: '#999',
    fontWeight: 'bold',
    paddingVertical: 8,
  },
  textNormal: {
    fontSize: 16,
    color: '#777',
  },
  textDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});
