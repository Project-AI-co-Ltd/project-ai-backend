import * as path from 'path';
import { DataSource } from 'typeorm';
import { PgConfig } from './postgres.config';

const entityPath = path.join(
  __dirname,
  '../../../../../../libs/main/src/**/*.entity.{ts,js}',
);
const migrationPath = path.join(
  __dirname,
  '../../../../../../libs/main/src/database/migrations/*.{ts,js}',
);

export const AppDataSource = new DataSource({
  ...PgConfig,
  type: 'postgres',
  entities: [entityPath],
  migrations: [migrationPath],
});

