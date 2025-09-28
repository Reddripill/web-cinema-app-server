import { Actor } from 'src/actors/entities/actor.entity';
import { Director } from 'src/directors/entities/director.entity';
import { Genre } from 'src/genres/entities/genre.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum MovieTypeEnum {
  FILM = 'film',
  SERIES = 'series',
  ANIME = 'anime',
}

@Entity('movies')
export class Movie {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  movie_id: number;

  @Column({ type: 'text' })
  title: string;

  @Column({ nullable: true })
  alt_title?: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'smallint' })
  grade: number;

  @Column({ type: 'bytea' })
  label: Buffer;

  @Column({ nullable: true })
  duration?: number;

  @Column({ type: 'bytea' })
  poster: Buffer;

  @Column({
    type: 'enum',
    enum: MovieTypeEnum,
  })
  type: MovieTypeEnum;

  @Column({ type: 'smallint', array: true })
  release_year: number[];

  @Column({ type: 'bytea' })
  trailer: Buffer;

  @Column({ type: 'text', array: true })
  country: string[];

  @ManyToMany(() => Director)
  @JoinTable({
    name: 'movie_director',
    joinColumn: { name: 'movie_id', referencedColumnName: 'movie_id' },
    inverseJoinColumn: {
      name: 'director_id',
      referencedColumnName: 'director_id',
    },
  })
  directors: Director[];

  @ManyToMany(() => Genre)
  @JoinTable({
    name: 'movie_genre',
    joinColumn: { name: 'movie_id', referencedColumnName: 'movie_id' },
    inverseJoinColumn: {
      name: 'genre_id',
      referencedColumnName: 'genre_id',
    },
  })
  genres: Genre[];

  @ManyToMany(() => Actor)
  @JoinTable({
    name: 'movie_cast',
    joinColumn: { name: 'movie_id', referencedColumnName: 'movie_id' },
    inverseJoinColumn: {
      name: 'actor_id',
      referencedColumnName: 'actor_id',
    },
  })
  actors: Actor[];
}
