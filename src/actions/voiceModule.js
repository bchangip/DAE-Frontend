import * as types from "@/types/voiceModule";

export default {
  setOlgaResponse({ commit }, { category, confidence }) {
    commit(types.VOICE_MODULE_SET_OLGA_RESPONSE, { category, confidence });
  },
  setLeonelResponse({ commit }, { category, confidence }) {
    commit(types.VOICE_MODULE_SET_LEONEL_RESPONSE, { category, confidence });
  },
  setChanResponse({ commit }, { category, confidence }) {
    commit(types.VOICE_MODULE_SET_CHAN_RESPONSE, { category, confidence });
  }
};
