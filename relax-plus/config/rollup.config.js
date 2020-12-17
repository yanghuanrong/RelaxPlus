import vue from 'rollup-plugin-vue';
import path from 'path'
export default {
  input: path.resolve('relax-plus/package/index.js'),
  output: {
      format: 'umd',
      name: 'RelaxPlus',
      file: path.resolve('relax-plus/dist/RelaxPlus.js')
  },
  plugins: [
    vue(),
]
}