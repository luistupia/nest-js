import { Module } from '@nestjs/common';
import { TaskController } from './tas.controller';
import { TaskService } from './tas.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [TaskController],
  providers: [TaskService],
  exports: [PrismaModule],
})
export class TaskModule {}
