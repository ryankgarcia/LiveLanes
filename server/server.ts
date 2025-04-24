/* eslint-disable @typescript-eslint/no-unused-vars -- Remove when used */
import 'dotenv/config';
import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib/index.js';

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();

// Create paths for static directories
const reactStaticDir = new URL('../client/dist', import.meta.url).pathname;
const uploadsStaticDir = new URL('public', import.meta.url).pathname;

app.use(express.static(reactStaticDir));
// Static directory for file uploads server/public/
app.use(express.static(uploadsStaticDir));
app.use(express.json());

// start here for the server. at some point this is going to need to be async
// for now it is good to test the endpoint
// in CRUD - this is READ data going to need to add middleware before async (req,res,next)
app.get('/api/vehicles/:vehicleId', (req, res, next) => {
  try {
    const { vehicleId } = req.params;
    if (!vehicleId) {
      throw new ClientError(400, 'must have a valid vehicleId');
    }
    const sql = `
    select * from vehicles
    where vehicleId = $1
    `;
    // const results = results.rows(sql, [vehicleId]);
    // res.json(results);
  } catch (err) {
    next(err);
  }
  // res.json({ message: 'Hello, World!' });
});

// this endpoint will gt all of them
app.get('/api/vehicles', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

/*
 * Handles paths that aren't handled by any other route handler.
 * It responds with `index.html` to support page refreshes with React Router.
 * This must be the _last_ route, just before errorMiddleware.
 */
app.get('*', (req, res) => res.sendFile(`${reactStaticDir}/index.html`));

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log('Listening on port', process.env.PORT);
});
