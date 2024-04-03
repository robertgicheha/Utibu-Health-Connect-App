import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const OrderMedication = ({ onSubmitOrder }) => {
  const [medication, setMedication] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmitOrder = () => {
    // Validate inputs
    onSubmitOrder({ medication, quantity });
  };

  return (
    <View>
      <TextInput
        placeholder="Medication"
        value={medication}
        onChangeText={setMedication}
      />
      <TextInput
        placeholder="Quantity"
        value={quantity}
        onChangeText={setQuantity}
        keyboardType="numeric"
      />
      <Button title="Submit Order" onPress={handleSubmitOrder} />
    </View>
  );
};

export default OrderMedication;
