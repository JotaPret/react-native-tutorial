# Tópicos Importantes

- **O que é o Node?**
  - É um ambiente que permite executar JavaScript fora do navegador (no servidor ou computador).

- **O que é Framework e qual a diferença para uma biblioteca?**
  - Framework é um conjunto completo de ferramentas e estrutura pronta. Biblioteca é apenas um conjunto de funções para tarefas específicas. Framework impõe estrutura, biblioteca você controla como usar.

- **O que é NPM?**
  - É o gerenciador de pacotes do Node que permite instalar, atualizar e gerenciar bibliotecas para seus projetos.

- **O que é React?**
  - É uma biblioteca JavaScript para criar interfaces visuais usando componentes reutilizáveis e atualizações automáticas quando dados mudam.

- **O que é React Native?**
  - É um framework para criar aplicativos móveis (iOS e Android) usando React, reutilizando o mesmo código em múltiplas plataformas.

- **O que é o Expo?**
  - É uma plataforma que facilita o desenvolvimento de apps React Native, oferecendo ferramentas prontas e permitindo testar no celular sem compilar.

- **Como estilizar um componente no React Native?**
  - Usando o `StyleSheet.create()` com objetos CSS-like em JavaScript (sem hífens, usando camelCase).

- **O estilo CSS in JS no React Native é igual ao CSS Web? Tenho todas as propriedades?**
  - Não, é similar mas limitado. React Native não suporta todas as propriedades CSS (ex: z-index limitado, sem pseudo-classes como :hover).

- **Em quais pacotes encontro um componente de Imagem? Qual melhor para usarmos atualmente?**
  - Use `expo-image` (melhor performance) ou `Image` de `react-native`. Expo-image é mais recomendado atualmente.

- **O que são propriedades de componentes?**
  - São valores passados aos componentes para configurá-los (como parâmetros). Em React, chamamos de "props".

- **O que são Hooks?**
  - São funções especiais do React que permitem usar estado e outras funcionalidades em componentes funcionais (ex: useState, useEffect).

- **Para que serve e como funciona o useState?**
  - Serve para adicionar estado a um componente. `const [estado, setEstado] = useState(valor)` cria uma variável que quando mudada, re-renderiza o componente.

Extra

- Revisão de variáveis e objetos
	- desestruturação de objetos


## Comando Uteis

//Como instalar o React Native com Expo?

npx create-expo-app@latest --template

## Expo