import { Reflector } from '@nestjs/core';

export const Action = Reflector.createDecorator<number>();
