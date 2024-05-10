import { MigrationInterface, QueryRunner } from "typeorm";

export class Tags1715344387536 implements MigrationInterface {
    name = 'Tags1715344387536'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tag_entity" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, CONSTRAINT "PK_98efc66e2a1ce7fa1425e21e468" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "recipe_entity_tags_tag_entity" ("recipeEntityId" integer NOT NULL, "tagEntityId" integer NOT NULL, CONSTRAINT "PK_a386be9ad6fe43c4c921908ac64" PRIMARY KEY ("recipeEntityId", "tagEntityId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_dc69af728a1affdab46382d6d7" ON "recipe_entity_tags_tag_entity" ("recipeEntityId") `);
        await queryRunner.query(`CREATE INDEX "IDX_6e9023896577fe503a0700feca" ON "recipe_entity_tags_tag_entity" ("tagEntityId") `);
        await queryRunner.query(`ALTER TABLE "recipe_entity_tags_tag_entity" ADD CONSTRAINT "FK_dc69af728a1affdab46382d6d78" FOREIGN KEY ("recipeEntityId") REFERENCES "recipe_entity"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "recipe_entity_tags_tag_entity" ADD CONSTRAINT "FK_6e9023896577fe503a0700feca2" FOREIGN KEY ("tagEntityId") REFERENCES "tag_entity"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "recipe_entity_tags_tag_entity" DROP CONSTRAINT "FK_6e9023896577fe503a0700feca2"`);
        await queryRunner.query(`ALTER TABLE "recipe_entity_tags_tag_entity" DROP CONSTRAINT "FK_dc69af728a1affdab46382d6d78"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_6e9023896577fe503a0700feca"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_dc69af728a1affdab46382d6d7"`);
        await queryRunner.query(`DROP TABLE "recipe_entity_tags_tag_entity"`);
        await queryRunner.query(`DROP TABLE "tag_entity"`);
    }

}
