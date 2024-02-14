//  generating HTML tag

// Problem
// create a 'p' tag
const hello = 'Hello';
let html = [];
html.push('<p>');
html.push(hello);
html.push('</p>');

console.log(html.join(''));

// create a 'ul' tag
const words = ['hello', 'world'];
html = [];
html.push(`<ul>\n`);
for (const word of words) {
    html.push(` <li>${word}</li>\n`);
}
html.push(`</ul>`);

console.log(html.join(''));

// In large scale apps the above scenario is not possible
// Solution

class Tag {

    static get indentSize() { return 2; }

    constructor(name = '', text = '') {
        this.name = name;
        this.text = text;
        this.children = [];
    }

    toStringImpl(indent) {
        let html = [];
        let i = ' '.repeat(indent * Tag.indentSize);
        html.push(`${i}<${this.name}>\n`);
        if (this.text.length) {
            html.push(' '.repeat(Tag.indentSize * (indent + 1)));
            html.push(this.text);
            html.push('\n');
        }

        for (let child of this.children) {
            html.push(child.toStringImpl(indent + 1));
        }

        html.push(`${i}</${this.name}>\n`);
        return html.join('')
    }

    toString() {
        return this.toStringImpl(0);
    }
}

class HtmlBuilder {
    constructor(rootName) {
        this.root = new Tag(rootName);
        this.rootName = rootName;
    }

    addChild(childName, childText) {
        let build = new Tag(childName, childText);
        this.root.children.push(build);
        return this;
    }

    toString() {
        return this.root.toString();
    }

    build() {
        return this.root;
    }

    clear() {
        this.root = new Tag(this.rootName)
    }
}

let builder = new HtmlBuilder('ul');
for (const word of words) {
    builder.addChild('li', word);
}
console.log(builder.root.toString());

builder.clear();

builder
    .addChild('li', 'foo')
    .addChild('li', 'bar')
    .addChild('li', 'asd')


    console.log(builder.root.toString());
