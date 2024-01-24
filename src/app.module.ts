import { Module } from '@nestjs/common';
import { UserController } from './user/User.controller';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule],
  controllers: [UserController],
  providers: [],
})
export class AppModule {}
