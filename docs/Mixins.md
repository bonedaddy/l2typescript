# Table of contents

[Introduction](#introduction)

[Mixin sample](#mixin-sample)

[Understanding the sample](#understanding-the-sample)

# Introduction
<b><a href="#table-of-contents">↥ back to top</a></b>

Along with traditional OO hierarchies, another popular way of building up classes from reusable components is to build them by combining simpler partial classes.
You may be familiar with the idea of mixins or traits for languages like Scala, and the pattern has also reached some popularity in the JavaScript community.

# Mixin sample
<b><a href="#table-of-contents">↥ back to top</a></b>

In the code below, we show how you can model mixins in TypeScript.
After the code, we'll break down how it works.

```ts
// Disposable Mixin
class Disposable {
    isDisposed: boolean;
    dispose() {
        this.isDisposed = true;
    }

}

// Activatable Mixin
class Activatable {
    isActive: boolean;
    activate() {
        this.isActive = true;
    }
    deactivate() {
        this.isActive = false;
    }
}

class SmartObject {
    constructor() {
        setInterval(() => console.log(this.isActive + " : " + this.isDisposed), 500);
    }

    interact() {
        this.activate();
    }
}

interface SmartObject extends Disposable, Activatable {}
applyMixins(SmartObject, [Disposable, Activatable]);

let smartObj = new SmartObject();
setTimeout(() => smartObj.interact(), 1000);

////////////////////////////////////////
// In your runtime library somewhere
////////////////////////////////////////

function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name));
        });
    });
}
```

# Understanding the sample
<b><a href="#table-of-contents">↥ back to top</a></b>

The code sample starts with the two classes that will act as our mixins.
You can see each one is focused on a particular activity or capability.
We'll later mix these together to form a new class from both capabilities.

```ts
// Disposable Mixin
class Disposable {
    isDisposed: boolean;
    dispose() {
        this.isDisposed = true;
    }

}

// Activatable Mixin
class Activatable {
    isActive: boolean;
    activate() {
        this.isActive = true;
    }
    deactivate() {
        this.isActive = false;
    }
}
```

Next, we'll create the class that will handle the combination of the two mixins.
Let's look at this in more detail to see how it does this:

```ts
class SmartObject {
    ...
}

interface SmartObject extends Disposable, Activatable {}
```

The first thing you may notice in the above is that instead of trying to extend `Disposable` and `Activatable` in `SmartObject` class, we extend them in `SmartObject` interface. `SmartObject` interface will be mixed into the `SmartObject` class due to the [declaration merging](./Declaration%20Merging.md).

This treats the classes as interfaces, and only mixes the types behind Disposable and Activatable into the SmartObject type rather than the implementation. This means that we'll have to provide the implementation in class.
Except, that's exactly what we want to avoid by using mixins.

Finally, we mix our mixins into the class implementation.

```ts
applyMixins(SmartObject, [Disposable, Activatable]);
```

Lastly, we create a helper function that will do the mixing for us.
This will run through the properties of each of the mixins and copy them over to the target of the mixins, filling out the stand-in properties with their implementations.

```ts
function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name));
        });
    });
}

```
