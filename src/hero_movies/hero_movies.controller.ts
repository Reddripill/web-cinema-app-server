import { Controller } from '@nestjs/common';
import { HeroMoviesService } from './hero_movies.service';

@Controller('hero-movies')
export class HeroMoviesController {
  constructor(private readonly heroMoviesService: HeroMoviesService) {}
}
