import { Controller, Post, Body, UseGuards, Request } from '@nestjs/common';
import { AuthenticatedGuard } from 'src/auth/guards/authenticated.guard';

import { LocalAuthGuard } from '../auth/guards/local-auth.guard';
import { InvertvowelsService } from './invertvowels.service';


@Controller('api/v1/invertvowels')
export class InversevowelsController {

    constructor(
        private readonly invertService: InvertvowelsService
    ){}
    
    @UseGuards(AuthenticatedGuard)
    @Post()
    async getInverseVowels(@Body('word') word: string) {
        let result = await this.invertService.getInvertVowel(word);
        return {result: result};
    }
}
