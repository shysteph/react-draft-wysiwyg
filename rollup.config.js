import visualizer from 'rollup-plugin-visualizer';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import autoprefixer from 'autoprefixer';
import precss from 'precss';
import babel from 'rollup-plugin-babel';

import pkg from './package.json';

var externalDeps = Object.keys(Object.assign({}, pkg.dependencies, pkg.peerDependencies));
var nodeDeps = ['path'];
var external = externalDeps.concat(nodeDeps);
console.dir(external);

const babelRc = {
  exclude: 'node_modules/**'
};

export default {
  input: 'src/index.js',
  external: external,
  output: {
    name: 'reactDraftWysiwyg',
    file: pkg.main,
    format: 'umd',
    sourcemap: true,
  },
  plugins: [
    postcss({
      extensions: ['.css'],
      extract: true,
    }),
    resolve({
      extensions: ['.js'],
    }),
    commonjs(),
    babel(babelRc),
    visualizer(),
  ]
};
