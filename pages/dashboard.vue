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
    <v-btn @click="changeData()"></v-btn>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6" >
        <v-card>
          <v-card-title class="headline">
            Jobs
          </v-card-title>
          <v-data-table
            hide-default-footer
            :headers="headers"
            :items="jobs"
            :sort-by.sync="jobSortBy"
            :sort-desc.sync="jobSortDesc"
            class="elevation-1 tableSet tableScroll"
            @click:row="handleClick"            
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
          </v-card-title>
          <v-data-table
            :sort-by.sync="schSortBy"
            :sort-desc.sync="schSortDesc"
            :headers="headers1"
            :items="schedules"
            hide-default-footer
            class="elevation-1 tableSet tableScroll"
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
          </v-card-title>
            <!-- :sort-by.sync="robotSortBy"
            :sort-desc.sync="robotSortDesc" -->
          <v-data-table
            :headers="headers2"
            :items="Robots"
            hide-default-footer
            :sort-by.sync="robotSortBy"
            :sort-desc.sync="robotSortDesc"
            multi-sort
            class="elevation-1 tableSet tableScroll"
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
import d3 from '../components/d3.vue'
export default {
  components:{
    LineChart,
    PieChart,
    BarChart,
    d3
  },
  methods: {
    changeData(){
      console.log(this.jobs.length);
      this.jobs = [
        {
          StartTime : 1,
          JobName : "TEST001",
          Status : "Faluted"
        },
        {
          StartTime : 2,
          JobName : "test",
          Status : "Pending"
        },
      ]
    },
    
    handleClick(row) {
    // this.jobs.map((item, index) => {
    //     item.selected = item === row

    //     this.$set(this.jobs, index, item)
    // })
    this.dialog = true
    console.log(row.StartTime)
  },

    //   customSort: function(items, index, isDesc) {
    //   items.sort((a, b) => {
    //       if (index[0]=='date') {
    //         if (!isDesc[0]) {
    //             return new Date(b[index]) - new Date(a[index]);
    //         } else {
    //             return new Date(a[index]) - new Date(b[index]);
    //         }
    //       }
    //       else {
    //         if(typeof a[index] !== 'undefined'){
    //           if (!isDesc[0]) {
    //              return a[index].toLowerCase().localeCompare(b[index].toLowerCase());
    //           }
    //           else {
    //               return b[index].toLowerCase().localeCompare(a[index].toLowerCase());
    //           }
    //         }
    //       }
    //   });
    //   return items;
    // }
  },
  data() {
    return {
      jobSortBy: 'StartTime',
      jobSortDesc: false,
      schSortBy: 'ScheduleTime',
      schSortDesc: false,
      robotSortBy: ['Status','RobotName'],
      robotSortDesc: [true,false],
      dialog: false,      
      jsearch:'',
      ssearch:'',
      rsearch:'',
      headers: [
        {
          text: 'StartTime',
          align: 'start',
          value: 'StartTime',
        },
        { text: 'JobName', sortable: false, value: 'JobName' },
        { text: 'Status', value: 'Status' },
      ],
      jobs: [
        {
          StartTime : 1,
          JobName : "TEST001_TestJob_UREnv",
          Status : "Faluted"
        },
        {
          StartTime : 1,
          JobName : "TEST001_TestJob_UREnv",
          Status : "Faluted"
        },
        {
          StartTime : 1,
          JobName : "TEST001_TestJob_UREnv",
          Status : "Faluted"
        },
        {
          StartTime : 1,
          JobName : "TEST001_TestJob_UREnv",
          Status : "Faluted"
        },
        {
          StartTime : 1,
          JobName : "TEST001_TestJob_UREnv",
          Status : "Faluted"
        },
        {
          StartTime : 2,
          JobName : "TEST001_TestJob_UREnv",
          Status : "Pending"
        },
        {
          StartTime :5,
          JobName : "TEST001_TestJob_UREnv",
          Status : "Running"
        },
        {
          StartTime : 6,
          JobName : "TEST001_TestJob_UREnv",
          Status : "Stoped"
        },
        {
          StartTime : 4,
          JobName : "TEST001_TestJob_UREnv",
          Status : "Successful"
        },
        {
          StartTime :10,
          JobName : "TEST001_TestJob_UREnv",
          Status : "Stopping"
        }
      ],
      headers1: [
        {
          text: 'ScheduleTime',
          align: 'start',
          value: 'ScheduleTime',
        },
        { text: 'SchedlueName', sortable: false, value: 'SchedlueName' },
        { text: 'Environment', sortable: false, value: 'Environment' },
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
          value: 'RobotName',
        },
        { text: 'Environments', sortable: false, value: 'Environments' },
        { text: 'Jobs', sortable: false, value: 'Jobs' },
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
          RobotName : "Robot007",
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

