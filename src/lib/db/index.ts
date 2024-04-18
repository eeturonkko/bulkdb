/* eslint-disable @typescript-eslint/no-unused-vars */
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { env } from '$env/dynamic/private';
import * as schema from './schema';

// for query purposes
const queryClient = postgres(env.DATABASE_URL);
export const db = drizzle(queryClient, { schema });
