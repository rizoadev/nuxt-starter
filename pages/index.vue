<template>
  <div class="container">
    <div>
      awesome: {{ xtitle }}
      <br />
      <br />
      <input v-model="crot" type="text" />
      <br />
      <input v-model="title" type="text" />
      <pre>{{ carts }}</pre>
    </div>
  </div>
</template>

<script>
import { useContext, onMounted, computed } from '@nuxtjs/composition-api';

export default {
  computed: {
    crot: {
      get() {
        return this.$store.state.islogin;
      },
      set(value) {
        this.$store.commit('SETLOG', value);
      },
    },
  },
  setup() {
    const { store } = useContext();
    const carts = computed(() => store.state);
    const title = computed({
      get: () => store.state.title,
      set: (val) => {
        store.commit('SET', { k: 'title', v: val });
      },
    });
    const xtitle = computed(() => store.getters.kopet);

    onMounted(() => {
      store.dispatch('getData');
    });
    return { carts, title, xtitle };
  },
};
</script>

<style>
.container {
  margin: 0 auto;
  padding: 30px;
  min-height: 100vh;
  display: flex;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
