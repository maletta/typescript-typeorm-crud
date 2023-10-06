import { DataSource } from 'typeorm';

import { Company } from '../entities/Company';
import { Employee } from '../entities/Employee';

// Novo modo de iniciar uma conexão com typeorm pois "createConnection" está deprecated
export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'docker',
  password: 'password',
  database: 'ignite-04',
  synchronize: true, // atualiza a base de dados conforme as migrations ? pode ser perigoso
  logging: true,
  entities: [Employee, Company],
  subscribers: [],
  migrations: ['./src/database/migrations/*.ts'],
});

AppDataSource.initialize()
  .then(() => {
    console.log('Banco de dados iniciado com sucesso');
  })
  .catch((error) => {
    console.log('Erro ao iniciar o banco de dados');
    console.log(error);
  });
