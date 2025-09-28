import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
/* import { Movie } from 'src/movies/entities/movie.entity';
import { User } from 'src/users/entities/user.entity'; */

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('POSTGRES_HOST'),
        port: configService.get('POSTGRES_PORT'),
        username: configService.get('POSTGRES_USERNAME'),
        password: configService.get('POSTGRES_PASSWORD'),
        database: configService.get('POSTGRES_DB'),
        synchronize: true, // only in dev
        autoLoadEntities: true, // only in dev
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DbModule {}

// entities: [User, Movie],
