<template>
  <div class="body-content" id="Populares">

    <div class="loading container-fluid" v-if="loading">
      <img src="../assets/images/loader.gif" alt="Loader"/>
    </div>

    <div v-else>

      <div class="search container-fluid">
        <div class="row h-100">
          <div class="col-sm-2"></div>
          <div class="search-wrapper col-sm-6 p-0 d-flex align-items-center">
            <input
              v-model="search"
              class="search-input"
              type="text"
              placeholder="Procurar por um filme..."
            />
          </div>
        </div>
      </div>

      <div class="conteudo container-fluid mb-4">
        <div class="row">
          <div class="col-sm-2"></div>
          <div class="col-sm-8 p-0 pt-3">
            <h1 class="session-title pb-2">{{tituloSession}}</h1>
            <div class="row">
              <div
                class="film-content col-sm-6 pb-4"
                v-for="film in filteredList"
                v-bind:key="film.id"
              >
                <div class="row">
                  <div class="col-sm-5">
                    <img class="mw-100" :src="'https://image.tmdb.org/t/p/w200/' + film.poster_path" :alt="film.id"/>
                  </div>
                  <div class="film-info col-sm-7 p-2 pr-3">
                    <div class="film-header d-flex">
                      <div class="vote_average mr-2 pl-2 pr-2">
                        <span>{{ formatAverage(film.vote_average) }}</span>
                      </div>
                      <div>
                        <h1 class="title-film mb-1">
                          {{ film.original_title }}
                        </h1>
                        <h2 class="film-date">
                          {{ formatDate(film.release_date) }}
                        </h2>
                      </div>
                    </div>

                    <div class="description mt-3">
                      <p>{{ formatDescription(film.overview, 160, '...') }}</p>
                    </div>

                    <div class="divisor w-100 pl-2 pt-1">
                      <button class="more-information pl-0">
                        Mais informações
                      </button>
                    </div>

                  </div><!-- end - film-info -->
                </div><!-- end - row -->
              </div><!-- end - film-content -->
            </div><!-- end - row -->
          </div><!-- end - col-8 -->
        </div><!-- end - row -->
      </div><!-- end - conteudo -->

    </div><!-- end - v-else -->

  </div><!-- end - component -->
</template>

<script>
import axios from 'axios';
import moment from 'moment';

moment.locale('pt');
moment.updateLocale('pt', {
  months: [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
    'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',
  ],
});

export default {
  data() {
    return {
      tituloSession: 'Próximas estreias',
      search: '',
      info: null,
      loading: true,
      errored: false,
    };
  },
  created() {
    axios.get('http://www.mocky.io/v2/5d4a07203200008942600f5e')
      .then((response) => {
        this.info = response.data.results;
      })
      .catch(() => {
        this.errored = true;
      })
      .finally(() => {
        this.loading = false;
      });
  },
  methods: {
    formatAverage: (value) => {
      let newValue = value.toString();
      if (newValue.length === 1) {
        newValue += '.0';
      }
      return newValue;
    },
    formatDate: value => (
      moment(String(value)).format('DD [de] MMMM [de] YYYY')
    ),
    formatDescription: (text, length, clampParam) => {
      const clamp = clampParam || '...';
      const node = document.createElement('div');
      node.innerHTML = text;
      const content = node.textContent;
      return content.length > length ? content.slice(0, length) + clamp : content;
    },
  },
  computed: {
    filteredList() {
      return this.info.filter(film =>
        film.original_title.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
};
</script>
