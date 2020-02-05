<template>
 <div class="chart">
  <highcharts :options="chartOptions" :highcharts="hcInstance"></highcharts>
 </div>
</template>

<script>
import Highcharts from 'highcharts'
export default {
  name: 'doughnut',
 
 data() {
		return {
			hcInstance: Highcharts,
			chartOptions: { 
        
        chart: {
        type: 'pie',
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false
    },
    title: {
        text: 'Téléchargements totaux par version',
        align: 'center',   
        y: 70
    },
    subtitle: {
        text: 'Source: M-store.com',
        y: 90
    },

    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: true,
                distance: -50,
                style: {
                    fontWeight: 'bold',
                    color: 'white'
                }
            },
            startAngle: -90,
            endAngle: 90,
            center: ['50%', '75%'],
            size: '110%'
        }
    },
    series: [{    
        name: 'downloads',
        innerSize: '50%',
        data: [
            ['ver. 6', 15800.9],
            ['ver. 5', 17670],
            ['ver. 3', 7290],
            ['ver. 1', 3390]         
        ]
    }]
}
}
},


  async mounted() {

  const response = await this.$axios.get('https://www.appaloosa-store.com/api/v2/8882/mobile_application_updates/365576?api_key=f8p7la35opubc5zzy02euwa6rnd10v')
  this.chartOptions.series[0].data[0,1] = response.data.mobile_application_update.groups_ids
  //debugger;



 }}
</script>

<style scoped>
.chart{
}
</style>
