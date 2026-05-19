let myPromise = new Promise((resolve,reject)=>{
    let result:boolean = true
    if (result) {
        resolve("Promise Resolved")
    }else{
        reject("promise is rejected")
    }
})
myPromise.then((data)=>console.log(data))
.catch((data)=> console.log(data))

function delay(ms:number){
    return new Promise((_,reject)=>{
        setTimeout(()=>{
            reject("Promise is rejected")
        },ms)
    })
}
delay(2000).then((data)=>console.log(data))


//========================
// Promise with Types
//========================


function getNumber():Promise<number>{

    return new Promise((resolve,reject)=>{
        resolve(100)
    })
}

getNumber()
.then(data => console.log(data))

Promise<string>
Promise<number>
Promise<boolean>