var customer = /** @class */ (function () {
    function customer(name, age, gender) {
        this.Name = name;
        this.Age = age;
        this.Gender = gender;
    }
    customer.prototype.getCustInfo = function () {
        return "Your name is " + this.Name + " \n Age is " + this.Age + "\n and gender is " + this.Gender;
    };
    return customer;
}());
var cust1 = new customer('Teena', 21, 'Female');
var cust2 = new customer('suresh', 22, 'Male');
console.log(cust1.getCustInfo());
