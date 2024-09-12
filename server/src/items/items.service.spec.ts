import { Test, TestingModule } from '@nestjs/testing';
import { ItemsService } from './items.service';
import { PrismaService } from '../prisma/prisma.service';
import { GetItemsDto } from './dto/get-items.dto';

describe('ItemsService', () => {
  let service: ItemsService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ItemsService,
        {
          provide: PrismaService,
          useValue: {
            item: {
              findMany: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    service = module.get<ItemsService>(ItemsService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getItems', () => {
    it('should call prisma.item.findMany with correct parameters', async () => {
      const mockGetItemsDto: GetItemsDto = {
        name: 'Test Item',
        minFloat: 0.1,
        maxFloat: 0.9,
        minPrice: 10,
        maxPrice: 100,
        category: 'TestCategory',
        // orderBy: 'price',
        // order: Order.DESC,
      };

      await service.getItems(mockGetItemsDto);

      expect(prismaService.item.findMany).toHaveBeenCalledWith({
        where: {
          name: { contains: 'Test Item', mode: 'insensitive' },
          float: { gte: 0.1, lte: 0.9 },
          price: { gte: 10, lte: 100 },
          category: 'TestCategory',
        },
        orderBy: { price: 'desc' },
      });
    });
  });
});
