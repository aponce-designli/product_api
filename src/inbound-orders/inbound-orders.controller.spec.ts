import { Test, TestingModule } from '@nestjs/testing';
import { InboundOrdersController } from './inbound-orders.controller';

describe('InboundOrdersController', () => {
  let controller: InboundOrdersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InboundOrdersController],
    }).compile();

    controller = module.get<InboundOrdersController>(InboundOrdersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
