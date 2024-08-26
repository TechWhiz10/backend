import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateVersitalUserDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  accountId: string;
}
