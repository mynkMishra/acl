import {
  CanActivate,
  ExecutionContext,
  Inject,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Action } from './action.decorator';

export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    @Inject(JwtService)
    private readonly jwtService: JwtService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const action = this.reflector.get(Action, context.getHandler());
    const request = context.switchToHttp().getRequest();
    const authToken = request.headers.authorization;
    if (!authToken) {
      throw new UnauthorizedException();
    }
    const payload = this.jwtService.decode(authToken);
    const isAuthorized = payload.permissions & action;

    return isAuthorized === action;
  }
}
