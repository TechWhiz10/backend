import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {  CreateVersitalAdminDto } from 'src/api/versital-admin';
import { VersitalAdmin } from 'src/entities';
import { Repository } from 'typeorm';

@Injectable()
export class VersitalAdminService {
  constructor(
    @InjectRepository(VersitalAdmin)
    private repository: Repository<VersitalAdmin>,
  ) {}
  async create(versitalAdmin: CreateVersitalAdminDto): Promise<VersitalAdmin> {
    const isEmail = await this.repository.findOneBy({
      email: versitalAdmin.email,
    });

    if (isEmail)
      throw new ForbiddenException(`${versitalAdmin.email} already exists`);

    const newVersitalAdmin = this.repository.create(versitalAdmin);
    return await this.repository.save(newVersitalAdmin);
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
