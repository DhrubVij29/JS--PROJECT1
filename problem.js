const massMark=78;
const heightMark=1.69;
const massjohn=92;
const heightjohn=1.95;

const bmiMark=massMark/(heightMark*heightMark);

const bmiJohn=massjohn/(heightjohn*heightjohn);

console.log(bmiMark,bmiJohn);

    if(bmiMark>bmiJohn){
        console.log(`Mark's' ${bmiMark} BMI is higher than John's ${bmiJohn}!`);
    }else{
        console.log(`John's' ${bmiJohn} BMI is higher than Mark's ${bmiMark}!`);
    }
 


