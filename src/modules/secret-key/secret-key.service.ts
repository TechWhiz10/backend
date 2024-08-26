import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateSecretKeyDto } from 'src/api/secret-key';
import { SecretKey } from 'src/entities';
import { Repository } from 'typeorm';

@Injectable()
export class SecretKeyService {
  constructor(
    @InjectRepository(SecretKey)
    private repository: Repository<SecretKey>,
  ) {}
  async create(secretKey: CreateSecretKeyDto): Promise<SecretKey> {
    const isAccountId = await this.repository.findOneBy({
      accountId: secretKey.accountId,
    });

    if (isAccountId)
      throw new ForbiddenException(`${secretKey.accountId} already exists`);

    const newSecretKey = this.repository.create(secretKey);
    return await this.repository.save(newSecretKey);
  }

  findAll() {
    return `This action returns all secretKey`;
  }

  findOne(id: number) {
    return `This action returns a #${id} secretKey`;
  }

  update(id: number, updateSecretKeyDto: any) {
    return `This action updates a #${id} secretKey`;
  }

  remove(id: number) {
    return `This action removes a #${id} secretKey`;
  }
}
