import {View, Text, StatusBar, Image, StyleSheet} from 'react-native';
import React from 'react';
import {Colors, Images, Fonts} from '../Constants';
import {Display} from '../Utils';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.DEFAULT_GREEN}
        translucent
      />
      <Image style={styles.image} source={Images.PLATE} resizeMode="contain" />
      <Text style={styles.titleText}>Swift Serve</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.DEFAULT_GREEN,
  },
  image: {
    height: Display.setHeight(30),
    width: Display.setWidth(60),
  },
  titleText: {
    color: Colors.DEFAULT_WHITE,
    fontSize: 34,
    fontFamily: Fonts.POPPINS_EXTRA_LIGHT,
  },
});

export default SplashScreen;
