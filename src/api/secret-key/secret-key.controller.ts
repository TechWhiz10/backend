import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { SecretKey } from 'src/entities';
import { SecretKeyService } from 'src/modules/secret-key/secret-key.service';

import { CreateSecretKeyDto } from './create-secret-key.dto';
import { UpdateSecretKeyDto } from './update-secret-key.dto';

@Controller('api/secret-key')
export class SecretKeyController {
  constructor(private readonly secretKeyService: SecretKeyService) {}

  @Post()
  @HttpCode(201)
  async create(@Body() secretKey: CreateSecretKeyDto) {
    try {
      await this.secretKeyService.create(secretKey);

      return { success: true, message: 'Tokens created successfully' };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }

  @Get()
  findAll() {
    return this.secretKeyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.secretKeyService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSecretKeyDto: UpdateSecretKeyDto,
  ) {
    return this.secretKeyService.update(+id, updateSecretKeyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.secretKeyService.remove(+id);
  }
}
