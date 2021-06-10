class customer{
    Name:string
    Age:number
    Gender:string
    constructor(name:string,age:number,gender:string){
        this.Name=name
        this.Age=age
        this.Gender=gender
    }
    getCustInfo(){
        return `Your name is ${this.Name} \n Age is ${this.Age}\n and gender is ${this.Gender}`
    }

}

let cust1= new customer('Teena',21,'Female')
let cust2= new customer('suresh',22,'Male')
console.log(cust1.getCustInfo())
