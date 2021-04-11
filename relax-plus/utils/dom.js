export function on(target, event, fn) {
  if (target && event && fn) {
    target.addEventListener(event, fn)
  }
}

export function off(target, event, fn) {
  if (target && event && fn) {
    target.removeEventListener(event, fn)
  }
}

export function remove(target, className) {
  if (target && className) {
    target.classList.remove(className)
  }
}

export function add(target, className) {
  if (target && className) {
    target.classList.add(className)
  }
}
