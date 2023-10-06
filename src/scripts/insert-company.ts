import { AppDataSource } from '../database/data-source';
import { Company } from '../entities/Company';

async function createCompany() {
  const companyRepository = AppDataSource.getRepository(Company);

  const company = companyRepository.create();
  company.name = `Company-${(Math.random() * 2500).toFixed(0)}`;
  company.save();
}

AppDataSource.initialize().then(async () => {
  console.log('-----CRIANDO EMPRESA-------');
  Array(10)
    .fill(null)
    .forEach(async () => {
      await createCompany();
    });
});
