import { log, a, b, c } from './decorators';

class Test {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    @a()
    @b()
    @c()
    public appendTextToName(text: string) {
        this.name += text;
        return this.name;
    }
}

let test = new Test('John');
test.appendTextToName(' Wick');


