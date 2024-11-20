import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialSchema1732084946165 implements MigrationInterface {
    name = 'InitialSchema1732084946165'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "inbound_orders" ("id" SERIAL NOT NULL, "supplierName" character varying NOT NULL, "status" character varying NOT NULL DEFAULT 'pending', CONSTRAINT "PK_0ef46b4520ef90605aa24361e4e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "outbound_orders" ("id" SERIAL NOT NULL, "customerName" character varying NOT NULL, "status" character varying NOT NULL DEFAULT 'pending', CONSTRAINT "PK_993dc15b5f4f83e6c4e2e2e6878" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "order_lines" ("id" SERIAL NOT NULL, "quantity" integer NOT NULL, "price" numeric(10,2) NOT NULL, "productId" integer, "inboundOrderId" integer, "outboundOrderId" integer, CONSTRAINT "PK_627dcd7f1d707de4df241b2da6b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "products" ("id" SERIAL NOT NULL, "sku" character varying NOT NULL, "name" character varying NOT NULL, "price" numeric(10,2) NOT NULL, "quantity" integer NOT NULL DEFAULT '0', CONSTRAINT "UQ_c44ac33a05b144dd0d9ddcf9327" UNIQUE ("sku"), CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "order_lines" ADD CONSTRAINT "FK_9460dcd3abb5dda0ddbd372d161" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order_lines" ADD CONSTRAINT "FK_6e05f1c9b75cba8254df817977e" FOREIGN KEY ("inboundOrderId") REFERENCES "inbound_orders"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order_lines" ADD CONSTRAINT "FK_45a1b194a905991b5dba357458c" FOREIGN KEY ("outboundOrderId") REFERENCES "outbound_orders"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order_lines" DROP CONSTRAINT "FK_45a1b194a905991b5dba357458c"`);
        await queryRunner.query(`ALTER TABLE "order_lines" DROP CONSTRAINT "FK_6e05f1c9b75cba8254df817977e"`);
        await queryRunner.query(`ALTER TABLE "order_lines" DROP CONSTRAINT "FK_9460dcd3abb5dda0ddbd372d161"`);
        await queryRunner.query(`DROP TABLE "products"`);
        await queryRunner.query(`DROP TABLE "order_lines"`);
        await queryRunner.query(`DROP TABLE "outbound_orders"`);
        await queryRunner.query(`DROP TABLE "inbound_orders"`);
    }

}
