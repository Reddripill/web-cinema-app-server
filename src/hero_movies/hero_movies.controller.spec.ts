import { Test, TestingModule } from '@nestjs/testing';
import { HeroMoviesController } from './hero_movies.controller';
import { HeroMoviesService } from './hero_movies.service';

describe('HeroMoviesController', () => {
  let controller: HeroMoviesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HeroMoviesController],
      providers: [HeroMoviesService],
    }).compile();

    controller = module.get<HeroMoviesController>(HeroMoviesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
