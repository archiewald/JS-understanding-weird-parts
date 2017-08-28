function a() {
    console.log(this);
    this.newvariable = 'hello';
}

var b = function() {
    console.log(this);
}

a();

console.log(newvariable);
b();

var c = {
    name: "The c object",
    log: function() {

        var self = this;

        self.name = "Updated c object";
        console.log(self);

        var setname = function(newname) {
            self.name = newname;
        }

        setname("update it again the c object");
        console.log(self);
    }
}


c.log();