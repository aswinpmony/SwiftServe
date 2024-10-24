import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {Colors, Fonts, Images, General} from '../Constants';

import {WelcomeCard, Separator} from '../Components';
import {Display} from '../Utils';

const Pagination = () => {
  return (
    <View style={styles.pageContainer}>
      <View style={styles.page}></View>
      <View style={styles.page}></View>
      <View style={styles.page}></View>
    </View>
  );
};

const WelcomeScreen = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const welcomeListRef = useRef(null);

  const pageScroll = () => {
    console.log('wel', currentPage);
    if (welcomeListRef.current && currentPage < 2) {
      welcomeListRef.current.scrollToIndex({
        index: currentPage + 1,
        animated: true,
      });
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.DEFAULT_WHITE}
      />
      <Separator height={StatusBar.currentHeight} />
      <Separator height={Display.setHeight(7)} />
      <View style={styles.welcomeListContainer}>
        <FlatList
          ref={welcomeListRef}
          data={General.WELCOME_CONTENTS}
          keyExtractor={item => item.title}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          overScrollMode="never"
          renderItem={({item}) => <WelcomeCard {...item} />}
          onScroll={({nativeEvent}) => {
            const slide = Math.ceil(
              nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
            );
            if (slide !== currentPage) {
              setCurrentPage(slide);
            }
          }}
        />
      </View>
      <Separator height={Display.setHeight(7)} />
      <Pagination />
      <Separator height={Display.setHeight(7)} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => welcomeListRef.current.scrollToEnd()}
          style={{marginLeft: 10}}>
          <Text style={styles.buttonText}>SKIP</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={pageScroll} style={styles.button}>
          <Text style={styles.buttonText}>NEXT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.DEFAULT_WHITE,
  },
  welcomeListContainer: {
    height: Display.setHeight(60),
  },
  pageContainer: {
    flexDirection: 'row',
  },
  page: {
    height: 8,
    width: 15,
    backgroundColor: Colors.DEFAULT_GREEN,
    borderRadius: 32,
    marginHorizontal: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Display.setWidth(90),
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 16 * 1.4,
    fontFamily: Fonts.POPPINS_BOLD,
  },
  button: {
    backgroundColor: Colors.DEFAULT_GREY,
    paddingVertical: 20,
    paddingHorizontal: 11,
    borderRadius: 32,
  },
});

export default WelcomeScreen;
