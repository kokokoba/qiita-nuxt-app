import Vuex from 'vuex'


export default () => (new Vuex.Store({
  state: { // mutations以外から直接書き換えてはいけない this.$store.state.items
    items: [],
    users: {},
    userItems: {}
  },
  getters: { // stateを取得する際の処理
    items: state => state.items,
    users: state => state.users,
    userItems: state => state.userItems
  },
  mutations: { // 直接stateを変更するメソッド this.$store.commit('setItems')
    setItems(state, { items }) {
      state.items = items;
    },
    setUser(state, { user }) {
      state.users[user.id] = user;
    },
    setUserItems(state, { user, items }) {
      state.userItems[user.id] = items;
    }
  },
  actions: { // stateを操作したい場合はここからmutationsにcommit
    async fetchItems({ commit }) {
      const items = await this.$axios.$get(
        'https://qiita.com/api/v2/items?query=tag:nuxt.js'
      );
      commit('setItems', { items });
    },
    async fetchUserInfo({ commit }, { id }) {
      const [user, items] = await Promise.all([
        this.$axios.$get(`https://qiita.com/api/v2/users/${id}`),
        this.$axios.$get(`https://qiita.com/api/v2/items?query=user:${id}`)
      ]);
      commit('setUser', { user });
      commit('setUserItems', { user, items });
    }
  }
}))
