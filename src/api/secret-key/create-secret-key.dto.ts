import { IsNotEmpty } from 'class-validator';

export class CreateSecretKeyDto {
  @IsNotEmpty()
  consumerKey: string;

  @IsNotEmpty()
  consumerSecret: string;

  @IsNotEmpty()
  tokenId: string;

  @IsNotEmpty()
  tokenSecret: string;

  @IsNotEmpty()
  accountId: string;
}
