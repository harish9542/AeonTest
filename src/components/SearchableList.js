import React, { useState } from 'react';
import {
  View,
  FlatList,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const DATA = [
  { id: '1', title: 'Aeon' },
  { id: '2', title: 'Showcase' },
  { id: '3', title: 'Docs' },
  { id: '4', title: 'Blog' },
  { id: '5', title: 'Analytics' },
  { id: '6', title: 'Commerce' },
  { id: '7', title: 'Template' },
  { id: '8', title: 'Enterprise' },
];

const SearchableList = () => {
  const [searchText, setSearchText] = useState('');

  const filteredData = DATA.filter(item =>
    item.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemCard}>
      <Text style={styles.itemText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>🔍 Aeon List</Text>

      <TextInput
        placeholder="Search List..."
        style={styles.searchInput}
        value={searchText}
        onChangeText={setSearchText}
        placeholderTextColor="#999"
      />

      <FlatList
        data={filteredData}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        keyboardShouldPersistTaps="handled"
        ListEmptyComponent={
          <Text style={styles.noResults}>No items found 😕</Text>
        }
        contentContainerStyle={
          filteredData.length === 0 ? styles.centerContent : null
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    marginHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  heading: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 14,
    textAlign: 'center',
    color: '#333',
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 14,
    backgroundColor: '#f9f9f9',
    color: '#000',
  },
  itemCard: {
    backgroundColor: '#f2f6ff',
    padding: 14,
    borderRadius: 10,
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#3f51b5',
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
  noResults: {
    textAlign: 'center',
    fontSize: 16,
    color: '#999',
    paddingVertical: 20,
  },
  centerContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
});

export default SearchableList;
