import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FreezerItemModule } from './freezer-item/freezer-item.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FreezerItem } from './freezer-item/entities/freezer-item.entity';
import { FreezerItemCategoryModule } from './freezer-item-category/freezer-item-category.module';
import { FreezerItemCategory } from './freezer-item-category/entities/freezer-item-category.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    FreezerItemModule,
    ConfigModule.forRoot(),
    FreezerItemCategoryModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USER'),
        // username: configService.get('POSTGRES_USER'),
        password: configService.get('PASSWORD'),
        // password: configService.get('POSTGRES_PASSWORD'),
        database: configService.get('DATABASE'),
        entities: [FreezerItem, FreezerItemCategory],
        synchronize: configService.get<boolean>('SYNC'),
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
