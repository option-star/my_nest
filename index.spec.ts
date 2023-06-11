import { Container } from "./";
let container = new Container();
const point = {x: 10, y: 10};
class BasicClass{};
container.addProvider({provider: BasicClass, useClass: BasicClass});
container.addProvider({provider: BasicClass, useValue: new BasicClass()});
container.addProvider({provider: BasicClass, useFactory: () => new BasicClass()});
console.log(container.providers);

