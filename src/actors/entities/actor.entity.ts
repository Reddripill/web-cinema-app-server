import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('actors')
export class Actor {
  @PrimaryGeneratedColumn()
  actor_id: number;

  @Column({ type: 'character varying', length: 50 })
  fullname: string;
}
