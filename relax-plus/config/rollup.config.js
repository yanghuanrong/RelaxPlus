import path from 'path'
import pkg from '../../package.json'
import vue from 'rollup-plugin-vue';
import babel, { getBabelOutputPlugin } from '@rollup/plugin-babel';
import json from '@rollup/plugin-json'
import { terser } from 'rollup-plugin-terser'

const createBanner = () => {
  const time = new Date().toLocaleDateString()
  return `/*!
  * ${pkg.name} v${pkg.version}
  * author ${pkg.author}
  * updated date ${time}
  */`
}

export default {
  input: path.resolve('relax-plus/package/index.js'),
  output: {
      format: 'esm',
      name: 'RelaxPlus',
      file: path.resolve('lib/relax.min.js'),
      plugins: [getBabelOutputPlugin({ presets: ['@babel/preset-env'] })],
      banner: createBanner()
  },
  plugins: [
    vue(),
    json(),
    terser({ compress: { drop_console: true } })
  ]
}
