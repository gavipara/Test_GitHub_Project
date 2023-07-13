Type.registerNamespace("Tutorial.Chapter1");
Tutorial.Chapter1.Person = function(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
};
Tutorial.Chapter1.Person.prototype = {
        set_firstName: function(value) {
            this._firstName = value;
        },
        get_firstName: function() {
            return this._firstName;
        },
        set_lastName: function(value) {
            this._lastName = value;
        },
        get_lastName: function() {
            return this._lastName;
        },
        _firstName: "",
        _lastName: "",
        displayName: function() {
            alert("Hi! " + this._firstName + " " + this._lastName);
        }
    };
Tutorial.Chapter1.Person.registerClass("Tutorial.Chapter1.Person", null);
