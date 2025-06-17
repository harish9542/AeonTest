import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
} from 'react-native';
import Toast from 'react-native-toast-message';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [total, setTotal] = useState(null);

  const showToast = (message, type = 'error') => {
    Toast.show({
      type,
      text1: message,
      position: 'bottom',
      visibilityTime: 2000,
    });
  };

  const handleAdd = () => {
    Keyboard.dismiss();

    if (num1.trim() === '' || num2.trim() === '') {
      showToast('Both fields are required!');
      return;
    }

    if (isNaN(num1) || isNaN(num2)) {
      showToast('Only numbers are allowed!');
      return;
    }

    const sum = Number(num1) + Number(num2);
    setTotal(sum);
    showToast(`Total is ${sum}`, 'success');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🧮 Simple Calculator</Text>

      <TextInput
        placeholder="Enter first number"
        keyboardType="numeric"
        style={styles.input}
        value={num1}
        onChangeText={setNum1}
      />

      <TextInput
        placeholder="Enter second number"
        keyboardType="numeric"
        style={styles.input}
        value={num2}
        onChangeText={setNum2}
      />

      <TouchableOpacity style={styles.button} onPress={handleAdd}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>

      {total !== null && (
        <View style={styles.resultBox}>
          <Text style={styles.resultLabel}>Total:</Text>
          <Text style={styles.resultValue}>{total}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginVertical: 24,
    elevation: 4, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#222',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 14,
    fontSize: 16,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
  },
  button: {
    backgroundColor: '#3f51b5',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 4,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  resultBox: {
    marginTop: 24,
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#e0f7fa',
    alignItems: 'center',
  },
  resultLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00796b',
  },
  resultValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00796b',
    marginTop: 4,
  },
});

export default Calculator;
