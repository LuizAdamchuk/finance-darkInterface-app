import React from 'react';

import { View, Text, StyleSheet, Image } from 'react-native';

import { Caurosel } from '../../components/Caurosel';
import { Suggestions } from '../../components/Suggestions';
import { ModalUp } from '../../components/ModalUp';

import imgAvatar from '../../assets/avatar.png';

export const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View>
            <Text style={styles.textTitle}>Bem-vindo,</Text>
            <Text style={styles.textNormal}>Luiz Adamchuk</Text>
          </View>
          <View>
            <Image source={imgAvatar} style={styles.img} />
            <View style={styles.imgPointNotification} />
          </View>
        </View>
      </View>
      <View>
        <Caurosel />
      </View>
      <View>
        <Text style={styles.textNormal}>Enviar dinheiro</Text>
        <View>
          <Suggestions />
        </View>
      </View>
      <View style={styles.footer}>
        <ModalUp />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 16,
  },
  header: {
    paddingTop: 48,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  img: {
    height: 64,
    width: 64,
    borderRadius: 32,
    borderWidth: 1,
    borderColor: '#fff',
  },
  imgPointNotification: {
    height: 12,
    width: 12,
    borderRadius: 6,
    borderColor: '#fff',
    borderWidth: 1,
    backgroundColor: '#ff9000',
    position: 'absolute',
    top: 0,
    right: 8,
  },
  footer: {
    bottom: 16,
    alignSelf: 'center',
    flexDirection: 'row',
    flex: 1,
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
  },
});
