import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [UsersModule, PassportModule],
  //when below we write local strategy ,it automatically registers authguard wala and the authenticate with the local string
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
