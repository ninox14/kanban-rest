import dotenv from 'dotenv';
import path from 'path';
import { ConnectionOptions } from 'typeorm';

dotenv.config({
  path: path.join(__dirname, '.env'),
});

export default {
  // type: 'postgres',
  // host: 'db',
  // port: parseInt(process.env.POSTGRES_PORT as string, 10) as number,
  // username: process.env.POSTGRES_USER as string,
  // password: process.env.POSTGRES_PASSWORD as string,
  // database: process.env.POSTGRES_DB as string,
  type: 'postgres',
  cache: false,
  url: process.env.DATABASE_URL as string,
  // url: 'postgres://npqesdfgcyfqts:e6a39ac1627d764cac34de7d8e76efc681ffcdbc2a21c121f7e0d6bab50fbcfb@ec2-63-32-248-14.eu-west-1.compute.amazonaws.com:5432/d8dr3l1rfiupob',
  synchronize: false,
  logging: false,
  ssl: {
    rejectUnauthorized: false,
  },
  entities: ['src/resources/**/**.entity{.ts,.js}'],
  migrations: ['./migrations/*.ts'],
} as ConnectionOptions;
