<template>
  <div class="x-date-edit">
    <Input 
      readonly 
      :placeholder="placeholder"
      icon-before="x-icon-calendar" 
      v-model="state"
      @click.prevent="toggle"
      :class="{
        'is-focus': isShow,
        'is-blur': !isShow,
      }"
      :disabled="disabled"
      clearable
      block
      @focus="focus"
    />

    <teleport to="body">
      <transition name="scaleY" ref="trigger">
        <div class="x-trigger x-datePicker" @click.stop :style="rect" v-show="isShow">
          <div class="x-datePicker-head">
            <div class="x-datePicker-btn">
              <span class="x-icon-chevrons-left"  @click="changePrevYear"></span>
              <span class="x-icon-chevron-left"  @click="changePrevMonth"></span>
            </div>
            <span>
              {{head}}
            </span>
            <div class="x-datePicker-btn" >
              <span class="x-icon-chevron-right" @click="changeNextMonth"></span>
              <span class="x-icon-chevrons-right" @click="changeNextYear"></span>
            </div>
          </div>

          <div class="x-datePicker-group">
            <div class="x-datePicker-week" v-for="item in week">
              {{item}}
            </div>
            <div class="x-datePicker-cell" 
              :title="`${item.y}年${item.m}月${item.d}日`"
              v-for="item in cell"
              :class="[
                item.class,
                {
                  today: today(item),
                  active: isAactiveDay(item),
                }
              ]"
              @click="changeDay(item), clickDay(item)"
            >
              <div class="x-datePicker-cell__box">{{ item.d }}</div>
            </div>
          </div>
          <div class="x-calendar-foot" v-if="!onetap">
            <div class="x-calendar-quick">
              <Button type="text" size="sm" @click="changeToday">今天</Button>
            </div>
            <Button type="primary" size="sm" @click="changeClickDay">确定</Button>
          </div>
        </div>
      </transition>
    </teleport>
  </div>
</template>

<script>
import { nextTick, ref, toRefs, watch } from 'vue';
import Input from '../input/index'
import useToggle from '../../utils/togger'
import useCalendar from '../../utils/calendar';
import Button from '../button/button.vue';

export default {
  name: 'DatePicker',
  components: {
    Input,
    Button
  },
  props: {
    modelValue: String,
    placeholder: String,
    onetap: Boolean,
    disabled: Boolean
  },
  setup(props, {emit}){
    const {modelValue} = toRefs(props)
    const toggle = useToggle()
    const {hide} = toggle
    const calendar = useCalendar()
    const {nowTime, checkTime, repair} = calendar

    const state = ref('')
    const head = ref(headFormat(''))

    function headFormat (value) {
      const [y,m,d] = value !== '' ? value.split('-') : [
        nowTime.year,
        repair(nowTime.month + 1),
        nowTime.day
      ]
      
      return `${y}年${m}月${d}日`
    }

    watch(checkTime, (value) => {
      head.value = headFormat(value)
    })

    const clickDay = (item) => {
      if(props.onetap){
        const {y,m,d} = item
        state.value = `${y}-${m}-${d}`;
        nextTick(() => {
          hide()
        })
      }
    }

    watch(state, (value) => {
      if(value === ''){
        calendar.changeNowMonth()
        emit('update:modelValue', value)
      } else {
        checkTime.value = value
      }
    })

    const changeClickDay = () => {
      const reg = /[0-9]+/g
      const [y,m,d] = head.value.match(reg)
      state.value = `${y}-${m}-${d}`;
      emit('update:modelValue', state.value)
      hide()
    }

    const changeToday = () => {
      state.value = `${nowTime.year}-${repair(nowTime.month + 1)}-${nowTime.day}`;
      emit('update:modelValue', state.value)
      toggle.hide()
    }
    
    return {
      ...toggle,
      ...calendar,
      state,
      head,
      clickDay,
      changeClickDay,
      changeToday
    }
  }
}





</script>