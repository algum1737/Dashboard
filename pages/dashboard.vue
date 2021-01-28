<template>
  <v-container>
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
      </v-card>
    </v-dialog>
    <v-row justify="center" align="center">
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
            class="elevation-1 tableSet"
            @click:row="handleClick"            
            :items-per-page="3"
          >
            <template v-slot:item.Status="{ item }">
              <!-- <td :style="`${item.Status}`==Faluted?'color:red':'color:blue'">{{item.Status}}</td> -->
              <p style="margin:0" v-html="$options.filters.StatusColorJob(item.Status)">{{item.Status}}</p>
            </template>          
          </v-data-table>        
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
            class="elevation-1 tableSet"
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
            <pie-chart style="height:200px;width:200px; margin-bottom:25px"></pie-chart>
          </v-card>
          <v-card>
            <bar-chart style="height:200px;width:200px; margin-bottom:25px"></bar-chart>
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
            :items="Robots"
            :items-per-page="4"
            class="elevation-1 tableSet"
          >
            <template v-slot:item.Status="{ item }">
              <!-- <td :style="`${item.Status}`==Faluted?'color:red':'color:blue'">{{item.Status}}</td> -->
              <p style="margin:0" v-html="$options.filters.StatusColorRobots(item.Status)">{{item.Status}}</p>
            </template>             
          </v-data-table>        
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6">
        <v-card style="min-width:1000px">
        <line-chart></line-chart>
        </v-card>
      </v-col>
    </v-row>
  </v-container>  
</template>

<script>
import BarChart from '../components/BarChart.vue';
import LineChart from '../components/LineChart.vue';
import PieChart from '../components/PieChart.vue';

export default {
  components:{
    LineChart,
    PieChart,
    BarChart,
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
