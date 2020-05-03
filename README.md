# Introducao-ao-React

Este repositório se destina ao desenvolvimento de um jogo da velha feito por meio do Tutorial: Introdução ao React do site oficial do Reactjs. O objeto da construção desta aplicação é sanar dúvidas e aprender fundamentos básica sobre Reactjs.


:four_leaf_clover:  'Às vezes precisamos voltar uma casa para avançar duas.' - Autor desconhecido

#### Features

:heavy_check_mark: Game Reset

:heavy_check_mark: Modo View Custom


#### Lessons Learning

 ##### React Code Style 

    - Quando houver mais de uma prop, coloque-as em linhas separadas isso melhorá a legibilidade do código.

 ##### React Fundamentails

    - O state é privado por isso utilizamos o 'this' para acessá-lo.
    - 
 ##### Javascript

    - Template strings (`${variavel}`)
      - Vantagens
        - Concatenar mais facilmente valores a strings.
            Ex:
              - const msg = `Mayara assistiu os ${112} episódios de Yu Yu Hakusho.`
              msg // Mayara assistiu os 112 episódios de Yu Yu Hakusho.
        - Concatenar quebras de linhas sem precisar digitar o '\n', apenas dando 'enter' entre as strings.
        - Criação de strings interpoladas. 
            Ex: 
              const dias = 90
              const msg = `Mais ${dias + 1} dias sem o crush!`
              msg // "Mais 91 dias sem o crush!"
 
    - O 'this' é utilizado como uma referência a um objeto presente no escopo corrente. 
    - O 'this'é chamado normalmente dentro de um método ou função
    - Através do 'this' dentro de uma função pode-se acessar o métodos e propriedades do objeto que invoca a função. 

      * Ex:
          const car = {
            rodas: 4,
            speed: 0,
            accelerate: function(){
                this.speed += 1
                alert(`Speed: ${this.speed}`)
            }
          } 

          car.accelerate() // 1
    - O 'this' em escopo global referencia o objeto window.
    - strict mode
      - modo rigoroso de interpretar a linguagem javascript, que não permirte práticas não recomendadas em javascript. Ex: criação de variáveis globais implícitas. Como usá-lo? Coloque a flag "use strict" no início/primeira linha do código para aplicar esse modo para todo o código ou adicione na primeira linha de uma função para aplicar o modo a está função e as demais funções chamadas dentro desta função.

    - Função de callback????
            
    - A função 'apply' permite pegar o contexto de um objeto. 
