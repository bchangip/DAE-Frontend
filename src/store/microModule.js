import mutations from "@/mutations/microModule";
import actions from "@/actions/microModule";

const state = {
  category: "",
  confidence: 0,
  status: "standby"
};

const getters = {
  microModuleCategory: state => state.category,
  microModuleConfidence: state => state.confidence,
  microModuleStatus: state => state.status
};

export default {
  state,
  getters,
  actions,
  mutations
};
