<p align="center">
  <img src="logo.svg" alt="vue-ref-default" width="180" />
</p>

<h1 align="center">vue-ref-default</h1>

<p align="center"></p>

<p align="center">
  <a href="https://www.npmjs.com/package/vue-ref-default"><img src="https://img.shields.io/npm/v/vue-ref-default.svg" alt="npm version" /></a>
  <a href="https://www.npmjs.com/package/vue-ref-default"><img src="https://img.shields.io/npm/dm/vue-ref-default.svg" alt="npm downloads" /></a>
</p>

## Installation

```bash
npm install vue-ref-default
```

## Usage

> **Note:** This example has been hand-crafted for clarity. Original example requires useStorage which isn't in this standalone package

```ts
import { refDefault } from 'vue-ref-default'
import { ref } from 'vue'

const raw = ref<string | undefined>()
const state = refDefault(raw, 'default')

raw.value = 'hello'
console.log(state.value) // hello

raw.value = undefined
console.log(state.value) // default
```

## License

MIT

Extracted from [VueUse](https://vueuse.org/) for standalone use.
