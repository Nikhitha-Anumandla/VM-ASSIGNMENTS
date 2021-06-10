var eBank = /** @class */ (function () {
    function eBank(name, age, gender) {
        this.eName = name;
        this.eAge = age;
        this.eGender = gender;
    }
    eBank.prototype.details = function () {
        return "your name is " + this.eName + " and your age is " + this.eAge + " and gender " + this.eGender;
    };
    eBank.prototype.activities = function () {
        return this.eName + " can play music";
        console.log('${this.eName} can sing');
    };
    return eBank;
}());
var a = new eBank("Nick", 20, "Female");
var b = new eBank("Anand", 21, "Male");
console.log(a.eName);
console.log(b.eName);
console.log(a.details());
console.log(b.details());
console.log(a.activities());
