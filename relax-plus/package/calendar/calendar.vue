<template>
  <div class="x-calendar">
    <div class="x-calendar-head">
      <div class="x-calendar-month">
        <div class="x-calendar-btn" @click="changePrevMonth">
          <i class="x-icon-chevron-left"></i>
        </div>
        <span>
          {{nowTime.year}}年{{ 
            (nowTime.month + 1) < 10 ? '0' + (nowTime.month + 1) : nowTime.month + 1 }}月
        </span>
        <div class="x-calendar-btn" @click="changeNextMonth">
          <i class="x-icon-chevron-right"></i>
        </div>
      </div>
      <div class="x-calendar-btn" @click="changeNowMonth">
        <i class="x-icon-circle" style="margin-right: 5px"></i>今天
      </div>
    </div>
    <div class="x-calendar-group" :data-month="nowTime.month + 1 + '月'">
      <div class="x-calendar-week" v-for="item in week">
        {{item}}
      </div>
      <div class="x-calendar-cell" 
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
        <div class="x-calendar-cell__box">
          <div class="x-calendar-cell__day">{{ item.d }}</div>
          <slot name="dateCell" :data="item"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import useCalendar from '../../utils/calendar';

export default {
  name: "Calendar",
  setup() {
    const calendar = useCalendar()

    return {
      ...calendar
    }
  },
};
</script>