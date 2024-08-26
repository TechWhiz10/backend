import { PartialType } from '@nestjs/swagger';
import { CreateSecretKeyDto } from './create-secret-key.dto';

export class UpdateSecretKeyDto extends PartialType(CreateSecretKeyDto) {}
