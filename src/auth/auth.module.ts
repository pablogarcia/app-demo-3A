import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalStrategy } from './strategies/local.strategy';
import { UserModule } from 'src/user/user.module';
import { SessionSerializer } from './session.serializer';
import { PassportModule } from '@nestjs/passport';

@Module({
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, SessionSerializer],
  imports: [UserModule, PassportModule.register({ session: true })]
})
export class AuthModule {}
