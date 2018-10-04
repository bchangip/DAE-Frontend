<template>
  <div class="home">
    <div class="modules">
      <div class="module">
        <h3>Análisis de voz</h3>
        <radar-spinner
          :animation-duration="2500"
          :size="120"
          :color="'#ffffff'"
          class="module-spinner"
        />
      </div>
      <div class="module">
        <h3>Análisis de señales electroencefalográficas</h3>
        <flower-spinner
          :animation-duration="2500"
          :size="120"
          :color="'#ffffff'"
          class="module-spinner"
        />
      </div>
      <div class="module">
        <h3>Análisis de microexpresiones</h3>
        <fingerprint-spinner
          :animation-duration="2500"
          :size="120"
          :color="'#ffffff'"
          class="module-spinner"
        />
      </div>
    </div>
    <div class="test-controls">
      <button class="start-test-button">Iniciar prueba</button>
    </div>
  </div>
</template>


<script>
import { FlowerSpinner, RadarSpinner, FingerprintSpinner } from "epic-spinners";
export default {
  name: "home",
  components: {
    FlowerSpinner,
    RadarSpinner,
    FingerprintSpinner
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

.module-spinner {
  margin: auto;
  margin-top: 90px;
}

.test-controls {
  margin-top: 20px;
}

.start-test-button {
  background-color: rgb(221, 234, 255);
  padding: 20px;
  border-radius: 5px;
  border: none;
}
</style>
