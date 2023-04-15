import { Module } from '@nestjs/common';
import { BackendLibsService } from './backend-libs.service';

@Module({
  providers: [BackendLibsService],
  exports: [BackendLibsService],
})
export class BackendLibsModule {}
