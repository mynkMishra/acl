import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { AuthModule } from 'src/auth/auth.module';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from 'src/auth/auth.service';

@Module({
  imports: [AuthModule],
  controllers: [ProductController],
  providers: [JwtService],
})
export class ProductModule {}
