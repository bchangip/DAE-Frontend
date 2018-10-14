import mutations from "@/mutations/eegModule";
import actions from "@/actions/eegModule";

const state = {
  koch: {
    category: "",
    confidence: 0,
    status: "standby"
  },
  rudy: {
    category: "",
    confidence: 0,
    status: "standby"
  },
  alvaro: {
    category: "",
    confidence: 0,
    status: "standby"
  }
};

const getters = {
  eegModuleKochCategory: state => state.koch.category,
  eegModuleKochConfidence: state => state.koch.confidence,
  eegModuleKochStatus: state => state.koch.status,
  eegModuleRudyCategory: state => state.rudy.category,
  eegModuleRudyConfidence: state => state.rudy.confidence,
  eegModuleRudyStatus: state => state.rudy.status,
  eegModuleAlvaroCategory: state => state.alvaro.category,
  eegModuleAlvaroConfidence: state => state.alvaro.confidence,
  eegModuleAlvaroStatus: state => state.alvaro.status
};

export default {
  state,
  getters,
  actions,
  mutations
};
