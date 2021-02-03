---
title: Calendar 日历
tag: Data Display
---

# Calendar 日历
> 以日历的方式展示数据

## 演示
> 默认
:::demo
```html
<template>
  <x-calendar>
    <template #dateCell="{data}">
      <x-badge v-for="item in getListData(data)" :status="item.type" :text="item.content"></x-badge>
    </template>
  </x-calendar>
</template>

<script>
  export default {
    setup() {
      const getListData = ({y, m, d}) => {
        let listData;
        switch (d) {
          case '08':
            listData = [
              { type: 'warning', content: 'This is warning event.' },
              { type: 'success', content: 'This is usual event.' },
            ];
            break;
          case '10':
            listData = [
              { type: 'warning', content: 'This is warning event.' },
              { type: 'success', content: 'This is usual event.' },
              { type: 'error', content: 'This is error event.' },
            ];
            break;
          case '15':
            listData = [
              { type: 'warning', content: 'This is warning event' },
              { type: 'success', content: 'This is very long usual event。。....' },
              { type: 'error', content: 'This is error event 1.' },
              { type: 'error', content: 'This is error event 2.' },
              { type: 'error', content: 'This is error event 3.' },
              { type: 'error', content: 'This is error event 4.' },
            ];
            break;
          default:
        }
        return listData || [];
      }

      return {
        getListData
      }
    }
  }
</script>
```
:::