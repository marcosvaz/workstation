# Workstation
[![Tecnology](https://img.shields.io/static/v1?label=feito%20com&message=React%20Native&style=flat&logo=react)](https://facebook.github.io/react-native/)

[![Author](https://img.shields.io/static/v1?label=feito%20por&message=Marcos%20Vaz&?style=social&logo=github)](https://github.com/marcosvaz/)
> Projeto em andamento
<!--
    TODO: Página de login e registro
    TODO: Conexão com Firebase
    TODO: Menu que abre (Drawer)
    TODO: Abrir e alterar perfil
    TODO: Detalhes dos gráficos
    TODO: Detalhes dos chamados
    TODO: Página de listagem de chamados
    TODO: Página da localização dos funcionários
    FIXME: Formulário de adicionar chamado
    FIXME: Cor dos gráficos

    # Próxima etapa
    TODO: Aplicativo para funcionário
-->

Workstation é um aplicativo para solicitação e atendimento de chamados, para empresas e profissionais.

### Investimento
[Investimento](./docs/Investment.md)

### Estrutura de dados
[Estrutura de dados](./docs/Estrutura_de_dados.md)

### Instalação
Caso você não tenha um ambiente React Native, é altamente recomendável que você siga este tutorial: [React Native - Getting Started](https://facebook.github.io/react-native/docs/getting-started)

Após a preparação do ambiente, você deve clonar o projeto através do seguinte comando:
```bash
git clone https://github.com/marcosvaz/workstation.git
```

Em seguida, instale as dependências do projeto pelo npm ou yarn:
```bash
# Instalação pelo NPM
npm install

# Instalação pelo Yarn
yarn install
```

E execute o projeto para a plataforma que deseja testar (Android ou iOS) na versão de teste:
```bash
# Para dispositivos Android
react-native run-android

# Para dispositivos iOS
react-native run-ios
```

### Versão de produção
> Para rodar o aplicativo em versão de produção, você deve adicionar a flag `--variant=release` ao final do comando de teste, da seguinte maneira:
```bash
# Para dispositivos Android
react-native run-android --variant=release

# Para dispositivos iOS
react-native run-ios --variant=release
```

### Licença
[MIT](/LICENSE.md)
