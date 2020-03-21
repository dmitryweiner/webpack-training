export default class ArrayHolder {

    constructor(initialArray = []) {
        this.arrayStore = initialArray;
    }

    set(array) {
        this.arrayStore = array;
    }
	
	get() {
		return this.arrayStore;
	}

    clear() {
        this.arrayStore = [];
    }

    getElementByIndex(index) {
        return this.arrayStore[index];
    }

    removeElementByIndex(index) {
        return this.arrayStore.slice(index, 1);
    }

    sum() {
        return this.arrayStore.reduce((a, b) => a + b);
    }

    average() {
        return this.sum() / this.arrayStore.length;
    }

    geometricMean() {
        return Math.pow(this.sum(), 1 / this.arrayStore.length);
    }

    min() {
        return Math.min(...this.arrayStore);
    }

    max() {
        return Math.max(...this.arrayStore);
    }
};