cust_details={
    cId:13,
    cName:"Nikhitha",
    cAcnum:1100,
    savingDeposit(){
        var sav=250000
        console.log("your balance is "+sav)
    },
    recurringDeposit(){
        var amount=25000
        var Intrst= 0.5*amount;
        console.log(`Your id ${this.cId} and intrest for recurring desposit is ${Intrst} `)
    },
    acntDetails(){
        console.log(cust_details.cId,cust_details.cName)
    }
}
cust_details.savingDeposit()
cust_details.recurringDeposit()
cust_details.acntDetails()