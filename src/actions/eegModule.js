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
  }
};
