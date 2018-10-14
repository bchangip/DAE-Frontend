import * as types from "@/types/eegModule";

export default {
  startEegRecording({ commit }) {
    commit(types.EEG_MODULE_START_RECORDING);
  },
  startEegAnalysis({ commit }) {
    commit(types.EEG_MODULE_START_ANALYSIS);
    // Prototype
    setTimeout(function() {
      commit(types.EEG_MODULE_SET_RESULT, { category: "lie", confidence: 87 });
    }, 3000);
  },
  setEegResult({ commit }) {
    commit(types.EEG_MODULE_SET_RESULT);
  },
  setKochResponse({ commit }, { category, confidence }) {
    commit(types.EEG_MODULE_SET_KOCH_RESPONSE, { category, confidence });
  },
  setRudyResponse({ commit }, { category, confidence }) {
    commit(types.EEG_MODULE_SET_RUDY_RESPONSE, { category, confidence });
  },
  setAlvaroResponse({ commit }, { category, confidence }) {
    commit(types.EEG_MODULE_SET_ALVARO_RESPONSE, { category, confidence });
  }
};
