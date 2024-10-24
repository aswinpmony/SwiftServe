import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {Display} from '../Utils';
import {Fonts, Colors, Images} from '../Constants';
import Separator from './Separator';

const WelcomeCard = ({title, content, image}) => {
  return (
    <View style={styles.container}>
      <Image
        source={Images[image]}
        resizeMethod="contain"
        style={styles.image}
      />
      <Separator height={Display.setHeight(2)} />
      <Text style={styles.titleText}>{title}</Text>
      <Separator height={Display.setHeight(2)} />
      <Text style={styles.contentText}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: Display.setWidth(100),
  },
  image: {
    height: Display.setHeight(30),
    width: Display.setWidth(80),
  },
  titleText: {
    fontSize: 22,
    fontFamily: Fonts.POPPINS_BOLD,
  },
  contentText: {
    fontSize: 18,
    fontFamily: Fonts.POPPINS_LIGHT,
    textAlign: 'center',
    marginHorizontal: 20,
  },
});

export default WelcomeCard;
