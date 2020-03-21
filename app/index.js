import ArrayHolder from "./modules/array-holder.js";
import Animal from "./modules/animal.ts";
import * as UIComponents from "./modules/ui-components.ts";

const arrayHolder = new ArrayHolder([1, 2, 3]);
const animal = new Animal("cat");

console.log("JS works!", arrayHolder, animal);

const radioButton = new UIComponents.RadioButton(100, 20, "test");
radioButton.enableEvents(true);
console.log(radioButton);
