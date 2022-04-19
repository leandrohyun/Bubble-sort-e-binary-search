
//Bubble Sort
var estradas0 = [4,2,6,9,1,3,7,5,8]; 
console.log(estradas0)
function bubbleSort(items) {
    var length = items.length;  
    for (var i = 0; i < length; i++) { 
          for (var j = 0; j < (length - i - 1); j++) { 
                   if(items[j] > items[j+1]) {
                           var tmp = items[j]; 
                items[j] = items[j+1]; 
                items[j+1] = tmp; 
                console.log(estradas0);
            }
        }        
    }
}
bubbleSort(estradas0);


// Busca Sequencial

estradas = []
for (let i=1;i <= 1500; i++){
    estradas.push(i)
}
function pesquisaSequencial(array, item){
    let pos = 0;
    let x = false;
    while(pos < array.length && !x){
        if (array[pos] === item){
            x = true;
        }
        else{
            pos = pos+1;
        }
    }
    return console.log("Item: ",item, " Posição: ", pos)
}

console.log(pesquisaSequencial(estradas, 1500))

var antes = Date.now();
pesquisaSequencial(estradas, 1500);
var duracao = Date.now() - antes;
console.log("Pesquisa Sequencial" + duracao + "ms");


//Binary Search

let estradas1 = [];
let start = 0;
let target = 100000;

for (let i=1;i <= 1500; i++){
    estradas1.push(i)
}

let end = estradas1.length -1;

console.log(estradas1)
function binarySearch (estradas1, start, end, target){
    if (start > end) return false;
    let midIndex = Math.floor((start+end)/2);
    console.log(estradas1[midIndex])
    if (estradas1[midIndex]===target)return true;
    if (estradas1[midIndex]>target) return binarySearch(stradas1, start,midIndex -1, target);
    else return binarySearch (estradas1, midIndex+1, end, target);

}
console.log(binarySearch(estradas1,start,end,target));

var antes2 = Date.now();
binarySearch(estradas1,start,end,target);
var duracao2 = Date.now() - antes;
console.log("Binary Search" + duracao + "ms");
