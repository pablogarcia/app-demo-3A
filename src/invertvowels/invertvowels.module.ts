import { Module } from '@nestjs/common';

import { InversevowelsController } from './inversevowels.controller';
import { InvertvowelsService } from './invertvowels.service';


@Module({
  controllers: [InversevowelsController],
  providers: [InvertvowelsService]
})
export class InversevowelsModule {}
