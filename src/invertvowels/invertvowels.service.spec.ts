import { Test, TestingModule } from '@nestjs/testing';
import { InversevowelsService } from './invertvowels.service';

describe('InversevowelsService', () => {
  let service: InversevowelsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InversevowelsService],
    }).compile();

    service = module.get<InversevowelsService>(InversevowelsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
