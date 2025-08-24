# Jogo Amigo Secreto 👨‍🦰

Este projeto é um sistema simples para organizar e sortear participantes em um jogo de Amigo Secreto.

## Funcionalidades

- Adicionar nomes: Os usuários escreverão o nome de um amigo em um campo de texto e o adicionarão a uma lista visível ao clicar em "Adicionar".
- Validar entrada: Se o campo de texto estiver vazio, o - programa exibirá um alerta solicitando um nome válido.
- Visualizar a lista: Os nomes inseridos aparecerão em uma lista abaixo do campo de entrada.
- Sorteio aleatório: Ao clicar no botão "Sortear Amigo", um nome da lista será selecionado aleatoriamente e exibido na página.
- Informações salvas: A lista de amigos é armazenada no storage do navegador

## Tecnologias Utilizadas

- HTML
- CSS
- JavaScript

## Como Funciona

1. Os participantes são cadastrados e listados a interface.
2. Após o cadastro, o organizador inicia o sorteio.
3. O sistema realiza o sorteio garantindo que não haja autoatribuições.

## Como Rodar o Projeto

1. **Clone o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/jogo-amigo-secreto.git
    cd jogo-amigo-secreto
    ```

2. **Instale as dependências:**
    ```bash
    npm install
    ```

3. **Inicie o servidor:**
    ```bash
    npm start
    ```

4. **Acesse a interface:**
    - Abra o navegador e acesse `http://localhost:3000`.

## Como Contribuir

- Faça um fork do projeto.
- Crie uma branch para sua melhoria ou correção.
- Envie um pull request detalhando sua contribuição.
