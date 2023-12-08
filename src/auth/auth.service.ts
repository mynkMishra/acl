import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from './entities/user.entity';
import { Role } from './entities/role.entity';
import { LoginDTO } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Role) private roleRepository: Repository<Role>,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password): Promise<User> {
    const user = await this.userRepository.findOne({ where: { username } });

    if (!user) {
      return;
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      return;
    }

    return user;
  }
  async createUser(createUserDTO: CreateUserDTO): Promise<User> {
    const { username, password, role } = createUserDTO;
    const roleRecord = await this.roleRepository.findOne({
      where: { label: role },
    });

    const newUser = new User();
    newUser.username = username;
    newUser.password = await bcrypt.hash(password, 10);
    newUser.roleId = roleRecord.id;

    const result = await this.userRepository.save(newUser);
    return newUser;
  }

  async login(loginDto: LoginDTO): Promise<{ accessToken: string }> {
    const { username, password } = loginDto;

    const user = await this.userRepository.findOne({ where: { username } });

    if (!user) {
      return;
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      return;
    }

    const payload = { username: user.username, roleId: user.roleId };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  async getRole(roleId: string): Promise<Role> {
    return this.roleRepository.findOne({ where: { id: roleId } });
  }
}
