import mutations from "@/mutations/eegModule";
import actions from "@/actions/eegModule";

const state = {
  category: "",
  confidence: 0,
  status: "standby"
};

const getters = {
  eegModuleCategory: state => state.category,
  eegModuleConfidence: state => state.confidence,
  eegModuleStatus: state => state.status
};

export default {
  state,
  getters,
  actions,
  mutations
};
