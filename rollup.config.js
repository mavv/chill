  import ts from 'rollup-plugin-typescript';

  export default {
    entry: './src/main.ts',
    dest: './dist/bundle.js',
    format: 'iife',
    plugins: [
      ts()
    ]
  }
