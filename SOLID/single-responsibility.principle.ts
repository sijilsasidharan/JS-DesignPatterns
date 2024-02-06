// A class should have single responsibility and it should have only one reason to change, reson being somehow related to the responsibility.

// Problem
class Journale {
    static count = 0;
    entries = {}
    constructor() { }

    addEntry(text) {
        let c = ++Journale.count;
        let entry = `${c}: ${text}`;
        this.entries[c] = entry;
        return c;
    }

    removeEmtry(index) {
        delete this.entries[index];
    }

    toString() {
        return Object.values(this.entries).join('\n');
    }

    /**
     * below second responsibility spoils the single responsibility principle.
     * To solve this we can introduce a new class called Persistance manager to solve the issue
     *  */
    // save(filename) {
    //     // save to file
    // }

    // load(filename) {
    //     // load file
    // }

    // loadFromUrl(url) {
    //     // load from url
    // }

}

class PersistanceManager {
    save(journal: Journale, Journale) {
        // save to file
    }

    load(journal: Journale, filename) {
        // load from file name
    }

    loadFromUrl(journal: Journale, url) {
        // load from url
    }
}

const j = new Journale();
j.addEntry('Journal 1');
j.addEntry('Journal 2');
j.addEntry('Journal 3');
console.log(j.toString());

const p = new PersistanceManager()
p.save(j, 'journal 1')