import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { AuthModule } from 'src/auth/auth.module';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [ProductController],
  providers: [JwtService],
})
export class ProductModule {}
