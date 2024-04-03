import React, { useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import OrderMedication from '../components/OrderMedication';
import { submitOrder } from '../services/api'; // Assuming you have an API function to submit orders

const OrderScreen = () => {
  const [showOrderForm, setShowOrderForm] = useState(false);

  const handleOrderSubmission = async (orderData) => {
    try {
      await submitOrder(orderData); // Assuming submitOrder() submits order data to the server
      Alert.alert('Success', 'Your order has been submitted successfully.');
    } catch (error) {
      Alert.alert('Error', 'Failed to submit your order. Please try again later.');
      console.error('Error submitting order:', error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {showOrderForm ? (
        <OrderMedication onSubmitOrder={handleOrderSubmission} />
      ) : (
        <View>
          <Text>Click below to place an order for your medication:</Text>
          <Button title="Place Order" onPress={() => setShowOrderForm(true)} />
        </View>
      )}
    </View>
  );
};

export default OrderScreen;

