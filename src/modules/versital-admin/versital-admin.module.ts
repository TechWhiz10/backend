import { Module } from '@nestjs/common';
import { VersitalAdminService } from './versital-admin.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VersitalAdmin } from 'src/entities';

@Module({
  imports: [TypeOrmModule.forFeature([VersitalAdmin])],
  providers: [VersitalAdminService],
  exports: [VersitalAdminService],
})
export class VersitalAdminModule {}
