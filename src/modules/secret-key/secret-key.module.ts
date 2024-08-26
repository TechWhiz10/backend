import { Module } from '@nestjs/common';
import { SecretKeyService } from './secret-key.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SecretKey } from 'src/entities';

@Module({
  imports: [TypeOrmModule.forFeature([SecretKey])],
  providers: [SecretKeyService],
  exports: [SecretKeyService],
})
export class SecretKeyModule {}
