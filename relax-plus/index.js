import { version } from '../package.json'
import { isObject, isFunction } from './utils/isType'
import './theme/relax.less'
const ctx = require.context('./package', true, /\index.js$/)

const RegName = /(?<=\.\/).*?(?=\/index.js)/
const components = {}
const api = {}

for (const path of ctx.keys()) {
  const file = ctx(path).default
  applyComponentsCode(file)
  applyComponentsApi(file, path)
}

function applyComponentsCode(file) {
  if (isObject(file)) {
    const key = file.name
    components[key] = file
  }
}

function applyComponentsApi(file, path) {
  if (isFunction(file)) {
    const name = path.match(RegName)
    const key = name && name[0].replace(/-(\w)/g, ($, $1) => $1.toUpperCase())
    api[key] = file
  }
}

function install(app) {
  Object.keys(components).forEach((key) => {
    const component = components[key]
    app.component('x' + component.name, component)
  })
  applyOptions(app)
}

function applyOptions(app) {
  Object.keys(api).forEach((key) => {
    app.config.globalProperties[`$${key}`] = api[key]
  })
  app.config.globalProperties[`$modal`] = components['Modal']
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const RelaxPlus = {
  version,
  install,
  ...components,
}

export default RelaxPlus
