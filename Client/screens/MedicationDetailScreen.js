import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { getMedicationDetails } from '../services/api'; // Assuming you have an API function to fetch medication details

const MedicationDetailScreen = ({ route }) => {
  const [medicationDetails, setMedicationDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMedicationDetails();
  }, []);

  const fetchMedicationDetails = async () => {
    try {
      setLoading(true);
      const { medicationId } = route.params;
      const data = await getMedicationDetails(medicationId); // Assuming getMedicationDetails() returns medication details from the server
      setMedicationDetails(data);
    } catch (error) {
      console.error('Error fetching medication details:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {medicationDetails ? (
        <>
          <Text style={styles.title}>{medicationDetails.name}</Text>
          <Text>{`Category: ${medicationDetails.category}`}</Text>
          <Text>{`Price: $${medicationDetails.price}`}</Text>
          {/* Add more details as needed */}
        </>
      ) : (
        <Text>No medication details available.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MedicationDetailScreen;
