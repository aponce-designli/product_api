import { Test, TestingModule } from '@nestjs/testing';
import { InboundOrdersService } from './inbound-orders.service';

describe('InboundOrdersService', () => {
  let service: InboundOrdersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InboundOrdersService],
    }).compile();

    service = module.get<InboundOrdersService>(InboundOrdersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
