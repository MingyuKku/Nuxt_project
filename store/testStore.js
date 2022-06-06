export const state = () => ({
  items: []
})

export const getters = {
  getItems(state) {
    return state.items;
  }
}

export const mutations = {
  testSet(state, value) {
    console.log('스토어뮤테이션',value.length)
    state.items = value;
  }
}

export const actions = {
  async testSet({commit}) {
    const res = await this.$axios.get('http://localhost:3000/products');
    console.log('스토어액션스',res.data.length)
    commit('testSet' , res.data)
  }
}