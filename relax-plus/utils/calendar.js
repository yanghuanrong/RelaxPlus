import { computed, reactive, ref } from 'vue'

export default function useCalendar() {
  function getNowTime(date) {
    return {
      year: date.getFullYear(),
      month: date.getMonth(),
      day: date.getDate(),
      days: date.getDay(),
    }
  }

  function getYearMonthDayNum(year, month) {
    var dayNum = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    if (new Date(year, 1, 29).getDate() == 29) {
      dayNum[1] = 29
    }
    if (month - 1 < 0) {
      month = 12
    }
    return dayNum[month - 1]
  }

  function repair(d) {
    return d < 10 ? `0${d}` : `${d}`
  }

  const nowTime = reactive(getNowTime(new Date()))

  const prevMonth = computed(() => {
    let year = nowTime.year
    let month = nowTime.month
    if (month == 0) {
      year--
      month = 11
    } else {
      month--
    }
    return {
      year,
      month,
    }
  })

  const nowMonth = computed(() => {
    const year = nowTime.year
    const month = nowTime.month
    return {
      year,
      month,
    }
  })

  const nextMonth = computed(() => {
    let year = nowTime.year
    let month = nowTime.month

    if (month == 11) {
      year++
      month = 0
    } else {
      month++
    }
    return {
      year,
      month,
    }
  })

  const cell = computed(() => {
    const getWeek = new Date(nowTime.year, nowTime.month, 1).getDay() || 7
    const nowMonthBigDay = getYearMonthDayNum(nowTime.year, nowTime.month + 1)
    const prevMonthBigDay = getYearMonthDayNum(nowTime.year, nowTime.month)

    const CELL = 42
    const nextMonthDay = CELL - nowMonthBigDay - getWeek + 1
    const nowMonthDay = nowMonthBigDay
    const prevMonthDay = CELL - nowMonthDay - nextMonthDay

    const CellData = []

    for (let i = prevMonthDay; i > 0; i--) {
      const day = prevMonthBigDay - (i - 1)
      CellData.push({
        y: prevMonth.value.year,
        m: repair(prevMonth.value.month + 1),
        d: repair(day),
        class: 'x-prev-day',
        type: 'Prev',
      })
    }

    for (let i = 1; i <= nowMonthDay; i++) {
      const day = i
      CellData.push({
        y: nowMonth.value.year,
        m: repair(nowMonth.value.month + 1),
        d: repair(day),
        class: 'x-now-day',
        type: 'Now',
      })
    }

    for (let i = 1; i <= nextMonthDay; i++) {
      const day = i
      CellData.push({
        y: nextMonth.value.year,
        m: repair(nextMonth.value.month + 1),
        d: repair(day),
        class: 'x-next-day',
        type: 'Next',
      })
    }

    return CellData
  })

  const today = ({ y, m, d }) => {
    const { month, year } = nowTime
    return (
      parseInt(d) === nowTime.day &&
      month == new Date().getMonth() &&
      year === new Date().getFullYear() &&
      year === y &&
      repair(month + 1) === m
    )
  }

  const checkTime = ref(getToday())

  function getToday() {
    const y = nowTime.year
    const m = repair(nowTime.month + 1)
    const d = repair(new Date().getDate())
    return `${y}-${m}-${d}`
  }

  function setCheckTime() {
    const [y, m, d] = checkTime.value.split('-')
    const days = getYearMonthDayNum(nowTime.year, nowTime.month + 1)
    const month = repair(nowTime.month + 1)
    const day = d > days ? days : d
    checkTime.value = nowTime.year + '-' + month + '-' + day
  }

  // 本月的事件方法
  const changeNowMonth = () => {
    const nowMonth = getNowTime(new Date())
    nowTime.year = nowMonth.year
    nowTime.month = nowMonth.month
    checkTime.value = getToday()
  }

  // 上个月的事件方法
  const changePrevMonth = () => {
    nowTime.year = prevMonth.value.year
    nowTime.month = prevMonth.value.month
    setCheckTime()
  }

  // 下个月的事件方法
  const changeNextMonth = () => {
    nowTime.year = nextMonth.value.year
    nowTime.month = nextMonth.value.month
    setCheckTime()
  }

  // 下一年的事件方法
  const changeNextYear = () => {
    nowTime.year++
    setCheckTime()
  }
  // 下一年的事件方法
  const changePrevYear = () => {
    nowTime.year--
    setCheckTime()
  }

  // 选中的日期
  const changeDay = ({ y, m, d, type = 'Now' }) => {
    if (type !== 'Now') {
      type === 'Next' && changeNextMonth()
      type === 'Prev' && changePrevMonth()
    }
    checkTime.value = `${y}-${m}-${d}`
  }

  const isAactiveDay = ({ y, m, d }) => checkTime.value === `${y}-${m}-${d}`

  const week = ['一', '二', '三', '四', '五', '六', '日']

  return {
    cell,
    week,
    nowTime,
    today,
    isAactiveDay,
    changePrevMonth,
    changeNextMonth,
    changeNextYear,
    changePrevYear,
    changeNowMonth,
    changeDay,
    repair,
    checkTime,
  }
}
