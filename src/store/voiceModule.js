import mutations from "@/mutations/voiceModule";
import actions from "@/actions/voiceModule";

const state = {
  olga: {
    category: "",
    confidence: 0,
    status: "standby"
  },
  leonel: {
    category: "",
    confidence: 0,
    status: "standby"
  },
  chan: {
    category: "",
    confidence: 0,
    status: "standby"
  }
};

const getters = {
  voiceModuleOlgaCategory: state => state.olga.category,
  voiceModuleOlgaConfidence: state => state.olga.confidence,
  voiceModuleOlgaStatus: state => state.olga.status,
  voiceModuleLeonelCategory: state => state.leonel.category,
  voiceModuleLeonelConfidence: state => state.leonel.confidence,
  voiceModuleLeonelStatus: state => state.leonel.status,
  voiceModuleChanCategory: state => state.chan.category,
  voiceModuleChanConfidence: state => state.chan.confidence,
  voiceModuleChanStatus: state => state.chan.status
};

export default {
  state,
  getters,
  actions,
  mutations
};
