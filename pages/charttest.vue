<template>
  <div>
    <h1>Chart Demo</h1>

    <div class="grid">
      <line-chart></line-chart>
      <bar-chart></bar-chart>
      <buble-chart></buble-chart>
      <div style="width:500px">
      <pie-chart></pie-chart>
      </div>
      <radar-chart></radar-chart>
    </div>
  </div>
</template>

<script>
import BarChart from '../components/BarChart.vue';
import BubleChart from '../components/BubleChart.vue';
import LineChart from '../components/LineChart.vue';
import PieChart from '../components/PieChart.vue';
import RadarChart from '../components/RadarChart.vue';
// import ChartDoughnut from "@/components/ChartDoughnut";
// import ChartLine from "@/components/ChartLine";

export default {
  components: {
    LineChart,
    BarChart,
    BubleChart,
    PieChart,
    RadarChart
  },
  data(){
    return {
    }
  }
};
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
}
</style>