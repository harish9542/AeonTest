import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
} from 'react-native';
import Toast from 'react-native-toast-message';

const TwoSum = () => {
  const [inputArray, setInputArray] = useState('');
  const [target, setTarget] = useState('');
  const [result, setResult] = useState(null);

  const showToast = (message, type = 'error') => {
    Toast.show({
      type,
      text1: message,
      position: 'bottom',
      visibilityTime: 2000,
    });
  };

  const handleCalculate = () => {
    Keyboard.dismiss();

    if (inputArray.trim() === '' || target.trim() === '') {
      showToast('Both fields are required!');
      return;
    }

    const numbers = inputArray
      .split(',')
      .map(item => item.trim())
      .filter(item => item !== '' && !isNaN(item))
      .map(Number);

    if (numbers.length < 2) {
      showToast('Enter at least two numbers in the array');
      return;
    }

    const parsedTarget = Number(target);
    if (isNaN(parsedTarget)) {
      showToast('Target must be a number');
      return;
    }

    const res = twoSum(numbers, parsedTarget);
    if (res.length === 0) {
      showToast('No valid pair found');
    }
    setResult(res);
  };

  const twoSum = (numbers, target) => {
    let left = 0,
      right = numbers.length - 1;
    while (left < right) {
      const sum = numbers[left] + numbers[right];
      if (sum === target) return [left + 1, right + 1];
      else if (sum < target) left++;
      else right--;
    }
    return [];
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎯 Two Sum II</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter sorted array (e.g. 2, 4, 6)"
        value={inputArray}
        onChangeText={setInputArray}
        placeholderTextColor="#999"
      />
      <TextInput
        style={styles.input}
        placeholder="Target"
        keyboardType="numeric"
        value={target}
        onChangeText={setTarget}
        placeholderTextColor="#999"
      />

      <TouchableOpacity style={styles.button} onPress={handleCalculate}>
        <Text style={styles.buttonText}>Find Indices</Text>
      </TouchableOpacity>

      {result && result.length > 0 && (
        <View style={styles.resultBox}>
          <Text style={styles.resultLabel}>Indices:</Text>
          <Text style={styles.resultValue}>[{result.join(', ')}]</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginVertical: 24,
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#f9f9f9',
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 12,
    color: '#000',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 6,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  resultBox: {
    marginTop: 20,
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#e8f5e9',
    alignItems: 'center',
  },
  resultLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2e7d32',
  },
  resultValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginTop: 4,
  },
});

export default TwoSum;
