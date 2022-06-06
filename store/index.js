import { fetchCartItems } from '@/api/index'

export const state = () => {
  return {
    cartItems: [],
    isLogin: false,
  }
}

export const getters = {
  cartItems(state) {
    return state.cartItems;
  },
  isLogin(state) {
    return state.isLogin;
  }
}

export const mutations = {
  addCartItem(state, cartItem) {
    const newCartItem = {
      ...cartItem,
      imageUrl: `${cartItem.imageUrl}?random=${Math.random()}`,
    }
    state.cartItems.push(newCartItem);
  },
  setCartItems(state, cartItems) {
    state.cartItems = cartItems;
  },
  login(state, value) {
    state.isLogin = value
  }
}

export const actions = {
  async FETCH_CART_ITEMS({ commit }) {
    const { data } = await fetchCartItems();
    commit('setCartItems', data.map(item=> ({
        ...item,
        imageUrl: `${item.imageUrl}?random=${Math.random()}`,
    })))  
  },
  login({commit}, value) {
    commit('login', value)
  }
  // async nuxtServerInit(StoreContext, nuxtContext) {
  //   console.log('넉스트서버이닛')
  //   await StoreContext.dispatch('FETCH_CART_ITEMS')
  // }
}