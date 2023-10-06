import { AppDataSource } from '../database/data-source';
import { Company } from '../entities/Company';

async function selectCompany() {
  const companyRepository = AppDataSource.getRepository(Company);

  const companies = await companyRepository.find();
  console.log(companies);
}

AppDataSource.initialize().then(() => {
  console.log('-----BUSCANDO EMPRESA-------');
  selectCompany();
});
