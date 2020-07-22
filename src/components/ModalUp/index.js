import React, { useRef, useState } from 'react';
import SlidingUpPanel from 'rn-sliding-up-panel';

import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { Transactions } from '../Transactions';

const { height, width } = Dimensions.get('window');

export const ModalUp = () => {
  const modalRef = useRef(null);
  const [dragRange, setDragRange] = useState({
    top: height - 136,
    bottom: 32,
  });

  return (
    <View style={styles.container}>
      <Feather name="chevron-up" size={32} color="#fff" />
      <SlidingUpPanel
        draggableRange={dragRange}
        ref={modalRef}
        snappingPoints={[360]}
        friction={0.9}
      >
        <View style={styles.containerInside}>
          <View style={{ alignSelf: 'center', marginBottom: 16 }}>
            <Text style={styles.textNormal}>Transações recentes</Text>
          </View>
          <Transactions />
        </View>
      </SlidingUpPanel>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 16,
    marginTop: 56,
  },
  containerInside: {
    flex: 1,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#222',
    justifyContent: 'flex-start',
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
