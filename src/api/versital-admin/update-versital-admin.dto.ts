import { PartialType } from '@nestjs/swagger';
import { CreateVersitalAdminDto } from './create-versital-admin.dto';

export class UpdateVersitalUserDto extends PartialType(CreateVersitalAdminDto) {}
