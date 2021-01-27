<template>
  <v-container justify="center" align="center" class="mt-3">
    <v-row>
      <v-col cols="3" sm="3" md="3">
        <v-card>
          <v-card-title class="headline">
            Job Result
          </v-card-title>
          <div style="width:300px; height:200px"></div>      
        </v-card>
      </v-col>
      <v-col cols="6" sm="6" md="6">
        <v-card>
          <v-card-title class="headline">
            Robot Network
          </v-card-title>
          <div style="width:300px; height:200px"></div>      
        </v-card>
      </v-col>
      <v-col cols="3" sm="3" md="3">
        <v-card>
          <v-card-title class="headline">
            AR Robot Status
          </v-card-title>
          <div style="width:300px; height:200px"></div>      
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-card>
          <v-card-title class="headline">
            Schedult & Job Result
          </v-card-title>
          <div style="width:300px; height:200px"></div>      
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card>
          <v-card-title class="headline">
            Robot Network
          </v-card-title>
          <div style="width:300px; height:200px"></div>      
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="12">
        <v-card>
          <v-card-title class="headline">
            Time Table
          </v-card-title>
          <div style="width:300px; height:200px"></div>                
        </v-card>
      </v-col>      
    </v-row>
    <!-- <v-row justify="center" align="center" class="mt-5">
      <v-col cols="12" sm="8" md="6">
        <v-card style="min-width:1000px">
        <line-chart></line-chart>
        </v-card>
      </v-col>
    </v-row> -->
  </v-container>
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
          Status : "Pending"
        },
        {
          StartTime : "01/27 12:34",
          JobName : "TEST001_TestJob_UREnv",
          Status : "Running"
        },
        {
          StartTime : "01/28 12:34",
          JobName : "TEST001_TestJob_UREnv",
          Status : "Stoped"
        },
        {
          StartTime : "01/29 12:34",
          JobName : "TEST001_TestJob_UREnv",
          Status : "Successful"
        },
        {
          StartTime : "01/30 12:34",
          JobName : "TEST001_TestJob_UREnv",
          Status : "Stopping"
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
      Robots: [
        {
          RobotName : "Robot001",
          Environments : "RPA_ROOM_UR",
          Jobs : "TEST001_TestJob_UREnv",
          Status : "Busy"
        },         
        {
          RobotName : "Robot002",
          Environments : "RPA_ROOM_UR",
          Jobs : "-",
          Status : "Available"
        },         
        {
          RobotName : "Robot003",
          Environments : "RPA_ROOM_UR",
          Jobs : "TEST001_TestJob_UREnv",
          Status : "Busy"
        },         
        {
          RobotName : "Robot004",
          Environments : "RPA_ROOM_AR",
          Jobs : "TEST002_TestJob_AREnv",
          Status : "Busy"
        },         
        {
          RobotName : "Robot005",
          Environments : "RPA_ROOM_UR",
          Jobs : "TEST001_TestJob_UREnv",
          Status : "Disconnected"
        },         
        {
          RobotName : "Robot006",
          Environments : "RPA_ROOM_UR",
          Jobs : "TEST001_TestJob_UREnv",
          Status : "Busy"
        },   
        {
          RobotName : "Robot007",
          Environments : "RPA_ROOM_AR",
          Jobs : "TEST002_TestJob_AREnv",
          Status : "Disconnected"
        },               
      ],
    }
  },
}
</script>
<style scoped>
.test1{
  color: red !important;
}
</style>>