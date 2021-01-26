<script>
import {Radar} from 'vue-chartjs'
export default {
    extends: Radar,
    data() {
        return{
            datacollection:{
    labels: ['Musical', 'Logical', 'Interpersonal', 'Linguistic' ,'Intra-personal'],
      datasets: [
          {
             label: 'Participant A',
             backgroundColor: 'rgba(255, 99, 132, 0.2)',
             borderColor: 'rgba(255, 99, 132, 0.2)',
             borderWidth: 1 ,
             pointBackgroundColor: "rgba(255, 255, 255, 0)",
             pointBorderColor: "rgba(255, 255, 255, 0)",
             data: [75, 85, 40, 30, 67],
          }, 
          {
             label: 'Participant B',
             backgroundColor: 'rgba(32, 160, 219, 0.2)',
             borderColor: 'rgba(32, 160, 219, 0.2)',
             borderWidth: 1 ,
             pointBackgroundColor: "rgba(255, 255, 255, 0)",
             pointBorderColor: "rgba(255, 255, 255, 0)",
             data: [85, 20, 64, 83, 75],
           }
       ]
            },
            options:{
                angleLines:{
                    display:false
                },
                responsive: true,
                scales: {
                        yAxes: [
                            {
                                ticks: {
                                    beginAtZero: true,
                                    display: false,
                                    // min: 0,
                                    // max: 10,
                                },
                                gridLines: {
                                    display: false,
                                },
                                scaleLabel: {
                                    display: false,
                                }
                            }
                        ],
                        xAxes: [
                            {
                                gridLines: {
                                    display: false,
                                },
                                scaleLabel: {
                                    display: false,
                                }                                
                            }
                        ]
                    }
            }
        }
    },
    mounted () {
      //renderChart function renders the chart with the datacollection and options object.
      this.renderChart(this.datacollection, this.options)
    }    
}
</script>
