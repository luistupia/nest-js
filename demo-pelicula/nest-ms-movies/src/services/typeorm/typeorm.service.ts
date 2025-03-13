import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class TypeormService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
    return {
      type: 'mssql',
      host: 'sql5112.site4now.net',
      username: 'db_aa2fae_cargooriente_admin',
      password: 'Abcd.4321',
      port: 1433,
      database: 'db_aa2fae_cargooriente',
      entities: ['dist/**/*.model.{ts,js}'],
      extra: {
        options: { trustServerCertificate: true },
      },
    };
  }
}
