<template>
  <div class="home">
    <div class="modules">
      <div class="module" :class="resultClass(voiceModuleStatus, voiceModuleCategory)">
        <h3>Análisis de voz</h3>
        <looping-rhombuses-spinner
          v-if='voiceModuleStatus === "recording"'
          :animation-duration="3000"
          :rhombus-size="30"
          color="#ff1d5e"
          class="module-spinner" />
        <radar-spinner
          v-if='voiceModuleStatus === "analyzing"'
          :animation-duration="2500"
          :size="120"
          :color="'#ffffff'"
          class="module-spinner"
        />
        <div class='module__results' v-if='voiceModuleStatus === "finished"'>
          <h2>Confianza: {{ voiceModuleConfidence }}%</h2>
          <h2>Resultado: {{ voiceModuleCategory === 'truth' ? 'Verdad' : 'Mentira' }}</h2>
        </div>
      </div>
      <div class="module" :class="resultClass(eegModuleStatus, eegModuleCategory)">
        <h3>Análisis de señales electroencefalográficas</h3>
        <looping-rhombuses-spinner
          v-if='eegModuleStatus === "recording"'
          :animation-duration="3000"
          :rhombus-size="30"
          color="#ff1d5e"
          class="module-spinner" />
        <flower-spinner
          v-if='eegModuleStatus === "analyzing"'
          :animation-duration="2500"
          :size="120"
          :color="'#ffffff'"
          class="module-spinner"
        />
        <div class='module__results' v-if='eegModuleStatus === "finished"'>
          <h2>Confianza: {{ eegModuleConfidence }}%</h2>
          <h2>Resultado: {{ eegModuleCategory === 'truth' ? 'Verdad' : 'Mentira' }}</h2>
        </div>
      </div>
      <div class="module" :class="resultClass(microModuleStatus, microModuleCategory)">
        <h3>Análisis de microexpresiones</h3>
        <looping-rhombuses-spinner
          v-if='microModuleStatus === "recording"'
          :animation-duration="3000"
          :rhombus-size="30"
          color="#ff1d5e"
          class="module-spinner" />
        <fingerprint-spinner
          v-if='microModuleStatus === "analyzing"'
          :animation-duration="2500"
          :size="120"
          :color="'#ffffff'"
          class="module-spinner"
        />
        <div class='module__results' v-if='microModuleStatus === "finished"'>
          <h2>Confianza: {{ microModuleConfidence }}%</h2>
          <h2>Resultado: {{ microModuleCategory === 'truth' ? 'Verdad' : 'Mentira' }}</h2>
        </div>
      </div>
    </div>
    <div class="test-controls">
      <button class="start-question-button" @click='startQuestion(); startEegRecording()' v-if='testStatus === "standby"'>Iniciar pregunta</button>
      <button class="start-question-button" @click='startAnswer(); startVoiceRecording(); startMicroRecording()' v-if='testStatus === "questioning"'>Iniciar respuesta</button>
      <button class="start-question-button" @click='finishAnswer(); startVoiceAnalysis(); startEegAnalysis(); startMicroAnalysis()' v-if='testStatus === "answering"'>Finalizar respuesta</button>
      <button class="start-question-button" @click='resetSystem()' v-if='testStatus === "results"' :disabled='(voiceModuleStatus === "analyzing" || eegModuleStatus === "analyzing" || microModuleStatus === "analyzing") ? true : null'>Reiniciar</button>
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
  computed: {
    ...mapGetters([
      "testStatus",
      "voiceModuleCategory",
      "voiceModuleConfidence",
      "voiceModuleStatus",
      "eegModuleCategory",
      "eegModuleConfidence",
      "eegModuleStatus",
      "microModuleCategory",
      "microModuleConfidence",
      "microModuleStatus"
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
        if (category === "truth") {
          return "module__truth";
        }
        if (category === "lie") {
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
}

.module {
  width: 30%;
  height: 400px;
  padding: 20px;
  border-radius: 10px;
  box-sizing: border-box;
  background-color: rgb(158, 211, 237);
}

.module__truth {
  background-color: rgb(90, 193, 79);
}

.module__lie {
  background-color: rgb(193, 90, 79);
}

.module-spinner {
  margin: auto;
  margin-top: 90px;
}

.module__results {
  margin-top: 90px;
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
</style>
