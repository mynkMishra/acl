import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Role } from 'src/auth/entities/role.entity';
import { User } from 'src/auth/entities/user.entity';

export const ormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.PG_HOST || 'localhost',
  port: parseInt(process.env.PG_HOST, 10) || 5432,
  username: process.env.PG_USERNAME || 'postgres',
  password: process.env.PG_PASSWORD || 'password',
  database: process.env.PG_DB || 'acl',
  entities: [User, Role],
  synchronize: false,
};
