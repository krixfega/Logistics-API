import { pool } from './db';

// Update package status at regular intervals
const updatePackageStatus = () => {
  setInterval(async () => {
    try {
      // Query the database to update package statuses based on certain criteria
      await pool.query('UPDATE packages SET status = $1 WHERE status <> $2 AND timestamp < NOW() - INTERVAL \'2 minutes\'', ['Available for Pickup', 'Available for Pickup']);
    } catch (error) {
      console.error('Error updating package status:', error);
    }
  }, 120000); // Update every 2 minutes (120,000 milliseconds)
};

export { updatePackageStatus };
