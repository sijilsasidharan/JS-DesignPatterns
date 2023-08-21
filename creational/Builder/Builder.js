// Processors
const snapdragon = () => ({
    processor: 'Snapdragon'
});

const bionic = () => ({
    processor: 'Bionic'
});

// Display
const amoled = () => ({
    display: 'AMOLED'
});

const lcd = () => ({
    display: 'LCD'
})

// create mobile
const createMobile = (mobile) => ({
    mobile,
    addProcessor: function(processor) {
        this.mobile = { ...this.mobile, ...processor };
        return this;
    },
    addDisplay: function(display) {
        this.mobile = { ...this.mobile, ...display };
        return this;
    },
    display: function() {
        console.log(this.mobile)
    }
});

// Mobile
const samsung = createMobile({
        price: 300
    })
    .addProcessor(snapdragon())
    .addDisplay(amoled())

const apple = createMobile({
        price: 500
    })
    .addProcessor(bionic())
    .addDisplay(lcd())

console.log('samsung');
samsung.display()
console.log('apple');
apple.display();
