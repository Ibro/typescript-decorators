export function log(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) {
    // save a reference to the original method
    let originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        // pre
        console.log('The method args are: ' + JSON.stringify(args));

        // run and store the result
        let result = originalMethod.apply(this, args);

        // post
        console.log('The return value is: ' + result);

        // return the result of the original method
        return result;
    };

    return descriptor;
}