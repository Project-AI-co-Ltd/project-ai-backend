import { AppEntity } from '@app/backend-libs/common';
import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column } from 'typeorm';

@Entity()
export class Users extends AppEntity {
  @Column({
    type: 'varchar',
    length: 250,
  })
  @ApiProperty({ example: 'Riki Ahmad' })
  name: string;

  @Column({
    type: 'varchar',
    length: 250,
  })
  @ApiProperty({ example: 'Biofarma' })
  company_name: string;

  @Column({
    type: 'varchar',
    length: 15,
    nullable: true,
  })
  @ApiProperty({ example: '0878185502121123' })
  phone: string;

  @Column({
    type: 'varchar',
    length: 250,
    unique: true,
  })
  @ApiProperty({ example: 'ahmadriki9512@gmail.com' })
  email: string;

  @Column({
    type: 'varchar',
    length: 250,
    unique: true,
  })
  @ApiProperty({ example: 'ahmadriki9512' })
  username: string;

  @Column({
    type: 'varchar',
    length: 250,
    nullable: true,
  })
  @ApiProperty({ example: 'Sample Password' })
  password: string;
}
