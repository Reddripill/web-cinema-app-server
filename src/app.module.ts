import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './db/db.module';
import { ConfigModule } from '@nestjs/config';
import { MoviesModule } from './movies/movies.module';
import { ActorsModule } from './actors/actors.module';
import { DirectorsModule } from './directors/directors.module';
import { GenresModule } from './genres/genres.module';
import { HeroMoviesModule } from './hero_movies/hero_movies.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DbModule,
    MoviesModule,
    GenresModule,
    DirectorsModule,
    ActorsModule,
    HeroMoviesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
