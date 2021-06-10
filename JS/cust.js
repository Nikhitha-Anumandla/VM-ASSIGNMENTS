var customer={
    custId:1,
    custName:"Nick",
    function1()
    {
        return (`Your id is ${this.custId} and your name is ${this.custName}`)
    }
}
console.log(customer.function1())