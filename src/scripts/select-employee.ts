import { AppDataSource } from '../database/data-source';
import { Employee } from '../entities/Employee';

async function selectEmployee() {
  const employeeRepository = AppDataSource.getRepository(Employee);

  const employees = await employeeRepository.find();
  console.log(employees);
}

AppDataSource.initialize().then(async () => {
  console.log('-----BUSCANDO FUNCIONÁRIO-------');
  await selectEmployee();
});
