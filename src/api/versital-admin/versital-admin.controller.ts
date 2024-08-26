import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VersitalAdminService } from 'src/modules/versital-admin/versital-admin.service';
import { CreateVersitalAdminDto } from './create-versital-admin.dto';

@Controller('api/versital-admin')
export class VersitalAdminController {
  constructor(private readonly versitalAdminService: VersitalAdminService) {}

  @Post()
  async create(@Body() versitalAdmin: CreateVersitalAdminDto) {
    try {
      await this.versitalAdminService.create(versitalAdmin)

      return{ success: true, message: "Admin created successfully" }
    } catch (error) {
      return{ success: false, message: error.message }
    }
  }

  @Get()
  findAll() {
    return this.versitalAdminService.findAll();
  }

  @Get('/:email')
  findOne(@Param('email') email: string) {
    return this.versitalAdminService.findOne(email);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVersitalAdminDto: any) {
    return this.versitalAdminService.update(+id, updateVersitalAdminDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.versitalAdminService.remove(+id);
  }
}
