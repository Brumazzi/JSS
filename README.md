#Biblioteca JSS - Web Style Sheet

#http://brumazzi.github.io

##Manual
```
;Comentario do código
@variavel = blue

body:
  background = @variavel
  ;o novo block dentro do body
  ;estilizara com componentes com
  ;a classe titulo
  .titulo:
    background = green
    ;o caractere !, define um evento de estilização
    !hover:
      ;a pipe, indira o valor de retorno para quando o cursor
      ;sair do elemento
      background = white | green
    end
  end
end
```

##Contato
`Daniel Borges Brumazzi` brumazzi_daniel@yahoo.com.br
