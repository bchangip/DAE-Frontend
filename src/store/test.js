import mutations from "@/mutations/test";
import actions from "@/actions/test";

const state = {
  status: "standby"
};

const getters = {
  testStatus: state => state.status
};

export default {
  state,
  getters,
  actions,
  mutations
};
