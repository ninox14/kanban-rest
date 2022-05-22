import {MigrationInterface, QueryRunner} from "typeorm";

export class newTables1653239584339 implements MigrationInterface {
    name = 'newTables1653239584339'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "columns" DROP CONSTRAINT "columns_order_unique_constraint"`);
        await queryRunner.query(`ALTER TABLE "tasks" DROP CONSTRAINT "tasks_order_unique_constraint"`);
        await queryRunner.query(`ALTER TABLE "tasks" DROP COLUMN "done"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tasks" ADD "done" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "tasks" ADD CONSTRAINT "tasks_order_unique_constraint" UNIQUE ("id", "order")`);
        await queryRunner.query(`ALTER TABLE "columns" ADD CONSTRAINT "columns_order_unique_constraint" UNIQUE ("order", "boardId")`);
    }

}
