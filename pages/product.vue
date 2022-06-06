<template>
  <div>
    <ul>
      <li>상품 1</li>
      <li>상품 2</li>
      <li>상품 3</li>
    </ul>
    <div class="box"></div>
    <!-- <client-only>
    <CliTuiEditor
v-show="toggle"
ref="editor"
      :initial-value="text"
      :options="editorOptions"
      initial-edit-type='wysiwyg'
      preview-style='vertical'
      height='400px'
    ></CliTuiEditor>
    <template #placeholder>
      <div class="loading_ui">
        <p>렌더링중입니다</p>
      </div>
    </template>
    </client-only> -->

    <!-- <client-only> -->
    <!-- <viewer v-if="toggle" :initial-value="content" /> -->
    <!-- </client-only> -->


    <client-only placeholder="Loading...">
    <VuePaginate
v-show="toggle"
v-model="page" :container-class="'pagination_inner'"
      :page-class="'page_num'"
      :page-count="20"
      :page-range='5'
      :margin-pages='1'
      :click-handler="onClickPage"
      :prev-text="'Prev'"
      :next-text="'Next'"
      :hide-prev-next='true'
    />
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'LearnNuxtProduct',
  data() {
    return {
      text: '이곳에 글을 써주세요! 오른쪽은 미리보기 입니다.',
      content: '뷰어 컨텐츠 입니다',
      toggle: false,
      editorOptions: {
        height: '1000px',
        language: 'ko',
        useCommandShortcut: true,
        usageStatistics: true,
        hideModeSwitch: false,
        previewStyle: 'tab',
        useDefaultHTMLSanitizer: true,
        toolbarItems: [
          ['heading', 'bold', 'italic', 'strike',],
          ['hr', 'quote'],
          ['ul', 'ol', 'task', 'indent', 'outdent'],
          ['table', 'image', 'link'],
        ]
      },


      page: 1,
    };
  },
  fetch() {
    this.toggle = true;
  },
  mounted() {
    console.log('머여', this)
    this.$nextTick(()=> {
        this.toggle = true;
    })
    
    this.$gsap.to('.box', { rotation: 27, x: 100, duration: 1 })
  },

  methods: {
    onClickPage(no) {
      console.log('페이징클릭', no)
    }
  },
};
</script>

<style scoped>
  .box {
    width: 100px;
    height: 100px;
    background: yellowgreen;
  }
  .loading_ui {
    padding: 50px;
    background: lightblue;
  }
</style>