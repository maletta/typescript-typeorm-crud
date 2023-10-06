import { MigrationInterface, QueryRunner } from "typeorm";

export class Generate1696627430042 implements MigrationInterface {
    name = 'Generate1696627430042'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "employees" ("name" character varying(50) NOT NULL, "id_company" character varying(50) NOT NULL, CONSTRAINT "PK_ede58bf474d1eaea7ce27383005" PRIMARY KEY ("name"))`);
        await queryRunner.query(`CREATE TABLE "companies" ("name" character varying(50) NOT NULL, CONSTRAINT "PK_3dacbb3eb4f095e29372ff8e131" PRIMARY KEY ("name"))`);
        await queryRunner.query(`ALTER TABLE "employees" ADD CONSTRAINT "FK_8ba6a0337b0d4dbeb7b719cf666" FOREIGN KEY ("id_company") REFERENCES "companies"("name") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employees" DROP CONSTRAINT "FK_8ba6a0337b0d4dbeb7b719cf666"`);
        await queryRunner.query(`DROP TABLE "companies"`);
        await queryRunner.query(`DROP TABLE "employees"`);
    }

}
