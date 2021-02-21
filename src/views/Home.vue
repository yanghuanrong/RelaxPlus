<template>
  <div class="index">
    <div class="content">
      <div class="title">Vue 3.x 前端大组件</div>
      <div class="description">
        友好、简洁、高端、大气、上档次、非常轻盈，它能让你以写组件的方式学习Vue
        3，从而轻松地构建网页应用
      </div>
      <div class="github">
        <router-link to="/quickstart">
          <x-button type="primary" icon="x-icon-star-on" size="lg" round>开始享用</x-button>
        </router-link>
        <a
          href="https://github.com/yanghuanrong/RelaxPlus/watchers"
          target="blank"
        >
          <x-button type="primary" class="git" size="lg" icon="x-icon-eye" round plain>Watch {{ watch }}</x-button>
        </a>
        <a
          href="https://github.com/yanghuanrong/RelaxPlus/stargazers"
          target="blank"
        >
          <x-button type="primary" class="git" size="lg" icon="x-icon-star" round plain>Star {{ star }}</x-button>
        </a>
        <a
          href="https://github.com/yanghuanrong/RelaxPlus/network/members"
          target="blank"
        >
          <x-button type="primary" class="git" size="lg" icon="x-icon-share-2" round plain>Fork {{ fork }}</x-button>
        </a>
      </div>
      <div></div>
    </div>

    <!-- <div class="year">2021</div> -->

    <div class="element">
      <div class="triangle-move">
        <div class="triangle-rotate">
          <div class="triangle"></div>
        </div>
      </div>
      <div class="ellipse"></div>
      <div class="round"></div>
      <div class="square"></div>
      <div class="combination"></div>
      <div class="semicirce"></div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { jsonp } from "../utils/jsonp";

export default {
  setup() {
    const watch = ref(0)
    const star = ref(0)
    const fork = ref(0)

    jsonp({
      url: "https://api.github.com/repos/yanghuanrong/RelaxPlus",
      jsonp: "callback",
    }).then(({ data }) => {
      watch.value = data.subscribers_count;
      star.value = data.watchers;
      fork.value = data.forks;
    });

    return{
      watch,
      star,
      fork
    }
  },
};
</script>