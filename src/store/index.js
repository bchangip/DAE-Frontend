import Vue from "vue";
import Vuex from "vuex";
import test from "./test";
import voiceModule from "./voiceModule";
import eegModule from "./eegModule";
import microModule from "./microModule";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    test,
    voiceModule,
    eegModule,
    microModule
  }
});
