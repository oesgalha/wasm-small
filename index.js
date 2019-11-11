

const rust = import('./pkg/wasm_small');

rust
  .then(m => m.greet("" + m.add(10, 22)))
  .catch(console.error);
