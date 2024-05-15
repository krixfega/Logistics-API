import express from 'express';
import { pool } from './db';
import { Package } from './package';

const router = express.Router();

// Create a new package
router.post('/packages', async (req, res) => {
  const { name, status, pickupDate } = req.body;

  try {
    const timestamp = new Date();
    const newPackage: Package = { name, status, pickupDate, timestamp };

    const result = await pool.query(
      'INSERT INTO packages (name, status, pickup_date, timestamp) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, status, pickupDate, timestamp]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error creating package:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get all packages
router.get('/packages', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM packages');
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error getting packages:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Track a package
router.get('/packages/:id/track', async (req, res) => {
    const { id } = req.params;
  
    try {
      // Query the database to fetch the latest status of the package
      const result = await pool.query('SELECT * FROM packages WHERE id = $1', [id]);
  
      if (result.rows.length === 0) {
        return res.status(404).json({ message: 'Package not found' });
      }
  
      const packageData = result.rows[0];
      res.status(200).json(packageData);
    } catch (error) {
      console.error('Error tracking package:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  export default router;
