import element from './notice.vue'
import {createComponent} from '../../utils/component'


let NoticeWrap
function createNoticeWrap() {
  const NoticeWrap = document.createElement('div')
  NoticeWrap.className = 'x-notice-wrap'
  document.body.appendChild(NoticeWrap)
  return NoticeWrap
}

function noticeCreate(props, type) {
  if(!props.title){
    return
  }
  if(type){
    props.type = type
  }

  if (!NoticeWrap) {
    NoticeWrap = createNoticeWrap()
  }
  const component = createComponent(element, props)
  NoticeWrap.appendChild(component.vnode.el)
}


function noitce (props){
  noticeCreate(props)
}

;['info','error', 'success', 'warning'].forEach((type) => {
  noitce[type] = (props) => noticeCreate(props, type)
})


export default noitce