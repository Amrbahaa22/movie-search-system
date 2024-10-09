type State = {
    loading: true
}
export const state = () => ({
    lists: [],
    loading: true,
  })
  export const getter = {
    lists: (state) => {
      return state.lists
    },
    loading: (state) => {
      return state.loading
    },
  }
  export const mutations = {
    SET_LIST: (state, data) => {
      state.lists = data
    },
    SET_LOADING: (state) => {
      state.loading = false
    },
  }
  export const actions = {
    async getLists(state) {
      let data = []
      await this.$fire.firestore
        .collection('lists')
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            data.unshift(doc.data())
          })
          state.commit('SET_LIST', data)
          state.commit('SET_LOADING')
        })
    },
  }