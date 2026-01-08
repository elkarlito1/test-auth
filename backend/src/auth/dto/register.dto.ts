import { IsPasswordsMatchingConstraint } from '@/libs/common/utils/decorators/is-passwords-matching-constraint.decorators';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
  Validate,
} from 'class-validator';

export class RegisterDto {
  @IsString({ message: 'Имя должно быть строкой.' })
  @IsNotEmpty({ message: 'Имя обязательно для заполнения.' })
  name: string;

  @IsString({ message: 'Email должен быть строкой.' })
  @IsNotEmpty({ message: 'Email обязательно для заполнения.' })
  @IsEmail({}, { message: 'Некорректный формат email.' })
  email: string;

  @IsString({ message: 'Пароль должен быть строкой.' })
  @IsNotEmpty({ message: 'Пароль обязательно для заполнения.' })
  @MinLength(6, { message: 'Пароль должен содержать минимум 6 символов.' })
  password: string;

  @IsString({ message: 'Пароль должен быть строкой.' })
  @IsNotEmpty({ message: 'Пароль обязательно для заполнения.' })
  @MinLength(6, { message: 'Пароль должен содержать минимум 6 символов.' })
  @Validate(IsPasswordsMatchingConstraint, {
    message: 'Пароли не совпадают',
  })
  passwordRepeat: string;
}
