import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryColumn({
    generatedIdentity: 'BY DEFAULT',
    type: 'uuid',
    unique: true,
    nullable: false,
  })
  id: string;

  @Column({
    type: 'varchar',
    unique: true,
    nullable: false,
  })
  username: string;

  @Column({
    type: 'varchar',
    unique: true,
    nullable: false,
  })
  password: string;

  @Column({
    type: 'varchar',
    unique: true,
    nullable: false,
    name: 'role_id',
  })
  roleId: string;
}
