import { Pool } from 'pg';

const pool = new Pool({
  user: 'logistics_user',
  host: 'localhost',
  database: 'logistics',
  password: 'logistics_password',
  port: 5432, 
});

export { pool };
