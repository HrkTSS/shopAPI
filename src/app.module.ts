import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { ItemModule } from './item/item.module';

@Module({
  imports: [TypeOrmModule.forRoot(), CategoryModule, ItemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
