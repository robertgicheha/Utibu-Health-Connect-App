// App.js

import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, Alert } from 'react-native';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [medicationHistory, setMedicationHistory] = useState([]);
  const [orderDetails, setOrderDetails] = useState('');

  // Mock medication history data
  const mockMedicationHistory = [
    { id: 1, name: 'Medication A', dosage: '10mg', quantity: 30 },
    { id: 2, name: 'Medication B', dosage: '20mg', quantity: 60 },
    // Add more mock data as needed
  ];

  // Function to handle login
  const handleLogin = () => {
    // Mock authentication logic, replace with actual authentication logic
    if (username === 'user' && password === 'password') {
      setLoggedIn(true);
    } else {
      Alert.alert('Invalid credentials');
    }
  };

  // Function to handle placing orders
  const placeOrder = () => {
    // Mock order placement logic, replace with actual order placement logic
    // Save order details, update database, etc.
    setOrderDetails('Order placed successfully!');
  };

  // Effect to load medication history on login
  useEffect(() => {
    if (loggedIn) {
      // Mock API call to fetch medication history, replace with actual API call
      setMedicationHistory(mockMedicationHistory);
    }
  }, [loggedIn]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {!loggedIn ? (
        <>
          <TextInput
            placeholder="Username"
            onChangeText={(text) => setUsername(text)}
            value={username}
            style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
          />
          <TextInput
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry
            style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
          />
          <Button title="Login" onPress={handleLogin} />
        </>
      ) : (
        <>
          <Text>Welcome, {username}!</Text>
          <Text>Medication History:</Text>
          {medicationHistory.map((medication) => (
            <Text key={medication.id}>
              {medication.name} - {medication.dosage}, Quantity: {medication.quantity}
            </Text>
          ))}
          <Button title="Place Order" onPress={placeOrder} />
          <Text>{orderDetails}</Text>
        </>
      )}
    </View>
  );
};

export default App;
