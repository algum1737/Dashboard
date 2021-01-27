<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6" style="margin-top: 100px; max-width:500px">

      <v-card>
        <v-card-title class="headline">
          DashBoard Login 페이지
        </v-card-title>
        <form>
          <v-select
            :items="items"
            v-model="selectedTenent"
            label="테넌트선택"
            outlined
          ></v-select>
          <v-text-field
            v-model="userId"
            label="ID"
            placeholder="ID입력"
          ></v-text-field>
          <v-text-field
            v-model="userPw"
            label="PW"
            type="password"
            placeholder="PW입력"
          ></v-text-field>
        </form>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" @click="login()"> Login </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  layout: 'single',
  // components: {
  //   Logo,
  //   VuetifyLogo,
  // },
    data: () => ({
      items: ["te1","te2"],
      userId:'',
      userPw:'',
      selectedTenent:'',
    }),
    methods: {
      login(){
        this.$router.push({path:'/dashboard',query:{'Login':true}})
        let params={
          userId: this.userId,
          userPw: this.userPw,
          tenent: this.selectedTenent
        }
        console.log("params",params);
      }
    },  
}
</script>
