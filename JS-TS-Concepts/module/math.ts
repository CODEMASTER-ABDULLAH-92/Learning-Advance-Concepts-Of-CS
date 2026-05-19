export function add(...number:number[]):number{
    let sum = 0;
    for(let i of number){
        sum+= i
    }
    return sum;
}

export function subtract(...number:number[]):number{
    let minus = 0;
    for (let i of number){
        minus -= i
    }
    return minus
}
