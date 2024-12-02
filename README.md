# Code Challenge: Capital Gains

## 1. Visão Geral do Projeto

Este projeto implementa um processador de operações de mercado (`MarketOperationProcessor`), focado em calcular o imposto a ser pago sobre lucros ou prejuízos de operações no mercado financeiro de ações.

---

## 2. Decisões Técnicas e Arquiteturais

- `MarketOperationProcessor` orquestra operações de mercado.
- `BuyOperation` e `SellOperation` encapsulam a lógica de compra e venda.
- Novas operações podem ser adicionadas sem alterar a lógica existente.
- As operações são mapeadas por meio de `operationStrategies`, facilitando a adição de novos tipos de operações.
- O cálculo de imposto e o preço médio são abstraídos em classes separadas para facilitar a manutenção e testes.

---

## 3. Frameworks Utilizados:

- **Node.js:** Runtime JavaScript para execução do código.
- **Jest:** Framework de testes robusto e simples, usado para realizar testes unitários.

---

## 4. Instruções de Execução

### 4.1 Via Terminal

### Pré-requisitos:

- Node.js instalado (v14 ou superior)
- npm ou yarn

### Passos:

1. **Instale as dependências:**

```
npm install
```

2. **Execute o projeto**:

```
node index.js
```

3. **Instruções para execução dos testes**

Executar todos os testes:

```
npm test
```

### 4.2 Build Conteinerizado com Docker

O projeto já está configurado para ser executado dentro de um container Docker.

### Passos:

1. **Build da imagem Docker**:

Na raiz do projeto, execute o seguinte comando para construir a imagem Docker:

```
docker build -t capital-gains .
```

2. **Execução do container:**

Após construir a imagem, execute o container com o seguinte comando. O container irá automaticamente executar o script index.js ao ser iniciado:

```
docker run -it capital-gains
```

3. **Executando testes dentro do container:**

Se você quiser rodar os testes dentro do container, execute o seguinte comando:

```
docker run -it capital-gains npm run test
```
