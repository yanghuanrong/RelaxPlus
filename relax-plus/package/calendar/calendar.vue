<template>
  <div class="x-calendar">
    <div class="x-calendar-head">
      <div class="x-calendar-month">
        <div class="x-calendar-btn" @click="changePrevMonth">
          <i class="x-icon-chevron-left"></i>
        </div>
        <span>
          {{nowTime.year}} 年 {{ 
            (nowTime.month + 1) < 10 ? '0' + (nowTime.month + 1) : nowTime.month + 1 }} 月
        </span>
        <div class="x-calendar-btn" @click="changeNextMonth">
          <i class="x-icon-chevron-right"></i>
        </div>
      </div>
      <div class="x-calendar-btn" @click="changeNowMonth">
        <i class="x-icon-circle" style="margin-right: 5px"></i>今天
      </div>
    </div>
    <div class="x-calendar-group">
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
          <div class="x-calendar-cell__day">
            {{ item.d }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive, ref } from "vue";
import Button from '../button/index'
export default {
  name: "Calendar",
  components: {
    Button
  },
  setup() {
    function getNowTime(date) {
      return {
        year: date.getFullYear(),
        month: date.getMonth(),
        day: date.getDate(),
        days: date.getDay(),
      };
    }

    function getYearMonthDayNum(year, month) {
      var dayNum = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      if (new Date(year, 1, 29).getDate() == 29) {
        dayNum[1] = 29;
      }
      if (month - 1 < 0) {
        month = 12;
      }
      return dayNum[month - 1];
    }

    function repair(d) {
      return d < 10 ? `0${d}` : d;
    }

    const nowTime = reactive(getNowTime(new Date()));

    const prevMonth = computed(() => {
      let year = nowTime.year;
      let month = nowTime.month;
      if (month == 0) {
        year--;
        month = 11;
      } else {
        month--;
      }
      return { year, month };
    });

    const nowMonth = computed(() => {
      const year = nowTime.year;
      const month = nowTime.month;
      return { year, month };
    });

    const nextMonth = computed(() => {
      let year = nowTime.year;
      let month = nowTime.month;

      if (month == 11) {
        year++;
        month = 0;
      } else {
        month++;
      }
      return { year, month };
    });

  

    const cell = computed(() => {
      const getWeek = new Date(nowTime.year, nowTime.month, 1).getDay() || 7;
      const nowMonthBigDay = getYearMonthDayNum(
        nowTime.year,
        nowTime.month + 1
      );
      const prevMonthBigDay = getYearMonthDayNum(nowTime.year, nowTime.month);

      const CELL = 42;
      const nextMonthDay = CELL - nowMonthBigDay - getWeek + 1;
      const nowMonthDay = nowMonthBigDay;
      const prevMonthDay = CELL - nowMonthDay - nextMonthDay;

      const CellData = [];

      for (let i = prevMonthDay; i > 0; i--) {
        const day = prevMonthBigDay - (i - 1);
        CellData.push({
          y: prevMonth.value.year,
          m: repair(prevMonth.value.month + 1),
          d: repair(day),
          class: 'x-calendar-prev-day',
          type: "Prev",
        });
      }
    
      for (let i = 1; i <= nowMonthDay; i++) {
        const day = i;
        CellData.push({
          y: nowMonth.value.year,
          m: repair(nowMonth.value.month + 1),
          d: repair(day),
          class: 'x-calendar-now-day',
          type: "Now",
        });
      }

      for (let i = 1; i <= nextMonthDay; i++) {
        const day = i;
        CellData.push({
          y: nextMonth.value.year,
          m: repair(nextMonth.value.month + 1),
          d: repair(day),
          class: 'x-calendar-next-day',
          type: "Next",
        });
      }

      return CellData;
    });

    const today = ({d}) => {
      return (
        parseInt(d) === nowTime.day && nowTime.month == new Date().getMonth()
      );
    }

    const dateTime = ref(getToday())

    function getToday () {
      const y = nowTime.year;
      const m = repair(nowTime.month + 1);
      const d = repair(new Date().getDate());
      return y + "-" + m + "-" + d;
    }

      // 上个月的事件方法
    const changePrevMonth = () => {
      nowTime.year = prevMonth.value.year;
      nowTime.month = prevMonth.value.month;

      const month = repair(nowTime.month + 1);
      dateTime.value = nowTime.year + "-" + month + "-01";
    }

    // 下个月的事件方法
    const changeNextMonth = () => {
      nowTime.year = nextMonth.value.year;
      nowTime.month = nextMonth.value.month;

      const month = repair(nowTime.month + 1);
      dateTime.value = nowTime.year + "-" + month + "-01";
    }

    // 本月的事件方法
    const changeNowMonth = () => {
      const nowMonth = getNowTime(new Date())
      nowTime.year = nowMonth.year;
      nowTime.month = nowMonth.month;
      dateTime.value = getToday();
    }

    // 选中的日期
    const changeDay = ({ y, m, d, type }) => {
      if (type !== "Now") {
        type === 'Next' && changeNextMonth()
        type === 'Prev' && changePrevMonth()
      }
      dateTime.value = y + "-" + m + "-" + d;
    }

    const isAactiveDay = ({ y, m, d }) => {
      return dateTime.value === `${y}-${m}-${d}`;
    }

    const week = ['一', '二', '三', '四', '五', '六', '日']

    return {
      cell,
      week,
      nowTime,
      today,
      isAactiveDay,
      changePrevMonth,
      changeNextMonth,
      changeNowMonth,
      changeDay
    };
  },
};
</script>