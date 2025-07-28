var textBox = document.getElementById('Calc-box');

const getValue = (value) => {
    // let operator =["+","-","*","/"];

    // var op = operator.find(item =>{
    //     if(item === value){
    //         return item;
    //     }
    // })
    // console.log("operator:" + op);
    textBox.value += value;
    

}

const getResult = ()=>{
    var num =textBox.value.split(/[+\-*/]/);
    // console.log(num);
    let op = textBox.value.match(/[+\-*/]/); //remember --> return array!
    // console.log(op);

    let result;
    let n1 = Number(num[0]);
    let n2 = Number(num[1]);

    if(op[0] === '+'){
        result = n1 + n2;
        // console.log(result);
        textBox.value = result;
    }

    else if(op[0] === '-'){
        result = n1 - n2;
        // console.log(result);
        textBox.value = result;
    }

    else if(op[0] === '*'){
        result = n1 * n2;
        // console.log(result);
        textBox.value = result;
    }

    else if(op[0] === '/'){
        result = n1 / n2;
        // console.log(result);
        textBox.value = result;
    }

    else
        result = n1;
}


const reset = ()=>{
    textBox.value = null;
}





// if (op[0] === '/'){
//     result = n1 / n2;
//     textBox.value = result;
    
//     if(op[0] === '*'){
//         result = n1 * n2;
//         textBox.value = result;

//         if(op[0] === '+'){
//             result = n1 + n2;
//             textBox.value = result;

//             if(op[0] === '-'){
//                 result = n1 - n2;
//                 textBox.value = result;
//             }
//         }
//     }
// }