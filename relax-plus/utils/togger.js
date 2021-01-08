import { onMounted, ref, getCurrentInstance, reactive, onUnmounted } from 'vue';

export default function useToggle(){
  const rect = reactive({})
  const trigger = ref(null)
  const isShow = ref(false)
  const currentInstance = getCurrentInstance()
  const clientHeight = document.documentElement.clientHeight

  let elHeight = 0
  let top1 = 0
  let top2 = 0
  let parent = null

  const focus = (e) => {
    parent = e.target
    const el = e.target.getBoundingClientRect()
    const scrollTop = document.documentElement.scrollTop
    const parentHeight = el.top + el.height

    top1 = parentHeight + scrollTop
    top2 = top1 - elHeight - el.height - 5
 
    const top = parentHeight + elHeight > clientHeight ? top2 : top1
    rect.transformOrigin = parentHeight + elHeight > clientHeight ? 'center bottom' : 'center top'
    rect.top = top + 'px'
    rect.left = el.left + 'px'
    rect.minWidth = el.width + 'px'
    rect.minHeight = elHeight + 'px'
  }
  
  const show = () => {
    isShow.value = true
  }
  const hide = () => {
    isShow.value = false
  }
  const toggle = () => {
    if (isShow.value) {
      hide();
    } else {
      show();
    }
  }
  
  const isHide = (e) => {
    const el = currentInstance.vnode.el
    if (!el.contains(e.target)) {
      hide()
    }
  }

  onMounted(() => {
    const el = trigger.value
    el.style.top = "-100%"
    el.style.display = "block"
    elHeight = el.offsetHeight
    el.style.top = ""
    el.style.display = "none"
    
    window.addEventListener('scroll', () => {
      if(isShow.value && parent) {
        const Rect = parent.getBoundingClientRect()
        const scrollTop = document.documentElement.scrollTop

        if(Rect.top + Rect.height + elHeight > clientHeight){
          rect.top = top2 + 'px'
          rect.transformOrigin = 'center bottom'
        } else {
          rect.top = top1 + 'px'
          rect.transformOrigin = 'center top'
        }
      }
    })

    document.addEventListener("click", isHide)
  })

  onUnmounted(() => {
    document.removeEventListener("click", isHide)
  })

  return {
    rect,
    trigger,
    focus,
    toggle,
    isShow,
    hide,
  }
}