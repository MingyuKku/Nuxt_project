<template>
  <div>
    <h1>개인정보변경 페이지</h1>
    <!-- <CustomLoading :api-loading="apiLoading" @load="loading = true"/> -->
    <button :class="{on: sortFlag['nameCode']}" @click="sortData('nameCode')">이름순정렬</button>
    <button :class="{on: sortFlag['age']}" @click="sortData('age')">나이순정렬</button>
    <button :class="{on: sortFlag['score']}" @click="sortData('score')">점수순정렬</button>

    <ul>
      <li v-for="(data,idx) in testData" :key="idx">
        <h2>{{ data.name }}</h2>
        <p>나이 : {{ data.age }}</p>
        <p>점수 : {{ data.score }}</p>
        <br/>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'LearnNuxtPersonal',
  layout: 'mypage',

  data() {
    return {
      apiLoading: false,
      loading: false,
      sortFlag: {
        nameCode: false,
        age: false,
        score: false,
      },
      sortBowl: [],
      testData: [
        {name: '강민규', age: 33, score: 45},
        {name: '오지혜', age: 30, score: 100},
        {name: '니얼굴', age: 25, score: 66},
        {name: '에이케이', age: 19, score: 56},
        {name: '강민규', age: 31, score: 90},
        {name: '김민수', age: 25, score: 84},
        {name: '룰루리', age: 22, score: 78},
        {name: '배수지', age: 26, score: 89},
        {name: '오윤아', age: 36, score: 94},
        {name: '칭다오', age: 40, score: 63},
        {name: '와우다', age: 26, score: 22},
        {name: '오지혜', age: 28, score: 88},
        {name: '강민규', age: 21, score: 98},
        {name: '강민규', age: 21, score: 72},
        {name: '강민규', age: 33, score: 33},
        {name: '강민규', age: 31, score: 77},
        {name: '강민규', age: 31, score: 34},
        {name: '오지혜', age: 18, score: 88},
        {name: '오지혜', age: 28, score: 34},
      ]
    };
  },

  mounted() {
    this.testData = this.testData.map(data=> ({
      ...data,
      nameCode: data.name.charCodeAt()
    }))
  },

  methods: {
    sortData(filter) {
      this.sortFlagToggle(filter);

      if(this.sortBowl.length < 1) return;

      if(this.sortBowl.length === 1) {
        this.testData.sort((a,b) => {
          const flagName = this.sortBowl[0]
          if(this.sortFlag[flagName]) {
            return a[flagName] - b[flagName];
          } else {
            return b[flagName] - a[flagName];
          }
          
        })
      } else if(this.sortBowl.length > 1) {
        console.log('여러개넹',this.sortBowl)
        const flagName1 = this.sortBowl[0];
        this.testData.sort((a,b) => {
          if(a[flagName1] === b[flagName1]) {
            const flagName2 = this.sortBowl[1];

            if(a[flagName2] === b[flagName2]) {
              const flagName3 = this.sortBowl[2];

              if(flagName3 && a[flagName3] === b[flagName3]) {
                const flagName4 = this.sortBowl[3];
                return a[flagName4] - b[flagName4];

              } else {
                return a[flagName3] - b[flagName3];
              }

            } else {
              return a[flagName2] - b[flagName2];
            }
            
          } else {
            return a[flagName1] - b[flagName1];
          }

        })
      }
      // this.testData.sort((a,b) => {
        
      //   if(a[filter].charCodeAt() === b[filter].charCodeAt()) {
      //     if(a.age === b.age) {
      //       return a.score - b.score;
      //     } else {
      //       return a.age - b.age;
      //     }
      //   } else {
      //     return a.name.charCodeAt() - b.name.charCodeAt();
      //   }
      // })

      // if(filter === 'name') {
        

      // } else if(filter === 'age') {
        

      // } else if(filter === 'score') {

        
      // }
    },
    sortFlagToggle(filter) {
      if(this.sortFlag[filter]) {
        const idx = this.sortBowl.indexOf(filter)
        this.sortBowl.splice(idx,1);
        this.sortFlag[filter] = false;
      } else {
        this.sortBowl.push(filter);
        this.sortFlag[filter] = true;
      }
    },
  },
};
</script>

<style  scoped>
  button.on {
    background: lightcoral;
  }
</style>