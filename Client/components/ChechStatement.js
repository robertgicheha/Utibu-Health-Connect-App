import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, ActivityIndicator } from 'react-native';
import { getStatement } from '../services/api'; // Assuming you have an API function to fetch statement data

const CheckStatement = () => {
  const [statementData, setStatementData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch statement data when the component mounts
    fetchStatementData();
  }, []);

  const fetchStatementData = async () => {
    try {
      setLoading(true);
      const data = await getStatement(); // Assuming getStatement() returns statement data from the server
      setStatementData(data);
    } catch (error) {
      console.error('Error fetching statement:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderItem = ({ item }) => (
    <View style={{ padding: 10 }}>
      <Text>Medication: {item.medication}</Text>
      <Text>Quantity: {item.quantity}</Text>
      {/* Add more statement details here */}
    </View>
  );

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, padding: 10 }}>
      {statementData.length === 0 ? (
        <Text>No statement data available.</Text>
      ) : (
        <FlatList
          data={statementData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
      <Button title="Refresh" onPress={fetchStatementData} />
    </View>
  );
};

export default CheckStatement;
