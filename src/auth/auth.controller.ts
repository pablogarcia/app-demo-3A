import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('api/v1/auth')
export class AuthController {
    constructor(
        private readonly userService: UserService
    ) {
    }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    login(@Request() req): any {
        return req.user;
    }

}
