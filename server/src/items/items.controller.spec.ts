import { Test, TestingModule } from '@nestjs/testing';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import { PrismaService } from '../prisma/prisma.service';
import { GetItemsDto } from './dto/get-items.dto';

describe('ItemsController (Integration)', () => {
  let controller: ItemsController;
  let itemsService: ItemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItemsController],
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

    controller = module.get<ItemsController>(ItemsController);
    itemsService = module.get<ItemsService>(ItemsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  describe('getItems', () => {
    it('should return an array of items', async () => {
      const result = [
        {
          id: '1',
          name: 'Test Item',
          image: 'image_url',
          category: 'category',
          float: 0.5,
          price: 50,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];

      jest.spyOn(itemsService, 'getItems').mockResolvedValue(result);

      const mockGetItemsDto: GetItemsDto = {
        name: 'Test Item',
        minPrice: 10, // Cambiado a número
        maxPrice: 100, // Cambiado a número
      };

      expect(await controller.getItems(mockGetItemsDto)).toBe(result);
      expect(itemsService.getItems).toHaveBeenCalledWith(mockGetItemsDto);
    });
  });
});
