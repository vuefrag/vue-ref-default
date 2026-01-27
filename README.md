<p align="center">
  <img src="logo.svg" alt="vue-ref-default" width="180" />
</p>

<h1 align="center">vue-ref-default</h1>

<p align="center">A Vue 3 composition API utility that wraps a ref with a computed property returning a default value when the source is null or undefined. Supports both read and write operations.</p>

<p align="center">
  <a href="https://www.npmjs.com/package/vue-ref-default"><img src="https://img.shields.io/npm/v/vue-ref-default.svg" alt="npm version" /></a>
  <a href="https://www.npmjs.com/package/vue-ref-default"><img src="https://img.shields.io/npm/dm/vue-ref-default.svg" alt="npm downloads" /></a>
  <a href="https://github.com/vuefrag/vue-ref-default/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/vue-ref-default.svg" alt="license" /></a>
</p>

> Extracted from [VueUse](https://vueuse.org/) for standalone use.

## Installation

```bash
npm install vue-ref-default
```

## Usage

```ts
import { refDefault } from 'vue-ref-default';
```

Apply default value to a ref.

```ts
import { refDefault, useStorage } from 'vue-ref-default'

const raw = useStorage('key')
const state = refDefault(raw, 'default')

raw.value = 'hello'
console.log(state.value) // hello

raw.value = undefined
console.log(state.value) // default
```

## License

MIT
