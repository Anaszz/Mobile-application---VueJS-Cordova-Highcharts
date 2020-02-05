<template>
  <div>
    <highcharts :options="chartOptions" :highcharts="hcInstance"></highcharts>
  </div>
</template>

<script>

import Highcharts from 'highcharts'

export default {
	name: 'linechart',
	data() {
		return {
			hcInstance: Highcharts,
			chartOptions: {
            chart: {
        type: 'line'
                    },   
     title: {
        text: 'Nombre de téléchargements de l\'application par version au fil du temps (Line)'
    },
    subtitle: {
        text: 'Source: M-store.com'
    },
    xAxis: {
        categories: ['Mars','Avril', 'Mai', 'Juin', 'Juillet', 'Aout'],
        tickmarkPlacement: 'on',
        title: {
            enabled: false
        }
    },
    yAxis: {
        title: {
            text: 'Télechargements'
        },
        labels: {
            formatter: function () {
                return this.value;
            }
        }
    },
    tooltip: {
        split: true,
        valueSuffix: ' downloads'
    },
    plotOptions: {
        area: {
            stacking: 'normal',
            lineColor: '#666666',
            lineWidth: 1,
            marker: {
                lineWidth: 1,
                lineColor: '#666666'
            }
        }
    },
    series: [{
        name: ['version', ''],
        data: []
    }, {
       name: ['version', '5'],
        data: [1060, 1070, 1110, 10330, 11210, 17670, 27660]
    }, {
       name: ['version', '3'],
        data: [160, 2030, 2706, 4080, 5470, 7290, 16208]
    }, {
        name: ['version', '1'],
        data: [180, 301, 504, 1560, 3390, 8180, 7001]
    }]
}
			}
	},

  async mounted() {

  const response = await this.$axios.get('https://www.appaloosa-store.com/api/v2/8882/mobile_application_updates/365576?api_key=f8p7la35opubc5zzy02euwa6rnd10v')
  //debugger;
  this.chartOptions.series[0].data = response.data.mobile_application_update.groups_ids
  this.chartOptions.series[0].name[1] = response.data.mobile_application_update.version

}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
