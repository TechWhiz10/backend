import { PartialType } from '@nestjs/swagger';
import { CreateVersitalUserDto } from './create-versital-user.dto';

export class UpdateVersitalUserDto extends PartialType(CreateVersitalUserDto) {}
