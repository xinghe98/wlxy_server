import { IsNotEmpty, IsString, MinLength } from 'class-validator';
export class CreateAdminDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5, { message: '用户名必须为5位字符以上' })
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
