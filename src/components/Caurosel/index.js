import React, { useRef } from 'react';
import Carousel from 'react-native-snap-carousel';

import {
  View,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  Image,
  Text,
} from 'react-native';

const imagesCreditCard = [
  {
    image: require('../../assets/creditCard1.png'),
  },
  {
    image: require('../../assets/creditCard2.png'),
  },
  {
    image: require('../../assets/creditCard3.png'),
  },
  {
    image: require('../../assets/creditCard4.png'),
  },
];

const { height, width } = Dimensions.get('window');

export const Caurosel = () => {
  const caurolselRef = useRef(null);

  const renderItem = ({ item }) => {
    return (
      <TouchableWithoutFeedback>
        <Image
          resizeMode="contain"
          source={item.image}
          style={{ width: width * 0.9, height: 240 }}
        />
      </TouchableWithoutFeedback>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        ref={caurolselRef}
        layout={'tinder'}
        data={imagesCreditCard}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={width - 10}
        swipeThreshold={100}
        layoutCardOffset={-16}
        inactiveSlideOpacity={0.4}
        containerCustomStyle={{
          overflow: 'visible',
          marginTop: 32,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
