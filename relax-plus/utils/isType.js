export const isNull = (targe) => toString.call(targe) === '[object Null]'
export const isObject = (targe) => toString.call(targe) === '[object Object]'
export const isNumber = (targe) => toString.call(targe) === '[object Number]'
export const isString = (targe) => toString.call(targe) === '[object String]'
export const isUndefined = (targe) =>
  toString.call(targe) === '[object Undefined]'
export const isBoolean = (targe) => toString.call(targe) === '[object Boolean]'
export const isArray = (targe) => toString.call(targe) === '[object Array]'
export const isFunction = (targe) =>
  toString.call(targe) === '[object Function]'
