import express from 'express';
import authRoutes from './authRoutes';
import { updatePackageStatus } from './packageService';
import packageRoutes from './packageRoutes';

const app = express();

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/api', packageRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);

  updatePackageStatus();
});
