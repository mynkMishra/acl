import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  HttpCode,
  HttpStatus,
  Put,
  UseGuards,
} from '@nestjs/common';
import { RolesGuard } from 'src/auth/roles.guard';

@Controller('products')
export class ProductController {
  @Post()
  @UseGuards(RolesGuard)
  @HttpCode(HttpStatus.CREATED)
  create() {
    return { message: 'Products added successfully' };
  }

  @Get()
  @UseGuards(RolesGuard)
  @HttpCode(HttpStatus.OK)
  findAll() {
    return { message: 'Products sent successfully' };
  }

  @Patch('')
  @UseGuards(RolesGuard)
  @HttpCode(HttpStatus.OK)
  update() {
    return { message: 'Products updated successfully' };
  }

  @Put('')
  @UseGuards(RolesGuard)
  @HttpCode(HttpStatus.OK)
  upsert() {
    return { message: 'Products updated successfully' };
  }

  @Delete('')
  @UseGuards(RolesGuard)
  @HttpCode(HttpStatus.OK)
  remove() {
    return { message: 'Products deleted successfully' };
  }
}
