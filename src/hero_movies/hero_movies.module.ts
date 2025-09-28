import { Module } from '@nestjs/common';
import { HeroMoviesService } from './hero_movies.service';
import { HeroMoviesController } from './hero_movies.controller';

@Module({
  controllers: [HeroMoviesController],
  providers: [HeroMoviesService],
})
export class HeroMoviesModule {}
