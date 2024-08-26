import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VersitalUser } from 'src/entities';
import { VersitalUserService } from 'src/modules/versital-user/versital-user.service';
import { CreateVersitalUserDto } from './create-versital-user.dto';

@Controller('api/versital-user')
export class VersitalUserController {
  constructor(private readonly versitalUserService: VersitalUserService) {}

  @Post()
  async create(@Body() versitalUser: CreateVersitalUserDto) {
    try {
      await this.versitalUserService.create(versitalUser)

      return{ success: true, message: "User created successfully" }
    } catch (error) {
      return{ success: false, message: error.message }
    }
  }

  @Get()
  findAll() {
    return this.versitalUserService.findAll();
  }

  @Get('/:email')
  findOne(@Param('email') email: string) {
    return this.versitalUserService.findOne(email);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVersitalUserDto: any) {
    return this.versitalUserService.update(+id, updateVersitalUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.versitalUserService.remove(+id);
  }
}
