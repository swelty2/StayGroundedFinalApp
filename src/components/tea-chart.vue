<template>
  <div class="container">
    <div class="jumbotron">
      <div>
        <h2>{{ teaTitle }}</h2>
        <apexchart type=bar height=850 :options="chartOptions" :series="series" />
        <h5>Disclaimer: Data fetched from https://www.statista.com/statistics/507950/global-per-capita-tea-consumption-by-country/</h5>
      </div>
    </div>
  </div>
</template>
<script>
    export default {
      name: "tea-chart",
      data() {
        return {
          teaTitle: 'Tea Consumption worldwide as per 2016',
          series: [{
            data: [6.96, 4.83, 4.28, 3.05, 2.68, 2.63, 2.23, 2.2, 2.13, 1.98, 1.79, 1.72, 1.65, 1.61, 1.59, 1.43,
            1.28, 1.25, 1.12, 1.06, 1.01, 0.97, 0.93, 0.81, 0.8, 0.72, 0.65, 0.64, 0.6, 0.59, 0.54, 0.5, 0.47,
            0.45, 0.44, 0.44, 0.37, 0.32, 0.32, 0.31, 0.28, 0.24, 0.16, 0.14, 0.11, 0.06, 0.05, 0.05, 0.05, 0.04,
            0.04, 0.03]
          }],
          chartOptions: {
            plotOptions: {
              bar: {
                horizontal: true,
              }
            },
            dataLabels: {
              enabled: false
            },
            xaxis: {
              categories: ['Turkey', 'Ireland', 'United Kingdom', 'Russia', 'Morocco', 'New Zealand', 'Egypt', 'Poland',
                'Japan', 'Saudi Arabia', 'South Africa', 'Netherlands', 'Australia', 'Chile', 'UAE', 'Germany', 'Hong Kong',
                'Ukraine', 'China', 'Canada', 'Malaysia', 'Indonesia', 'Switzerland', 'Czech Republic', 'Singapore',
                'Slovakia', 'India', 'Taiwan', 'Sweden', 'Hungary', 'Norway', 'Austria', 'Finland', 'United States',
                'Argentina', 'Israel', 'France', 'Vietnam', 'South Korea', 'Spain','Denmark', 'Italy', 'Belgium', 'Bulgaria',
                'Romania', 'Portugal', 'Thailand', 'Philippines', 'Greece', 'Venezuela', 'Peru', 'Columbia', 'Brazil', 'Mexico'
              ],
            }
          }
        }
      }
    }
</script>

<style scoped>

</style>
