class eBank{
    eName: string;
    eAge: number;
    eGender: string;
    constructor(name:string,age:number,gender:string){
        this.eName=name;
        this.eAge=age;
        this.eGender=gender;
    }
    details(){
        return `your name is ${this.eName} and your age is ${this.eAge} and gender ${this.eGender}`
    }
    activities(){
        return `${this.eName} can play music`
    }
}
var a = new eBank("Nick",20,"Female");
var b = new eBank("Anand",21,"Male");
console.log(a.eName);
console.log(b.eName);
console.log(a.details());
console.log(a.activities());
console.log(b.details());
