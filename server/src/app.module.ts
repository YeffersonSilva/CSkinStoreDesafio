import { Module } from '@nestjs/common';
import { ItemsModule } from './items/items.module'; // Importa los módulos que necesites

@Module({
  imports: [ItemsModule], // Agrega aquí tus módulos
  controllers: [], // Si tienes controladores
  providers: [], // Si tienes servicios
})
export class AppModule {}
