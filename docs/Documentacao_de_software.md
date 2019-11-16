[Investimento](./Investimento.md)

# Documentação de Software

### Requisitos Funcionais
```text
RF01 - Deve ser permitido o cadastro de usuários
    RF01.1 - O cadastramento do usuário deve possuir os seguintes dados: email, nome, senha e empresa
    RF01.2 - O ID do usuário deve ser o email do usuário criptografado em MD5
    RF01.3 - Os usuários que se cadastrarem pela primeira vez sem uma empresa, tem um tempo de utilização de 7 dias gratuitos
    RF01.4 - Devem existir os campos: foto, status e localização, para a utilização em partes do sistema
RF02 - Deve ser permitido o login de usuários
    RF02.1 - No login, deve ser feita a validação do tempo gratuito ou do pagamento da empresa do usuário
RF03 - Na página inicial:
    RF03.1 - Deve ser permitida a visualização de dados referentes ao sistema através de gráficos
    RF03.2 - Devem ser listados os últimos 3 chamados do sistema, com seus respectivos dados: tipo, id, título, colaborador responsável, local, data/hora e status
    RF03.3 - O usuário deve poder escolher para realizar uma das seguintes ações: adicionar um novo chamado, listar todos os chamados, ver a localização dos funcionários, editar perfil e deslogar
    RF03.4 - Os chamados devem ser cacheados toda vez que houver alteração enquanto o usuário estiver online
RF04 - Na página de adicionar chamados:
    RF04.1 - O usuário deve poder cadastrar um chamado com os respectivos dados: tipo, título, detalhes, responsável, local e data/hora
    RF04.2 - O ID do ticket deve ser gerado automaticamente pelo padrão ISO 8601 - data e hora, em UTC e criptografado em MD5
    RF04.3 - Devem existir os campos: status, visto e comentários, para a utilização em partes do sistema
RF05 - Deve ser permitido o cadastramento de companhias
    RF05.1 - O cadastramento da companhia deve possuir os seguintes dados: cnpj e nome
    RF05.2 - O ID da companhia deve ser o CNPJ criptografado em MD5
    RF05.3 - Devem existir os campos: criado em, pagamento e administrador, para a validação de dados referentes à companhia
RF06 - Na página de listar os chamados:
RF07 - Na página de ver a localização dos colaboradores:
    RF07.1 - A localização deve ser atualizada em tempo real
    RF07.2 - Deve ser mostrada a localização de todos os colaboradores
```

### Requisitos Não Funcionais
```text
RNF01 - O tempo de resposta das consultas deve ser menor que 5 segundos
RNF02 - Se o usuário estiver offline:
    RNF02.1 - Devem ser mostrados os chamados guardados em cache
    RNF02.2 - Deve ser mostrado um alerta de que o usuário está offline
```

[Estrutura de Dados](./Estrutura_de_dados.md)