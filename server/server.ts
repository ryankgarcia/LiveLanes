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

// this endpoint will get read all of the vehicles,
// later we will get an api call from the client to this endpoint
app.get('/api/vehicles', async (req, res, next) => {
  try {
    const sql = `
    select * from "vehicles"
    `;
    const result = await db.query(sql);
    const vehicles = result.rows;
    res.json(vehicles);
  } catch (err) {
    next(err);
  }
});

// in CRUD - this is READ data
app.get('/api/vehicles/:vehicleId', async (req, res, next) => {
  try {
    const { vehicleId } = req.params;
    if (!Number(vehicleId)) {
      throw new ClientError(400, 'vehicleId must be a positive integer');
    }
    const sql = `
    select * from "vehicles"
    where "vehicleId" = $1
    `;
    const result = await db.query(sql, [vehicleId]);
    const vehicle = result.rows[0];
    if (!vehicle) {
      throw new ClientError(404, `vehicle ${vehicleId} does not exist`);
    }
    res.json(vehicle);
  } catch (err) {
    next(err);
  }
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
