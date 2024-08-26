import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ApiModule } from './api/api.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SecretKeyModule } from './modules/secret-key/secret-key.module';
import { VersitalAdminModule } from './modules/versital-admin/versital-admin.module';
import { VersitalUserModule } from './modules/versital-user/versital-user.module';

@Module({
  imports: [
    SecretKeyModule,
    VersitalAdminModule,
    VersitalUserModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Postgres',
      database: 'versital',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ApiModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
