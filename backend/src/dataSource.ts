import { DataSourceOptions, DataSource } from 'typeorm';

import { ENV } from './config';
const { DATABASE_NAME, DATABASE_USER, DATABASE_PASSWORD, DATABASE_HOST, ENVIRONMENT, NODE_ENV } =
  ENV;

const ormconfig: DataSourceOptions = {
  type: 'postgres',
  host: DATABASE_HOST,
  port: 5432,
  username: DATABASE_USER ?? 'postgres',
  password: DATABASE_PASSWORD ?? 'postgres',
  database: DATABASE_NAME ?? 'db',
  synchronize: false,
  migrationsRun: true,
  logging: ENVIRONMENT === 'local' ?? false,
  entities: [`src/**/*entity.${NODE_ENV === 'production' ? 'js' : 'ts'}`],
  migrations: [`src/migrations/*.${NODE_ENV === 'production' ? 'js' : 'ts'}`],
};

// Create a new DataSource instance with the ormconfig.
const dataSource = new DataSource(ormconfig);

export default dataSource;
