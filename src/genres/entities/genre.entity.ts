import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('genres')
export class Genre {
  @PrimaryGeneratedColumn()
  genre_id: number;

  @Column({ length: 25, type: 'character varying' })
  title: string;
}
