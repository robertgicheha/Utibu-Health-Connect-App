import React from 'react';
import { View, Text } from 'react-native';
import CheckStatement from '../components/CheckStatement';

const StatementScreen = () => {
  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>Statement Details:</Text>
      <CheckStatement />
    </View>
  );
};

export default StatementScreen;
