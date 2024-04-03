const { sql } = require('../Config/db');

// Controller function for ordering medication
const orderMedication = async (req, res) => {
  const { medicationId, quantity } = req.body;
  try {
    // Check medication availability
    const medication = await sql.query`SELECT * FROM Medications WHERE id = ${medicationId} AND quantity >= ${quantity}`;
    if (medication.recordset.length === 1) {
      // Medication available, so place order
      // Update medication quantity in the database
      await sql.query`UPDATE Medications SET quantity = quantity - ${quantity} WHERE id = ${medicationId}`;
      res.status(201).json({ message: 'Medication ordered successfully' });
    } else {
      // Medication not available
      res.status(400).json({ error: 'Medication not available or quantity insufficient' });
    }
  } catch (error) {
    console.error('Error ordering medication:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  orderMedication,
};


