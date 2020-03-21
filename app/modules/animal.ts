export default class Animal {
	name: string;

	constructor(name) {
		this.name = name;
	}
	
	getName(): string {
		return this.name;
	}
	
}