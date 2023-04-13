/* 
    Type conversion (typecasting) vs Type coersion
*/

console.log(Number('9') + 5)


/* 
  FALSY
  Quando um valor é considerado false em contextos onde um booleano é obrigátotio ( condivionais e loops )

  false
  0
  -0
  ""
  null
  underfined
  NaN
*/
console.log(true ? 'verdadeiro' : 'falso')




/* 
  TRUTHY
  Quando um valor é considerado true em contextos onde um booleano é obrigatório ( condicionais e loops )

  true
  {}
  []
  1
  3.23
  "0"
  "false"
  -1
  infinity
  -inifity
*/

console.log( [] ? 'verdadeiro' : 'falso')