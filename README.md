# MenuReactNativeApp

## Índice

- [Visão Geral](#visão-geral)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Instalação e Configuração](#instalação-e-configuração)
- [Executando o Projeto](#executando-o-projeto)
- [Configuração do Backend](#configuração-do-backend)
- [Como Usar o App](#como-usar-o-app)
- [Funcionalidades](#funcionalidades)

---

## Visão Geral

O `MenuReactNativeApp` é um projeto React Native desenvolvido para ser um aplicativo simples e interativo, focado em calcular somas e exibir a distribuição percentual de faturamento por região. O aplicativo utiliza React Native no frontend, com um backend em NestJS responsável por processar a lógica de negócio e fornecer endpoints de API.

Este projeto segue boas práticas de design de UI/UX e arquitetura de código, separando a lógica em componentes e telas bem estruturadas.

---

## Tecnologias Utilizadas

- **React Native (v0.75.4)**
- **TypeScript**
- **NestJS (v10.4.4)**
- **Axios (v1.7.7)**
- **Metro Bundler**
- **Android Studio**
- **Node.js**
- **Yarn**

---

## Estrutura do Projeto

```plaintext
/src
  /components
    - ResultModal.tsx         # Exibe os resultados da soma ou percentual em um modal
  /screens
    - MenuScreen.tsx           # Tela principal com os botões para calcular soma ou percentual
  - App.tsx                    # Ponto de entrada da aplicação
/backend.js                     # Backend com lógica NestJS para os endpoints de soma e percentual
```

- **App.tsx**: Arquivo de entrada do aplicativo que carrega o menu principal.
- **MenuScreen.tsx**: Tela onde o usuário escolhe entre calcular a soma ou os percentuais.
- **ResultModal.tsx**: Componente modal para exibir os resultados de forma dinâmica, com base na escolha do usuário.
- **backend.js**: Lógica do backend utilizando NestJS, que processa as requisições para o cálculo da soma e percentual.

---

## Instalação e Configuração

### Pré-requisitos

- Node.js >= v18
- Yarn (opcional, mas recomendado)
- Android Studio (para emulação Android)
- AVD (Android Virtual Device) configurado corretamente

### 1. Clonar o Repositório

```bash
git clone https://github.com/seu-usuario/MenuReactNativeApp.git
cd MenuReactNativeApp
```

### 2. Instalar as Dependências do Frontend

```bash
yarn install
```

ou

```bash
npm install
```

### 3. Instalar as Dependências do Backend

Para rodar o backend, instale as dependências necessárias:

```bash
cd MenuReactNativeApp
npm install @nestjs/core @nestjs/common @nestjs/platform-express
```

### 4. Configurar o Android Studio

Certifique-se de que o Android Studio está instalado e que um emulador está configurado. Caso ainda não tenha o Android Studio, siga estas instruções:

1. Baixe o Android Studio [aqui](https://developer.android.com/studio).
2. Instale e configure um AVD (Android Virtual Device) com a imagem de sistema desejada.
3. Abra o AVD Manager no Android Studio e confirme que o emulador está pronto para uso.

### 5. Compilar o Projeto

```bash
npx react-native run-android
```

Certifique-se de que o emulador Android está em execução.

---

## Executando o Projeto

### 1. Iniciar o Servidor Backend

```bash
npm run backend
```

Este comando iniciará o backend em NestJS, que será executado em `http://localhost:3000`.

### 2. Iniciar o App React Native

```bash
npx react-native start --reset-cache
```

Em um terminal separado:

```bash
npx react-native run-android
```

Isso iniciará o aplicativo no emulador Android ou em um dispositivo físico conectado.

---

## Configuração do Backend

O backend foi construído utilizando NestJS e fornece dois endpoints:

1. `/questao1`: Calcula a soma de um intervalo específico.
2. `/questao2`: Calcula e retorna a distribuição percentual de faturamento entre diferentes regiões.

### Como Iniciar o Backend

```bash
npm run backend
```

O servidor estará disponível em `http://localhost:3000`. Certifique-se de que o aplicativo móvel pode se comunicar com o backend utilizando `http://10.0.2.2:3000` (emulador Android).

---

## Como Usar o App

1. **Calcular Soma (Questão 1)**: Toque no botão para calcular a soma de um intervalo.
2. **Calcular Percentual (Questão 2)**: Toque no botão para calcular os percentuais de faturamento entre as regiões (SP, RJ, MG, etc.).

Assim que o cálculo for concluído, um modal aparecerá mostrando o resultado. Você pode retornar ao menu principal tocando em "Voltar ao Menu".

---

## Funcionalidades

- **Estrutura de Componentes Modular**: O aplicativo foi organizado com componentes e telas reutilizáveis, facilitando a escalabilidade e manutenção.
- **Modal Dinâmico**: Exibe diferentes resultados (soma ou percentual) com base na escolha do usuário.
- **API NestJS**: O backend utiliza NestJS, tornando o código do servidor modular e fácil de estender.
- **Comunicação Frontend-Backend**: O Axios é utilizado para fazer as requisições HTTP à API backend para obtenção de dados.

---
