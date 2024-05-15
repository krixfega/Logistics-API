import { pool } from './db';

// Dummy user data
const usersData = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' },
];

// Dummy package data
const packagesData = [
  { name: 'Package 1', status: 'Pending', pickupDate: '2024-05-16' },
  { name: 'Package 2', status: 'In Transit', pickupDate: '2024-05-17' },
];

// Function to seed users
const seedUsers = async () => {
  for (const userData of usersData) {
    await pool.query('INSERT INTO users (username, password) VALUES ($1, $2)', [userData.username, userData.password]);
  }
};

// Function to seed packages
const seedPackages = async () => {
  for (const packageData of packagesData) {
    await pool.query('INSERT INTO packages (name, status, pickup_date) VALUES ($1, $2, $3)', [packageData.name, packageData.status, packageData.pickupDate]);
  }
};

// Seed the database
const seedDatabase = async () => {
  try {
    await seedUsers();
    await seedPackages();
    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    // Close the database connection
    pool.end();
  }
};

seedDatabase();
