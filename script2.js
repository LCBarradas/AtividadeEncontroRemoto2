// criar um laço para exbir se o número é impar ou par

let numeros = 20;

for ( let contador = 0; contador <= numeros; contador++)
{
  // mod é o resto da divisão
 if(contador % 2 == 0){
    console.log (contador+" é par")
 }else{
    console.log(contador+" é impar")
 }
}