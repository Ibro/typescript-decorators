import { log } from './decorators';

class Test {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    @log
    public appendTextToName(text: string) {
        this.name += text;
        return this.name;
    }
}

let test = new Test('John');
test.appendTextToName(' Wick');


