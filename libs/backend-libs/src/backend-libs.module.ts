import { Module } from '@nestjs/common';
import { BackendLibsService } from './backend-libs.service';
import { UserModule } from './models/user/user.module';

@Module({
  providers: [BackendLibsService],
  exports: [BackendLibsService],
  imports: [UserModule],
})
export class BackendLibsModule {}
