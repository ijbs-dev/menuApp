import { NestFactory } from '@nestjs/core';
import { Module, Controller, Get } from '@nestjs/common';

// Controlador para a questão 1 (Cálculo de Soma)
@Controller('questao1')
class Questao1Controller {
  @Get()
  calcularSoma() {
    const INDICE = 13;
    let SOMA = 0;
    let K = 0;

    while (K < INDICE) {
      K += 1;
      SOMA += K;
    }

    return { soma: SOMA };
  }
}

// Controlador para a questão 2 (Cálculo Percentual de Faturamento)
@Controller('questao2')
class Questao2Controller {
  @Get()
  calcularPercentual() {
    const SP = 67836.43;
    const RJ = 36678.66;
    const MG = 29229.88;
    const ES = 27165.48;
    const OUTROS = 19849.53;

    const total = SP + RJ + MG + ES + OUTROS;

    return {
      SP: (SP / total) * 100,
      RJ: (RJ / total) * 100,
      MG: (MG / total) * 100,
      ES: (ES / total) * 100,
      OUTROS: (OUTROS / total) * 100,
    };
  }
}

// Módulo principal do Nest.js
@Module({
  controllers: [Questao1Controller, Questao2Controller],
})
class AppModule {}

// Função para inicializar o Nest.js
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Habilitar CORS para permitir requisições do frontend
  app.enableCors();

  await app.listen(3000);
  console.log('Servidor rodando em http://localhost:3000');
}
bootstrap();
