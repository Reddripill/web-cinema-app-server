import { Test, TestingModule } from '@nestjs/testing';
import { HeroMoviesService } from './hero_movies.service';

describe('HeroMoviesService', () => {
  let service: HeroMoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HeroMoviesService],
    }).compile();

    service = module.get<HeroMoviesService>(HeroMoviesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
