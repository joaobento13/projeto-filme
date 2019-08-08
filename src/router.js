import Vue from 'vue';
import Router from 'vue-router';
import Populares from './components/Populares.vue';
import BemAvaliados from './components/BemAvaliados.vue';
import ProximasEstreias from './components/ProximasEstreias.vue';
import EmCartaz from './components/EmCartaz.vue';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    component: Populares,
  }, {
    path: '/BemAvaliados',
    component: BemAvaliados,
  }, {
    path: '/ProximasEstreias',
    component: ProximasEstreias,
  }, {
    path: '/EmCartaz',
    component: EmCartaz,
  }],
});
