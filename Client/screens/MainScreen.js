import React from 'react';
import { View, Text, Button } from 'react-native';

const MainScreen = ({ navigation }) => {
  return (
    <View>
    <Header title="My Screen" />
      <Text>Welcome to Utibu Health Connect!</Text>
      <Button
        title="Order Medication"
        onPress={() => navigation.navigate('Order')}
      />
      <Button
        title="Check Statement"
        onPress={() => navigation.navigate('Statement')}
      />
    </View>
  );
};

export default MainScreen;
