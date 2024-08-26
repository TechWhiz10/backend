import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateVersitalAdminDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  accountId: string;
}
