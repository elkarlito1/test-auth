import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { UserService } from '@/user/user.service';
import { AuthMethod, User } from '@prisma/__generated__';
import { Request } from 'express';

@Injectable()
export class AuthService {
  prisma: any;
  public constructor(private readonly userService: UserService) {}

  public async register(req: Request, dto: RegisterDto) {
    const isExist = await this.userService.findByEmail(dto.email);

    if (isExist) {
      throw new ConflictException('Пользователь зарегистрирован.');
    }

    const newUser = await this.userService.create(
      dto.email,
      dto.password,
      dto.name,
      AuthMethod.CREDENTIAL,
      false,
    );

    return this.saveSession(req, newUser);
  }
  public async login() {}
  public async logout() {}

  private async saveSession(req: Request, user: User) {
    return new Promise((resolve, reject) => {
      req.session.userId = user.id;

      req.session.save((error) => {});
    });
  }
}
