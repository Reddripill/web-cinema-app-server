import { Movie } from 'src/movies/entities/movie.entity';
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('hero_movies')
export class HeroMovie {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Movie)
  @JoinColumn({ name: 'movie_id' })
  movie: Movie;
}
