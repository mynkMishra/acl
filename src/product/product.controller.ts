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
import { Action } from 'src/auth/action.decorator';
import { RolesGuard } from 'src/auth/roles.guard';

import {
  CREATE,
  DELETE,
  FETCH,
  UPDATE,
} from 'src/shared/authorized-actions.constant';

@Controller('products')
@UseGuards(RolesGuard)
export class ProductController {
  @Post()
  @Action(CREATE)
  @HttpCode(HttpStatus.CREATED)
  create() {
    return { message: 'Products added successfully' };
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @Action(FETCH)
  findAll() {
    return { message: 'Products sent successfully' };
  }

  @Patch('')
  @HttpCode(HttpStatus.OK)
  @Action(UPDATE)
  update() {
    return { message: 'Products updated successfully' };
  }

  @Put('')
  @HttpCode(HttpStatus.OK)
  @Action(UPDATE)
  upsert() {
    return { message: 'Products updated successfully' };
  }

  @Delete('')
  @HttpCode(HttpStatus.OK)
  @Action(DELETE)
  remove() {
    return { message: 'Products deleted successfully' };
  }
}
