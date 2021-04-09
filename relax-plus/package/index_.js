import { version } from '../../package.json'

// General
import Button from './button/index'
import Icon from './icon/index'
import Tooltip from './tooltip/index'

// Feedback
import Message from './message/index'
import Notice from './notice/index'
import modal from './modal/index'

// Layout
import Row from './row/index'
import Col from './col/index'

// Data Entry
import Switch from './switch/index'
import Checkbox from './checkbox/index'
import CheckboxGroup from './checkbox-group/index'
import Input from './input/index'
import Select from './select/index'
import SelectOption from './select-option/index'
import Slider from './slider/index'
import DatePicker from './date-picker/index'
import Radio from './radio/index'
import RadioGroup from './radio-group/index'

// Data Display
import Calendar from './calendar/index'
import Carousel from './carousel/index'
import CarouselItem from './carousel-item/index'
import Tabs from './tabs/index'
import TabPane from './tab-pane/index'
import Badge from './badge/index'

// Others
import Scroll from './scroll/index'

// Navigation
import Menu from './menu/index'
import SubMenu from './sub-menu/index'
import MenuItem from './menu-item/index'
import MenuItemGroup from './menu-item-group/index'

const { Modal, Modals } = modal

const components = [
  Button,
  Icon,
  Switch,
  Row,
  Col,
  Checkbox,
  CheckboxGroup,
  Input,
  Select,
  SelectOption,
  Modal,
  Tooltip,
  Slider,
  Calendar,
  DatePicker,
  Carousel,
  CarouselItem,
  Tabs,
  TabPane,
  Badge,
  Scroll,
  Radio,
  RadioGroup,
  Menu,
  MenuItem,
  SubMenu,
  MenuItemGroup,
]

const install = function(app) {
  components.forEach((component) => {
    app.component('x' + component.name, component)
  })

  applyOptions(app)
}

function applyOptions(app) {
  app.config.globalProperties.$message = Message
  app.config.globalProperties.$notice = Notice
  app.config.globalProperties.$modal = Modals
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
