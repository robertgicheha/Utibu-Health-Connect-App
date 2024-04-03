// medicationService.js

const BASE_URL = 'http://your-api-url.com'; // Replace with your actual API base URL

export const getMedicationDetails = async (medicationId) => {
  try {
    const response = await fetch(`${BASE_URL}/medications/${medicationId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch medication details');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching medication details:', error);
    throw error;
  }
};
