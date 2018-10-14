import * as types from "@/types/microModule";

export default {
  setCastroResponse({ commit }, { category, confidence }) {
    commit(types.MICRO_MODULE_SET_CASTRO_RESPONSE, { category, confidence });
  },
  setNoriegaResponse({ commit }, { category, confidence }) {
    commit(types.MICRO_MODULE_SET_NORIEGA_RESPONSE, { category, confidence });
  }
};
