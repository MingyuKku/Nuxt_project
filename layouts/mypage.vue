<template>
  <div class="mypage_common_wrap">
    <h1>공통적인 마이페이지 사이드 메뉴</h1>
    <NuxtLink to="/">홈으로</NuxtLink>
    <ul>
      <li v-for="(list,idx) in menuList" :key="idx" :class="{active: listIndex === idx}" @click="onClickMenu(list,idx)">
        <!-- <NuxtLink :to="list.path">{{ list.tit }}</NuxtLink> -->
        {{ list.tit }}
      </li>
    </ul>
    <NuxtChild @testData="testData"></NuxtChild>
  </div>
</template>

<script>
// import axios from 'axios';
export default {
  name: 'LearnNuxtMypage',
  data() {
    return {
      listIndex: 0,
      menuList: [
        {name: 'mypage', path: '/mypage', tit: '구독결제'},
        {name: 'mypage-Password', path: '/mypage/Password', tit: '비밀번호변경'},
        {name: 'mypage-Personal', path: '/mypage/Personal', tit: '개인정보'},
      ]
    };
  },
  // fetch() {
  //   console.log('패치', this.$fetchState)
  // },

  mounted() {
    // console.log('공통마이페이지 마운트' , this.$fetch())
  },

  methods: {
    onClickMenu(list,idx) {
      const current = this.$router.history.current
      this.listIndex = idx;
      if(current.name !== list.name) {
        this.$router.push({name: list.name})
      } else this.$router.go(0)
    },
    testData(val) {
      console.log('에밋받았나', val)
    }
  },
};
</script>

<style scoped>
  ul {
    background: lemonchiffon;
  }
  ul>li.active>a {
    color: red;
  }
</style>