import vue from 'rollup-plugin-vue';

export default {
  input: 'packages/index.js',
  output: {
      format: 'umd',
      name: 'RelaxPlus',
      file: 'lib/RelaxPlus.js'
  },
  plugins: [
    vue(),
]
}