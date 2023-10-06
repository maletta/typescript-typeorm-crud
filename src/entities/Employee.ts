import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';

import { Company } from './Company';

@Entity({ name: 'employees' })
export class Employee extends BaseEntity {
  @PrimaryColumn('varchar', { length: 50 })
  name: string;

  @Column('varchar', {
    length: 50,
  })
  id_company: string;

  @ManyToOne((type) => Company, (company) => company.employees)
  @JoinColumn({ name: 'id_company' })
  company: Company;
}
