<template>
  <div class="container">
    <div class="jumbotron">
      <div>
        <h2>{{ coffeeTitle }}</h2>
        <p>Two types of coffee dominate commercial production:
          Arabica (Coffee Arabica) and Robusta (Coffee Canephora) --
          World coffee production is split 60% Arabica and 40% Robusta</p>
        <apexchart type=pie width=600 :options="coffeeCountries" :series="coffeeValues" />
        <h5>Disclaimer: Data fetched from http://www.e-importz.com/coffee-economics.php</h5>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "coffee-chart",
    data() {
          return {
            coffeeTitle: 'World Coffee Production',
            coffeeValues: [36, 12, 4.5, 6.7, 5.5, 4.2, 4.1, 6.7, 11.5, 1.3, 2.8, 4.7],
            coffeeCountries: {
              labels: ['Brazil Coffee Production', 'Vietnam', 'Mexico', 'Indonesia', 'India', 'Guatemala', 'Ivory Coast'
              ,'Other Producing Countries', 'Colombia', 'Kenya', 'Uganda', 'Ethiopia'],
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    position: 'top'
                  }
                }
              }]
            }
          }
    }

    }
</script>

<style scoped>

</style>
