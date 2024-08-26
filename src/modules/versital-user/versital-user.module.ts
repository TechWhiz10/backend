import { Module } from '@nestjs/common';
import { VersitalUserService } from './versital-user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VersitalUser } from 'src/entities';

@Module({
  imports: [TypeOrmModule.forFeature([VersitalUser])],
  providers: [VersitalUserService],
  exports: [VersitalUserService],
})
export class VersitalUserModule {}
