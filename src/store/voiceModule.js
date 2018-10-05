import mutations from "@/mutations/voiceModule";
import actions from "@/actions/voiceModule";

const state = {
  category: "",
  confidence: 0,
  status: "standby"
};

const getters = {
  voiceModuleCategory: state => state.category,
  voiceModuleConfidence: state => state.confidence,
  voiceModuleStatus: state => state.status
};

export default {
  state,
  getters,
  actions,
  mutations
};
