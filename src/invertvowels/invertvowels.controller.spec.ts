import { Test, TestingModule } from '@nestjs/testing';
import { InversevowelsController } from './inversevowels.controller';

describe('InversevowelsController', () => {
  let controller: InversevowelsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InversevowelsController],
    }).compile();

    controller = module.get<InversevowelsController>(InversevowelsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
