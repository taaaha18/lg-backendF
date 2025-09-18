import { DataSource } from 'typeorm';
import { User } from './users/users.entity';
import { Job } from './jobs/jobs.entity';
import { Interview } from './interviews/interviews.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL, 
  entities: [User, Job, Interview],
  migrations: ['./migrations/*{.ts,.js}'],
  synchronize: false,
  ssl: {
    rejectUnauthorized: false,
  },
});
