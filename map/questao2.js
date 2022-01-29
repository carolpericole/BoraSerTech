//Considere dois arrays:

const x = [3,4,7,1,5];

const y = [4,3,1];

//Com os dois arrays, utilize a função map para multiplicá-los, elemento a elemento. 
//É possível que os arrays tenham tamanhos diferentes, certo? Por isso, o array resultante deverá ter o tamanho do menor dos arrays.



let i = -1;

const arr = y.map(y => {
        i++;
        return y * x[i];
    
})

console.log(arr);


