import { getCurrentInstance } from 'vue'
import mitt from './mitt'

const emitter = mitt()
const wrapper = Symbol('wrapper')

const useEmit = function() {
  const currentComponentInstance = getCurrentInstance()

  function on(type, fn) {
    const event = (e) => {
      const { type, emitComponentInstance, value } = e

      if (type === 'dispatch') {
        if (isChildComponent(emitComponentInstance, currentComponentInstance)) {
          fn && fn(...value)
        }
      } else if (type === 'broadcast') {
        if (isChildComponent(currentComponentInstance, emitComponentInstance)) {
          fn && fn(...value)
        }
      } else {
        fn && fn(...value)
      }
    }

    event[wrapper] = fn
    emitter.on(type, event)
  }

  function dispatch(type, ...args) {
    emitter.emit(type, {
      type: 'dispatch',
      emitComponentInstance: currentComponentInstance,
      value: args,
    })
  }

  function broadcast(type, ...args) {
    emitter.emit(type, {
      type: 'broadcast',
      emitComponentInstance: currentComponentInstance,
      value: args,
    })
  }

  return {
    on,
    dispatch,
    broadcast,
  }
}

function isChildComponent(componentChild, componentParent) {
  const parentUId = componentParent.uid
  while (componentChild && componentChild?.parent?.uid !== parentUId) {
    componentChild = componentChild.parent
  }
  return Boolean(componentChild)
}

export default useEmit
