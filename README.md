# chain-decorator

Simple ES7 Decorator to allow methods chaining.


## Installation

yarn

```sh
yarn add chain-decorator
```

npm

```sh
npm i -S chain-decorator
```

## Usage
```javascript
import { chain } from 'chain-decorator';

class A {
  @chain
  foo() {
    console.log('foo')
  }
}


new A().foo().foo();
```
