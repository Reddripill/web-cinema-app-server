import { Controller } from '@nestjs/common';
import { DirectorsService } from './directors.service';

@Controller('directors')
export class DirectorsController {
  constructor(private readonly directorsService: DirectorsService) {}
}
