<template>
  <vue-chart
    type="horizontalBar"
    :data="chartData"
    :options="options"
  />
</template>
<script>
import VueChart from 'vue-chart-js';

export default {
  components: {
    VueChart,
  },
  props: {
    schools: {
      type: Array,
      default: () => [],
    },
    chartTitle: {
      type: String,
      default: 'Bar Chart',
    },
    valueKey: {
      type: String,
      require: true,
      default: '',
    },
  },

  data: () => ({
    chartData: {},
    options: {
      legend: {
        display: false,
      },
      scales: {
        x: {
          min: 20000,
        },
      },
      title: {
        display: true,
        text: 'Custom Bar Chart',
      },
    },
  }),

  created() {
    const { schools, chartTitle, valueKey } = this;
    this.options.title.text = chartTitle;
    const chartLabels = [];
    const data = [];
    const colorPattern = [];
    schools.forEach((school, index) => {
      chartLabels.push(school.name);
      const value = school[valueKey] ? school[valueKey] : 0;
      const color = index % 2 === 1 ? '#89b2d1' : '#1e6991';
      colorPattern.push(color);
      data.push(value);
    });
    this.chartData = {
      labels: chartLabels,
      datasets: [
        {
          label: this.label,
          data,
          maxBarThickness: 5,
          backgroundColor: colorPattern,
        },
      ],
    };
  },

};
</script>
