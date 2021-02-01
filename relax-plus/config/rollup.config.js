import pkg from '../../package.json'
import vue from 'rollup-plugin-vue';
import {uglify} from "rollup-plugin-uglify";
import babel from 'rollup-plugin-babel';
import path from 'path'
import json from '@rollup/plugin-json'

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
      banner: createBanner(),
      format: 'umd',
      name: 'RelaxPlus',
      file: path.resolve('lib/relax.min.js')
  },
  plugins: [
    json(),
    vue(),
    babel({
      runtimeHelpers: true,
      exclude: "node_modules/**"
    }),
    uglify()
  ]
}
