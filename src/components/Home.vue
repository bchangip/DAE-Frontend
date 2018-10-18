<template>
  <div class="home">
    <div class="personal-info">
      <div class="personal-info-inputs">
        <div class="personal-info-input">
          ID:
          <input type="text" v-model="model.id" name="id" placeholder="Codigo">
        </div>
        <div class="personal-info-input">
          Género:
          <select v-model="model.gender" name="gender">
            <option>Masculino</option>
            <option>Femenino</option>
          </select>
        </div>
        <div class="personal-info-input">
          Edad:
          <input type="text" v-model="model.age" name="age" placeholder="Edad">
        </div>
        <div class="personal-info-input">
          PEBL:
          <input type="text" v-model="model.pebl" name="pebl" placeholder="PEBL">
        </div>
        <div class="personal-info-input">
          DSMT:
          <input type="text" v-model="model.dsmt" name="dsmt" placeholder="DSMT">
        </div>
        <div class="personal-info-input">
          HARE:
          <input type="text" v-model="model.hare" name="hare" placeholder="HARE">
        </div>
        <div class="personal-info-input">
          CIEP:
          <input type="text" v-model="model.ciep" name="ciep" placeholder="CIEP">
        </div>
        <div class="personal-info-input">
          CIEF:
          <input type="text" v-model="model.cief" name="cief" placeholder="CIEF">
        </div>
        <div class="personal-info-input">
          CIEC:
          <input type="text" v-model="model.ciec" name="ciec" placeholder="CIEC">
        </div>
        <div class="personal-info-input">
          CIEM:
          <input type="text" v-model="model.ciem" name="ciem" placeholder="CIEM">
        </div>
        <div class="personal-info-input">
          CIE:
          <input type="text" v-model="model.cie" name="cie" placeholder="CIE">
        </div>
      </div>
    </div>
    <div class="modules">
      <div class="module">
        <h3>Análisis de voz</h3>
        <div class="submodule" :class="resultClass(voiceModuleOlgaStatus, voiceModuleOlgaCategory)">
          Olga
          <looping-rhombuses-spinner
            v-if='voiceModuleOlgaStatus === "recording"'
            :animation-duration="3000"
            :rhombus-size="10"
            color="#ff1d5e"
            class="module-spinner" />
          <radar-spinner
            v-if='voiceModuleOlgaStatus === "analyzing"'
            :animation-duration="2500"
            :size="50"
            :color="'#ffffff'"
            class="module-spinner"
          />
          <div class='module__results' v-if='voiceModuleOlgaStatus === "finished"'>
            <h2>Confianza: {{ voiceModuleOlgaConfidence }}%</h2>
            <h2>Resultado: {{ voiceModuleOlgaCategory === 'true' ? 'Verdad' : 'Mentira' }}</h2>
          </div>
        </div>
        <div class="submodule" :class="resultClass(voiceModuleLeonelStatus, voiceModuleLeonelCategory)">
          Leonel
          <looping-rhombuses-spinner
            v-if='voiceModuleLeonelStatus === "recording"'
            :animation-duration="3000"
            :rhombus-size="10"
            color="#ff1d5e"
            class="module-spinner" />
          <radar-spinner
            v-if='voiceModuleLeonelStatus === "analyzing"'
            :animation-duration="2500"
            :size="50"
            :color="'#ffffff'"
            class="module-spinner"
          />
          <div class='module__results' v-if='voiceModuleLeonelStatus === "finished"'>
            <h2>Confianza: {{ voiceModuleLeonelConfidence }}%</h2>
            <h2>Resultado: {{ voiceModuleLeonelCategory === 'true' ? 'Verdad' : 'Mentira' }}</h2>
          </div>
        </div>
        <div class="submodule" :class="resultClass(voiceModuleChanStatus, voiceModuleChanCategory)">
          Chan
          <looping-rhombuses-spinner
            v-if='voiceModuleChanStatus === "recording"'
            :animation-duration="3000"
            :rhombus-size="10"
            color="#ff1d5e"
            class="module-spinner" />
          <radar-spinner
            v-if='voiceModuleChanStatus === "analyzing"'
            :animation-duration="2500"
            :size="50"
            :color="'#ffffff'"
            class="module-spinner"
          />
          <div class='module__results' v-if='voiceModuleChanStatus === "finished"'>
            <h2>Confianza: {{ voiceModuleChanConfidence }}%</h2>
            <h2>Resultado: {{ voiceModuleChanCategory === 'true' ? 'Verdad' : 'Mentira' }}</h2>
          </div>
        </div>
      </div>
      <div class="module">
        <h3>Análisis de señales electroencefalográficas</h3>
        <div class="submodule" :class="resultClass(eegModuleKochStatus, eegModuleKochCategory)">
          Koch
          <looping-rhombuses-spinner
            v-if='eegModuleKochStatus === "recording"'
            :animation-duration="3000"
            :rhombus-size="10"
            color="#ff1d5e"
            class="module-spinner" />
          <flower-spinner
            v-if='eegModuleKochStatus === "analyzing"'
            :animation-duration="2500"
            :size="50"
            :color="'#ffffff'"
            class="module-spinner"
          />
          <div class='module__results' v-if='eegModuleKochStatus === "finished"'>
            <h2>Confianza: {{ eegModuleKochConfidence }}%</h2>
            <h2>Resultado: {{ eegModuleKochCategory === 'true' ? 'Verdad' : 'Mentira' }}</h2>
          </div>
        </div>
        <div class="submodule" :class="resultClass(eegModuleRudyStatus, eegModuleRudyCategory)">
          Rudy
          <looping-rhombuses-spinner
            v-if='eegModuleRudyStatus === "recording"'
            :animation-duration="3000"
            :rhombus-size="10"
            color="#ff1d5e"
            class="module-spinner" />
          <flower-spinner
            v-if='eegModuleRudyStatus === "analyzing"'
            :animation-duration="2500"
            :size="50"
            :color="'#ffffff'"
            class="module-spinner"
          />
          <div class='module__results' v-if='eegModuleRudyStatus === "finished"'>
            <h2>Confianza: {{ eegModuleRudyConfidence }}%</h2>
            <h2>Resultado: {{ eegModuleRudyCategory === 'true' ? 'Verdad' : 'Mentira' }}</h2>
          </div>
        </div>
        <div class="submodule" :class="resultClass(eegModuleAlvaroStatus, eegModuleAlvaroCategory)">
          Alvaro
          <looping-rhombuses-spinner
            v-if='eegModuleAlvaroStatus === "recording"'
            :animation-duration="3000"
            :rhombus-size="10"
            color="#ff1d5e"
            class="module-spinner" />
          <flower-spinner
            v-if='eegModuleAlvaroStatus === "analyzing"'
            :animation-duration="2500"
            :size="50"
            :color="'#ffffff'"
            class="module-spinner"
          />
          <div class='module__results' v-if='eegModuleAlvaroStatus === "finished"'>
            <h2>Confianza: {{ eegModuleAlvaroConfidence }}%</h2>
            <h2>Resultado: {{ eegModuleAlvaroCategory === 'true' ? 'Verdad' : 'Mentira' }}</h2>
          </div>
        </div>
      </div>
      <div class="module">
        <h3>Análisis de microexpresiones</h3>
        <div class="submodule" :class="resultClass(microModuleCastroStatus, microModuleCastroCategory)">
          Castro
          <looping-rhombuses-spinner
            v-if='microModuleCastroStatus === "recording"'
            :animation-duration="3000"
            :rhombus-size="10"
            color="#ff1d5e"
            class="module-spinner" />
          <fingerprint-spinner
            v-if='microModuleCastroStatus === "analyzing"'
            :animation-duration="2500"
            :size="50"
            :color="'#ffffff'"
            class="module-spinner"
          />
          <div class='module__results' v-if='microModuleCastroStatus === "finished"'>
            <h2>Confianza: {{ microModuleCastroConfidence }}%</h2>
            <h2>Resultado: {{ microModuleCastroCategory === 'true' ? 'Verdad' : 'Mentira' }}</h2>
          </div>
        </div>
        <div class="submodule" :class="resultClass(microModuleNoriegaStatus, microModuleNoriegaCategory)">
          Noriega
          <looping-rhombuses-spinner
            v-if='microModuleNoriegaStatus === "recording"'
            :animation-duration="3000"
            :rhombus-size="10"
            color="#ff1d5e"
            class="module-spinner" />
          <fingerprint-spinner
            v-if='microModuleNoriegaStatus === "analyzing"'
            :animation-duration="2500"
            :size="50"
            :color="'#ffffff'"
            class="module-spinner"
          />
          <div class='module__results' v-if='microModuleNoriegaStatus === "finished"'>
            <h2>Confianza: {{ microModuleNoriegaConfidence }}%</h2>
            <h2>Resultado: {{ microModuleNoriegaCategory === 'true' ? 'Verdad' : 'Mentira' }}</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="test-controls">
      <button class="start-question-button" @click='startQuestion(model);' v-if='testStatus === "standby"'>Iniciar pregunta</button>
      <button class="start-question-button" @click='startAnswer(model);' v-if='testStatus === "questioning"'>Iniciar respuesta</button>
      <button class="start-question-button" @click='finishAnswer(model);' v-if='testStatus === "answering"'>Finalizar respuesta</button>
      <button class="start-question-button"
        @click='resetSystem({ model, 
          voiceModuleOlgaCategory,
          voiceModuleOlgaConfidence,
          voiceModuleOlgaStatus,
          voiceModuleLeonelCategory,
          voiceModuleLeonelConfidence,
          voiceModuleLeonelStatus,
          voiceModuleChanCategory,
          voiceModuleChanConfidence,
          voiceModuleChanStatus,
          eegModuleKochCategory,
          eegModuleKochConfidence,
          eegModuleKochStatus,
          eegModuleRudyCategory,
          eegModuleRudyConfidence,
          eegModuleRudyStatus,
          eegModuleAlvaroCategory,
          eegModuleAlvaroConfidence,
          eegModuleAlvaroStatus,
          microModuleCastroCategory,
          microModuleCastroConfidence,
          microModuleCastroStatus,
          microModuleNoriegaCategory,
          microModuleNoriegaConfidence,
          microModuleNoriegaStatus
        })'
        v-if='testStatus === "results"'>Reiniciar</button>
    </div>
  </div>
</template>


<script>
import {
  FlowerSpinner,
  RadarSpinner,
  FingerprintSpinner,
  LoopingRhombusesSpinner
} from "epic-spinners";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "home",
  components: {
    FlowerSpinner,
    RadarSpinner,
    FingerprintSpinner,
    LoopingRhombusesSpinner
  },
  data() {
    return {
      model: {
        id: "",
        gender: "",
        age: "",
        pebl: "",
        dsmt: "",
        hare: "",
        ciep: "",
        cief: "",
        ciec: "",
        ciem: "",
        cie: ""
      }
    };
  },
  computed: {
    ...mapGetters([
      "testStatus",
      "voiceModuleOlgaCategory",
      "voiceModuleOlgaConfidence",
      "voiceModuleOlgaStatus",
      "voiceModuleLeonelCategory",
      "voiceModuleLeonelConfidence",
      "voiceModuleLeonelStatus",
      "voiceModuleChanCategory",
      "voiceModuleChanConfidence",
      "voiceModuleChanStatus",
      "eegModuleKochCategory",
      "eegModuleKochConfidence",
      "eegModuleKochStatus",
      "eegModuleRudyCategory",
      "eegModuleRudyConfidence",
      "eegModuleRudyStatus",
      "eegModuleAlvaroCategory",
      "eegModuleAlvaroConfidence",
      "eegModuleAlvaroStatus",
      "microModuleCastroCategory",
      "microModuleCastroConfidence",
      "microModuleCastroStatus",
      "microModuleNoriegaCategory",
      "microModuleNoriegaConfidence",
      "microModuleNoriegaStatus"
    ])
  },
  methods: {
    ...mapActions([
      "startQuestion",
      "startAnswer",
      "finishAnswer",
      "startVoiceRecording",
      "startEegRecording",
      "startMicroRecording",
      "startVoiceAnalysis",
      "startEegAnalysis",
      "startMicroAnalysis",
      "resetSystem"
    ]),
    resultClass: (status, category) => {
      if (status === "finished") {
        if (category === "true") {
          return "module__true";
        }
        if (category === "false") {
          return "module__lie";
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.modules {
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 15px;
}

.personal-info {
  width: 90%;
  margin: auto;
  padding: 10px;
  border-radius: 10px;
  box-sizing: border-box;
  background-color: rgb(158, 211, 237);
}

.personal-info-inputs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.personal-info-input {
  margin: 0 10px;
}

.module {
  width: 30%;
  height: 550px;
  padding: 20px;
  border-radius: 10px;
  box-sizing: border-box;
  background-color: rgb(158, 211, 237);
}

.submodule {
  padding: 5px;
  margin-bottom: 5px;
  background-color: rgb(199, 233, 249);
  border-radius: 10px;
}

.module__true {
  background-color: rgb(90, 193, 79);
}

.module__lie {
  background-color: rgb(193, 90, 79);
}

.module-spinner {
  margin: auto;
  margin-top: 20px;
}

.module__results {
  margin-top: 20px;
}

.test-controls {
  margin-top: 20px;
}

.start-question-button {
  background-color: rgb(221, 234, 255);
  font-size: 30px;
  padding: 20px;
  border-radius: 5px;
  border: none;
}

.set-personal-info-button {
  margin-top: 10px;
  background-color: rgb(221, 234, 255);
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
  border: none;
}
</style>
