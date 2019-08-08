<template>
    <div id="app">
        <Menu />
            <router-view />
        <Footer />
    </div>
</template>

<script>
import Menu from './components/template/Menu.vue';
import Footer from './components/template/Footer.vue';

export default {
  components: { Menu, Footer },
};
</script>
