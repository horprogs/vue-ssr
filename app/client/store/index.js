import Vue from 'vue';
import Vuex from 'vuex';

import main from './modules/main';

import config from '../../config';

export function createStore() {
  return new Vuex.Store({
    strict: !config.isProduction,

    modules: {
      main,
    },
  });
}
