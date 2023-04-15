// base.entity.ts
import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import {
  PrimaryGeneratedColumn,
  VersionColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  Column,
} from 'typeorm';

export abstract class AppEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1 })
  id: number;

  /*
   * Create, Update and Delete Date Columns
   */

  @Column({ nullable: true })
  @Exclude()
  public created_by: string;

  @Column({ type: 'int', nullable: true })
  @Exclude()
  public created_by_id: number;

  @Column({ nullable: true })
  @Exclude()
  public updated_by: string;

  @Column({ type: 'int', nullable: true })
  @Exclude()
  public updated_by_id: number;

  @Column({ nullable: true })
  @Exclude()
  public deleted_by: string;

  @Column({ type: 'int', nullable: true })
  @Exclude()
  public deleted_by_id: number;

  @CreateDateColumn({type: 'timestamptz'})
  @ApiProperty({ example: '2022-07-26T04:54:12.878Z' })
  created_at: Date;

  @UpdateDateColumn({type: 'timestamptz'})
  @ApiProperty({ example: '2022-07-26T04:54:12.878Z' })
  updated_at: Date;

  @DeleteDateColumn({type: 'timestamptz'})
  public deleted_at: Date;

  /*Version Column*/

  @VersionColumn()
  @Exclude()
  public version: number;
}
