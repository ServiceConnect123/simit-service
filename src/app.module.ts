import { Module } from '@nestjs/common';
import { SimitService } from './services/simit.service/simit.service.service';
import { SimitController } from './controllers/simit.controller';

@Module({
  imports: [],
  controllers: [SimitController],
  providers: [SimitService],
})
export class AppModule {}
