import { Test, TestingModule } from '@nestjs/testing';
import { BackendLibsService } from './backend-libs.service';

describe('BackendLibsService', () => {
  let service: BackendLibsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BackendLibsService],
    }).compile();

    service = module.get<BackendLibsService>(BackendLibsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
