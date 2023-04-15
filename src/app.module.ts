import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PostgresService } from '@app/backend-libs/config/database/postgres/postgres.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BackendLibsModule } from '@app/backend-libs';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({useClass: PostgresService}),
    BackendLibsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
