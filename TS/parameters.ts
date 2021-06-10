class Parameter{
    optional_para(name:string,age?:number){//optional para
        console.log("Your name: "+name)
        console.log(`Age: ${age}`)
    }
    default_para(name:string,dob=2000){
        console.log("Your name: "+name)
        console.log(`your dob: ${dob}`)
    }
    rest_para(name:string,...food:string[]){
        console.log(`your name: ${name}`)
        console.log(`food list: ${food}`)
    }
}
var a=new Parameter()
a.optional_para("nick")
a.optional_para("nick",20)
a.default_para("Reena")
a.default_para("Reena",1998)
a.rest_para("nick")
a.rest_para("nick","biryani","deserts")