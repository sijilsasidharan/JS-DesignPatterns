// A class should have single responsibility and it should have only one reason to change, reson being somehow related to the responsibility.
var Journale = /** @class */ (function () {
    function Journale() {
        this.entries = {};
    }
    Journale.prototype.addEntry = function (text) {
        var c = ++Journale.count;
        var entry = "".concat(c, ": ").concat(text);
        this.entries[c] = entry;
        return c;
    };
    Journale.prototype.removeEmtry = function (index) {
        delete this.entries[index];
    };
    Journale.prototype.toString = function () {
        return Object.values(this.entries).join('\n');
    };
    Journale.count = 0;
    return Journale;
}());
var j = new Journale();
j.addEntry('Journal 1');
j.addEntry('Journal 2');
j.addEntry('Journal 3');
console.log(j.toString());
