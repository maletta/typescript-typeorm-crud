import { AppDataSource } from '../database/data-source';
import { Company } from '../entities/Company';
import { Employee } from '../entities/Employee';

async function createEmployee() {
  const companyRepository = AppDataSource.getRepository(Company);
  const employeeRepository = AppDataSource.getRepository(Employee);

  const companyArray = await companyRepository.find();
  const employeeRandomIndex = Math.ceil(Math.random() * companyArray.length);
  const employeeIndex =
    employeeRandomIndex >= companyArray.length
      ? employeeRandomIndex - 1
      : employeeRandomIndex;

  const newEmployee = employeeRepository.create();
  newEmployee.company = companyArray[Number(employeeIndex)];
  newEmployee.name = `Employee-${(Math.random() * 2500).toFixed(0)}`;
  newEmployee.save();
}

AppDataSource.initialize().then(async () => {
  console.log('-----CRIANDO FUNCIONÁRIO-------');
  Array(100)
    .fill(null)
    .forEach(async () => {
      await createEmployee();
    });
});
