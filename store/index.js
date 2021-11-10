import axios from 'axios';

export const state = () => ({
  islogin: false,
  title: 'ikititle',
  data: {},
  carts: [],
});

export const mutations = {
  SET(state, { k, v }) {
    state[k] = v;
  },
  SETLOG(state, v) {
    state.islogin = v;
  },
};
export const actions = {
  getData({ commit }) {
    axios
      .get('https://random-data-api.com/api/stripe/random_stripe')
      .then((r) => {
        commit('SET', { k: 'data', v: r.data });
      });
  },
};

export const getters = {
  kopet: (state) => {
    return '|' + state.title + '|';
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
