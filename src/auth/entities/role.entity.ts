import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Role {
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
  label: string;

  @Column({
    type: 'integer',
    nullable: false,
  })
  permissions: number;
}
