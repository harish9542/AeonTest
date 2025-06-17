import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Calculator from './src/components/Calculator';
import Navbar from './src/components/Navbar';
import TwoSum from './src/components/TwoSum';
import SearchableList from './src/components/SearchableList';
import Toast from 'react-native-toast-message';

export default function App() {
  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <Navbar />
        <SearchableList />
        <Calculator />
        <TwoSum />
      </ScrollView>
      <Toast />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 50,
  },
});
