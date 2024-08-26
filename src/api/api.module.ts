import { Module } from '@nestjs/common';
import { SecretKeyController } from './secret-key/secret-key.controller';
import { VersitalAdminController } from './versital-admin/versital-admin.controller';
import { VersitalUserController } from './versital-user/versital-user.controller';
import { SecretKeyModule } from 'src/modules/secret-key/secret-key.module';
import { VersitalAdminModule } from 'src/modules/versital-admin/versital-admin.module';
import { VersitalUserModule } from 'src/modules/versital-user/versital-user.module';

@Module({
  imports: [SecretKeyModule, VersitalUserModule, VersitalAdminModule ],
  controllers: [SecretKeyController, VersitalUserController, VersitalAdminController], 
  providers: [],
})
export class ApiModule {}
