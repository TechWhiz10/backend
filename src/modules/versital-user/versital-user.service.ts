import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateVersitalUserDto } from 'src/api/versital-user';
import { VersitalUser } from 'src/entities';
import { Repository } from 'typeorm';

@Injectable()
export class VersitalUserService {
  constructor(
    @InjectRepository(VersitalUser)
    private repository: Repository<VersitalUser>,
  ) {}
  async create(versitalUser: CreateVersitalUserDto): Promise<VersitalUser> {
    const isEmail = await this.repository.findOneBy({
      email: versitalUser.email,
    });

    if (isEmail)
      throw new ForbiddenException(`${versitalUser.email} already exists`);

    const newVersitalUser = this.repository.create(versitalUser);
    return await this.repository.save(newVersitalUser);
  }

  findAll() {
    return `This action returns all versitalUser`;
  }

  async findOne(email: string) {}

  update(id: number, updateVersitalUserDto: any) {
    return `This action updates a #${id} versitalUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} versitalUser`;
  }
}
