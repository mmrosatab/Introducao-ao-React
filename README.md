# Introducao-ao-React

Este repositório se destina ao desenvolvimento de um jogo da velha feito por meio do Tutorial: Introdução ao React do site oficial do Reactjs. O objetivo da construção desta aplicação é sanar dúvidas e aprender fundamentos básicos sobre Reactjs.


:four_leaf_clover:  *'Às vezes precisamos voltar uma casa para avançar duas.'* - Autor desconhecido

### Execução

Para executar a aplicação: `yarn start`

### Features

:heavy_check_mark: Game Reset

:heavy_check_mark: Modo View Custom

### Lessons Learning

##### :memo: React Code Style 

Quando houver mais de uma prop, coloque-as em linhas separadas isso melhorá a legibilidade do código.

Quebre o retorno do elemento em várias linhas para melhorar a legibilidade e adicione parênteses para que o JavaScript não insira ponto e virgula após o return e quebre o código.

Convenção é usar nomes on[Event] para propriedades que representam eventos e handle[Event] para métodos que manipulam os eventos.

***Componentes de função*** são aqueles contém um método render e **NÃO** possuem seu próprio state.

##### :memo: React Fundamentails

O ***state*** é privado para componentes React por isso utilizamos o **this** para acessá-lo.
O método ***setState*** atualiza este componente React e também todos os seus filhos de forma automática.

Benefícios da immutabilidade

	* Complexidade das features se tornarem bem mais simples.
	* Manter o histórico do state.
	* Determinar Quando Re-renderizar no React.

##### :memo: Javascript
  
  Fill
  
  * O método fill muda todos os elementos em um array para o valor que foi passado como parâmetro.
  
  Template strings `${variavel}`

  * Concatenar mais facilmente valores a strings.
    ```javascript
    const msg = `Mayara assistiu os ${112} episódios de Yu Yu Hakusho.`
    msg // Mayara assistiu os 112 episódios de Yu Yu Hakusho.
    ```
  * Concatenar quebras de linhas sem precisar digitar o '\n', apenas dando 'enter' entre as strings.

  * Criação de strings interpoladas. 

    ```javascript 
    const dias = 90
    const msg = `Mais ${dias + 1} dias sem o crush!`
    msg // "Mais 91 dias sem o crush!"
    ```
  This
  
  * O ***this*** é utilizado como uma referência a um objeto presente no escopo corrente. 
  * O ***this*** é chamado normalmente dentro de um método ou função
  * Através do ***this*** dentro de uma função pode-se acessar o métodos e propriedades do objeto que invoca a função. 

  ```javascript
    const car = {
      rodas: 4,
      speed: 0,
      accelerate: function(){
        this.speed += 1
        alert(`Speed: ${this.speed}`)
      }
    } 

  car.accelerate() // 1
  ```


  * O ***this*** em escopo global referencia o objeto window.

  Strict mode
  
  * Modo rigoroso de interpretar a linguagem javascript, que não permirte práticas não recomendadas em javascript. Ex:    criação de variáveis globais implícitas. Como usá-lo? Coloque a flag **use strict** no início/primeira linha do código para aplicar esse modo para todo o código ou adicione na primeira linha de uma função para aplicar o modo a está função e as demais funções chamadas dentro desta função.

 Função de ***callback***????
 
 Função apply
  * A função ***apply*** permite pegar o contexto de um objeto. 

```javascript
const person1 = { 
  name: 'Mayara',
  age: 27, 
  message: function(){ 
    console.log(`I'm ${this.name} and I'm ${this.age} years old`)
  }
} 
const person2 = {name: 'Pandessa', age: 24} 
person1.message() // I'm Mayara and I'm 27 years old
person1.message.apply(person2) // I'm Pandessa and I'm 24 years old
```