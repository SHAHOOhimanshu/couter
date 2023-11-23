const countValue=document.getElementById('counter');

function increment(){
    //fetch code as string and convert into in int then store result in value(variable)
    let value=parseInt(countValue.innerText);

    value=value+1;

    //first convert code 
    countValue.innerText=value;

};

function decrement(){
    let value=parseInt(countValue.innerText);

    value=value-1;

    countValue.innerText=value;
};