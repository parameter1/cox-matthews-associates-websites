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
      tooltips: {
        callbacks: {
          label: (tooltipItem, data) => {
            const salary = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
            const formatter = new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
            });
            return formatter.format(salary);
          },
        },
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
      const color = index % 2 === 1 ? '#b1c5d4' : '#356e8c';
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
