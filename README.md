![CoreFunc V8](https://raw.githubusercontent.com/corefunc/v8/master/.github/assets/logo_128.png?raw=true "CoreFunc V8")

# CoreFunc V8

🇻8️ JavaScript V8 engine specific utilities.

[![NPM Version][npm-version-img]][npm-version-url]
[![NPM Downloads][npm-downloads-img]][npm-downloads-url]
[![TypeScript Typings][ts-img]][ts-url]

## API Reference

### Clone

```javascript
import { clone } from "@corefunc/v8/clone/clone";

const obj = { prop: "original" };
const array = [obj];
const clonedArray = clone(array);

array[0].prop = "changed";

// [ { prop: 'changed' } ]
console.log(array);
// [ { prop: 'original' } ]
console.log(clonedArray);
```

```javascript
import { clone } from "@corefunc/v8/clone/clone";

class Omega {
  x = 1;
  y = 2;
}
const omegaOne = new Omega();
const omegaTwo = clone(omegaOne, true);

omegaOne.x = -10;

// Omega { x: -10, y: 2 }
console.log(omegaOne);
// Omega { x: 1, y: 2 }
console.log(omegaTwo);
```

```javascript
import { clone } from "@corefunc/v8/clone/clone";

const obj = { prop: "original" };
const setOriginal = new Set([obj]);
const setCloned = clone(setOriginal);

obj.prop = "changed";

// Set(1) { { prop: 'changed' } }
console.log(setOriginal);
// Set(1) { { prop: 'original' } }
console.log(setCloned);
```

```javascript
import { clone } from "@corefunc/v8/clone/clone";

const obj = { prop: "here is my password" };
const mapFirst = new Map([["secret", obj]]);
const mapSecond = clone(mapFirst);
const secret = mapFirst.get("secret");

secret.prop = "there is no secret anymore";

// Map(1) { 'secret' => { prop: 'there is no secret anymore' } }
console.log(mapFirst);
// Map(1) { 'secret' => { prop: 'here is my password' } }
console.log(mapSecond);
```

```javascript
import { clone } from "@corefunc/v8/clone/clone";
const alpha = new Error(`Just error`);
const beta = clone(alpha);

alpha.message = `Now it's not`;

// `Now it's not`
console.log(alpha.message);
// `Just error`
console.log(beta.message);
```

### Clone Marshalling

```javascript
import {
  cloneMarshalling,
} from "@corefunc/v8/clone/clone-marshalling";

class Omega {
  x = 1;
  y = 2;
}
const omegaOne = new Omega();
const omegaTwo = cloneMarshalling(omegaOne);

omegaOne.x = -10;

// Omega { x: -10, y: 2 }
console.log(omegaOne);
// Omega { x: 1, y: 2 }
console.log(omegaTwo);
```

### Clone Shallow

```javascript
import {
  cloneShallow,
} from "@corefunc/v8/clone/clone-shallow";

class Omega {
  x = 1;
  y = 2;
}
const omegaOne = new Omega();
const omegaTwo = cloneShallow(omegaOne);

omegaOne.x = -10;

// Omega { x: -10, y: 2 }
console.log(omegaOne);
// { x: 1, y: 2 }
console.log(omegaTwo);
```

### Deserialize

```javascript
import {
  deserializeFromString,
} from "@corefunc/v8/deserialize/from-string";

class Omega {
  x = 1;
  y = 2;
}
const binaryString = `ÿ\ro"\x01xI\x02"\x01yI\x04{\x02`;
const obj = deserializeFromString(binaryString);
const omega = deserializeFromString(binaryString, Omega);

// { x: 1, y: 2 }
console.log(obj);
// Omega { x: 1, y: 2 }
console.log(omega);
```

### Serialize

```javascript
import {
  serializeToString,
} from "@corefunc/v8/serialize/to-string";

class Omega {
  x = 1;
  y = 2;
}
const omega = new Omega();
const binaryString = serializeToString(omega);

// `ÿ\ro"\x01xI\x02"\x01yI\x04{\x02`
console.log(binaryString);
```

## See also

[💾 My other projects](https://r37r0m0d3l.icu/open_source_map)

<img alt="Open Source" src="https://raw.githubusercontent.com/r37r0m0d3l/r37r0m0d3l/master/osmap.svg?sanitize=true" width="960" height="520" style="display:block;height:auto;margin-left:auto;margin-right:auto;min-height:520px;min-width:960px;width:100%;">


<!-- Badges -->

[npm-version-url]: https://npmjs.com/package/@corefunc/v8
[npm-version-img]: https://badgen.net/npm/v/@corefunc/v8?&icon=npm&label=npm&color=DD3636
[npm-downloads-url]: https://npmjs.com/package/@corefunc/v8
[npm-downloads-img]: https://badgen.net/npm/dt/@corefunc/v8?&icon=terminal&label=downloads&color=009688
[ts-url]: https://github.com/corefunc/v8/blob/master/index.d.ts
[ts-img]: https://badgen.net/npm/types/@corefunc/v8?&icon=typescript&label=types&color=1E90FF
