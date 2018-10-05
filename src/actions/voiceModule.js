import * as types from "@/types/voiceModule";

export default {
  startVoiceRecording({ commit }) {
    commit(types.VOICE_MODULE_START_RECORDING);
  },
  startVoiceAnalysis({ commit }) {
    commit(types.VOICE_MODULE_START_ANALYSIS);
    // Prototype
    setTimeout(function() {
      commit(types.VOICE_MODULE_SET_RESULT, {
        category: "truth",
        confidence: 98
      });
    }, 6000);
  },
  setVoiceResult({ commit }) {
    commit(types.VOICE_MODULE_SET_RESULT);
  }
};
