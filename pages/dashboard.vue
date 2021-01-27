<template>
  <v-row justify="center" align="center" class="mt-3">
    <v-dialog
      v-model="dialog"
      
      max-width="700"
    >
      <v-card>
        <v-card-title class="headline" style="justify-content:center">
          Job Logs
        </v-card-title>
        <v-card-text>
          <div class="text-h2 pa-12" style="height:600px">log 입력 필요</div>
        </v-card-text>
        <!-- <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
        </v-card-actions> -->
      </v-card>
    </v-dialog>
    <v-row>
      <v-col cols="12" sm="8" md="6" >
        <v-card>
          <v-card-title class="headline">
            Jobs
          <v-spacer></v-spacer>
          <v-text-field
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
            v-model="jsearch"
          ></v-text-field>            
          </v-card-title>
          <v-data-table
            :search="jsearch"
            :headers="headers"
            :items="jobs"
            :items-per-page="3"
            class="elevation-1"
            @click:row="handleClick"            
          ></v-data-table>        
        </v-card>
        <v-card class="mt-5">
          <v-card-title class="headline">
            Schedules
          <v-spacer></v-spacer>
          <v-text-field
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
            v-model="ssearch"
          ></v-text-field>            
          </v-card-title>
          <v-data-table
            :search="ssearch"
            :headers="headers1"
            :items="schedules"
            :items-per-page="3"
            class="elevation-1"
          ></v-data-table>        
        </v-card>
      </v-col>
      <v-col cols="12" sm="8" md="6">
        <v-card>
          <v-card-title class="headline">
            Summary
          </v-card-title>
          <div  class="d-flex justify-center">
          <v-card>
              <div style="height:200px;width:200px">
                <h1>설명</h1>
              </div>  
          </v-card>
          <v-card>
              <div style="height:200px;width:200px">
                <h1>표</h1>
              </div>  
          </v-card>
          </div>
        </v-card>
        <v-card class="mt-5">
          <v-card-title class="headline">
            Robots
          <v-spacer></v-spacer>
          <v-text-field
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
            v-model="rsearch"
          ></v-text-field>            
          </v-card-title>
          <v-data-table
            :search="rsearch"
            :headers="headers2"
            :items="schedules"
            :items-per-page="4"
            class="elevation-1"
          ></v-data-table>        
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center" align="center" class="mt-5">
      <v-col cols="12" sm="8" md="6">
        <v-card style="min-width:1000px">
        <line-chart></line-chart>
        </v-card>
      </v-col>
    </v-row>
  </v-row>
</template>

<script>
import LineChart from '../components/LineChart.vue';

export default {
  components:{
    LineChart,
  },
  methods: {
    handleClick(row) {
    // this.jobs.map((item, index) => {
    //     item.selected = item === row

    //     this.$set(this.jobs, index, item)
    // })
    this.dialog = true
    console.log(row.StartTime)
  },
  },
  data() {
    return {
      dialog: false,      
      jsearch:'',
      ssearch:'',
      rsearch:'',
      headers: [
        {
          text: 'StartTime',
          align: 'start',
          sortable: false,
          value: 'StartTime',
        },
        { text: 'JobName', value: 'JobName' },
        { text: 'Status', value: 'Status' },
      ],
      jobs: [
        {
          StartTime : "01/25 12:34",
          JobName : "TEST001_TestJob_UREnv",
          Status : "Faluted"
        },
        {
          StartTime : "01/26 12:34",
          JobName : "TEST001_TestJob_UREnv",
          Status : "Faluted"
        },
        {
          StartTime : "01/27 12:34",
          JobName : "TEST001_TestJob_UREnv",
          Status : "Faluted"
        },
        {
          StartTime : "01/28 12:34",
          JobName : "TEST001_TestJob_UREnv",
          Status : "Faluted"
        },
        {
          StartTime : "01/29 12:34",
          JobName : "TEST001_TestJob_UREnv",
          Status : "Faluted"
        },
        {
          StartTime : "01/30 12:34",
          JobName : "TEST001_TestJob_UREnv",
          Status : "Faluted"
        }
      ],
      headers1: [
        {
          text: 'ScheduleTime',
          align: 'start',
          sortable: false,
          value: 'ScheduleTime',
        },
        { text: 'SchedlueName', value: 'SchedlueName' },
        { text: 'Environment', value: 'Environment' },
      ],
      schedules: [
        {
          ScheduleTime : "01/25 12:34",
          SchedlueName : "TEST001_TestJob_UREnv_14:00",
          Environment : "RPA_ROOM_UR"
        },        
        {
          ScheduleTime : "01/26 12:34",
          SchedlueName : "TEST001_TestJob_UREnv_14:00",
          Environment : "RPA_ROOM_UR"
        },        
        {
          ScheduleTime : "01/27 12:34",
          SchedlueName : "TEST001_TestJob_UREnv_14:00",
          Environment : "RPA_ROOM_UR"
        },        
        {
          ScheduleTime : "01/28 12:34",
          SchedlueName : "TEST001_TestJob_UREnv_14:00",
          Environment : "RPA_ROOM_UR"
        },        
        {
          ScheduleTime : "01/29 12:34",
          SchedlueName : "TEST001_TestJob_UREnv_14:00",
          Environment : "RPA_ROOM_UR"
        },        
        {
          ScheduleTime : "01/30 12:34",
          SchedlueName : "TEST001_TestJob_UREnv_14:00",
          Environment : "RPA_ROOM_UR"
        },        
      ],
      headers2: [
        {
          text: 'RobotName',
          align: 'start',
          sortable: false,
          value: 'RobotName',
        },
        { text: 'Environments', value: 'Environments' },
        { text: 'Jobs', value: 'Jobs' },
        { text: 'Status', value: 'Status' },
      ],
      Robots: [],
    }
  },
}
</script>