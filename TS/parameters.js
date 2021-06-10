var Parameter = /** @class */ (function () {
    function Parameter() {
    }
    Parameter.prototype.optional_para = function (name, age) {
        console.log("Your name: " + name);
        console.log("Age: " + age);
    };
    Parameter.prototype.default_para = function (name, dob) {
        if (dob === void 0) { dob = 2000; }
        console.log("Your name: " + name);
        console.log("your dob: " + dob);
    };
    Parameter.prototype.rest_para = function (name) {
        var food = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            food[_i - 1] = arguments[_i];
        }
        console.log("your name: " + name);
        console.log("food list: " + food);
    };
    return Parameter;
}());
var a = new Parameter();
a.optional_para("nick");
a.optional_para("nick", 20);
a.default_para("Reena");
a.default_para("Reena", 1998);
a.rest_para("nick");
a.rest_para("nick", "biryani", "deserts");
