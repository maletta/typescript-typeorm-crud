import {
  BaseEntity,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryColumn,
  VirtualColumn,
} from 'typeorm';

import { Employee } from './Employee';

@Entity({ name: 'companies' })
export class Company extends BaseEntity {
  @PrimaryColumn('varchar', { length: 50 })
  name: string;

  @VirtualColumn({
    query: (alias) =>
      `SELECT COUNT("name") FROM "employees" WHERE "id_company" = ${alias}.name`,
  })
  totalEmployeesCount: number;

  @OneToMany((type) => Employee, (employee) => employee.company)
  employees: Employee[];

  @JoinColumn({ name: 'id_company' })
  company: Company;
}
