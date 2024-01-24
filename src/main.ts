import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //passando a configuracao da validacao e as configuracoes personalizadas
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, //fica responsável por transformar o json no DTO criado para poder ser validade
      whitelist: true, //ignora de forma silenciosa qualquer propriedade que não está no DTO e não valida as mesmas.
      forbidNonWhitelisted: true, //basicamente faz com que não seja aceito nenhuma propriedade previamente não declarada
    }),
  );

  await app.listen(3000);
}
bootstrap();
