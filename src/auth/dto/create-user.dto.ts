import { Role } from 'src/shared/role.enum';

export class CreateUserDTO {
  username: string;
  password: string;
  role: Role;
}
