import mutations from "@/mutations/microModule";
import actions from "@/actions/microModule";

const state = {
  castro: {
    category: "",
    confidence: 0,
    status: "standby"
  },
  noriega: {
    category: "",
    confidence: 0,
    status: "standby"
  }
};

const getters = {
  microModuleCastroCategory: state => state.castro.category,
  microModuleCastroConfidence: state => state.castro.confidence,
  microModuleCastroStatus: state => state.castro.status,
  microModuleNoriegaCategory: state => state.noriega.category,
  microModuleNoriegaConfidence: state => state.noriega.confidence,
  microModuleNoriegaStatus: state => state.noriega.status
};

export default {
  state,
  getters,
  actions,
  mutations
};
