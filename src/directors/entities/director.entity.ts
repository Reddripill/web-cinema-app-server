import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('directors')
export class Director {
  @PrimaryGeneratedColumn()
  director_id: number;

  @Column({ type: 'character varying', length: 50 })
  fullname: string;
}
