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
      @focus="focus"
    />

    <teleport to="body">
      <transition name="scaleY" ref="trigger">
        <div class="x-trigger x-datePicker" @click.stop :style="rect" v-show="isShow">
          <div class="x-datePicker-head">
            <div class="x-datePicker-btn" @click="changePrevMonth">
              <i class="x-icon-chevron-left"></i>
            </div>
            <span>
              {{nowTime.year}} 年 {{ 
                (nowTime.month + 1) < 10 ? '0' + (nowTime.month + 1) : nowTime.month + 1 }} 月
            </span>
            <div class="x-datePicker-btn" @click="changeNextMonth">
              <i class="x-icon-chevron-right"></i>
            </div>
            <!-- <div class="x-calendar-btn" @click="changeNowMonth">
              <i class="x-icon-circle" style="margin-right: 5px"></i>今天
            </div> -->
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
              @click="changeDay(item)"
            >
              <div class="x-datePicker-cell__box">{{ item.d }}</div>
            </div>
          </div>
        </div>
      </transition>
    </teleport>
  </div>
</template>

<script>
import { ref } from 'vue';
import Input from '../input/index'
import useToggle from '../../utils/togger'
import useCalendar from '../../utils/calendar';

export default {
  name: 'DatePicker',
  components: {
    Input
  },
  props: {
    modelValue: [Array, String],
    placeholder: String,
  },
  setup(){
    const toggle = useToggle()
    const calendar = useCalendar()
    const state = ref('')
    
    return {
      ...toggle,
      ...calendar,
      state,
    }
  }
}





</script>