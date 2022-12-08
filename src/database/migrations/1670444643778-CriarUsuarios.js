import { Table } from "typeorm";

export class CriarUsuarios1635635770868 {

    async up(queryRunner) {
        await queryRunner.createTable(
            new Table({
                name: 'usuarios',
                columns: [
                    {
                        name: 'id',
                        type: 'string',
                        isPrimary: true,
                        isNullable: false
                    },
                    {
                        name: 'nome',
                        type: 'string',
                        isNullable: false
                    },
                    {
                        name: 'email',
                        type: 'string',
                        isNullable: true
                    }
                ]
            })
        );
    }

    async down(queryRunner) {
        await queryRunner.dropTable('usuarios')
    }

}