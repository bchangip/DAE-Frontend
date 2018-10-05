import * as types from "@/types/microModule";

export default {
  startMicroRecording({ commit }) {
    commit(types.MICRO_MODULE_START_RECORDING);
  },
  startMicroAnalysis({ commit }) {
    commit(types.MICRO_MODULE_START_ANALYSIS);
    // Prototype
    setTimeout(function() {
      commit(types.MICRO_MODULE_SET_RESULT, {
        category: "truth",
        confidence: 86
      });
    }, 9000);
  },
  setMicroResult({ commit }) {
    commit(types.MICRO_MODULE_SET_RESULT);
  }
};
