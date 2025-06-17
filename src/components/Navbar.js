import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Easing,
  TextInput,
  TouchableOpacity,
  Image,
  Linking,
  Platform,
} from 'react-native';

const NavbarPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const heightAnim = useRef(new Animated.Value(0)).current;

  const toggleNavbar = () => {
    Animated.timing(heightAnim, {
      toValue: isOpen ? 0 : 130,
      duration: 300,
      easing: Easing.out(Easing.ease),
      useNativeDriver: false,
    }).start();
    setIsOpen(!isOpen);
  };

  const handleLinkPress = () => {
    if (Platform.OS === 'web') {
      window.location.href = '/';
    } else {
      Linking.openURL('/');
    }
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleNavbar}>
          <Image
            source={
              isOpen
                ? require('../assets/icons/close.png')
                : require('../assets/icons/hamburger.png')
            }
            style={styles.icon}
          />
        </TouchableOpacity>
        <Text style={styles.title}>My Navbar</Text>

        <TouchableOpacity onPress={handleLinkPress}>
          <Text style={styles.link}></Text>
        </TouchableOpacity>
      </View>

      {/* <Animated.View style={[styles.menu, { height: heightAnim }]}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          placeholderTextColor="#666"
        />
      </Animated.View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 16,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingBottom: 8,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    width: 28,
    height: 28,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  menu: {
    overflow: 'hidden',
    backgroundColor: '#f4f4f4',
    marginTop: 10,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingTop: 10,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 6,
    padding: 10,
    backgroundColor: '#fff',
  },
});

export default NavbarPage;