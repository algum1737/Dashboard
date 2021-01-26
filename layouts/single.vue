<template>
  <v-app dark>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      // login 여부확인용 boolean 값필요
      Login: true,
      // login User명
      loginUserNm:'',
      // items: [
      //   // {
      //   //   icon: 'mdi-apps',
      //   //   title: 'Welcome',
      //   //   to: '/',
      //   // },
      //   {
      //     icon: 'mdi-chart-bubble',
      //     title: '메뉴1',
      //     to: '/inspire',
      //   },
      //   {
      //     icon: 'mdi-chart-bubble',
      //     title: '메뉴2',
      //     to: '/test',
      //   },
      //   {
      //     icon: 'mdi-chart-bubble',
      //     title: 'charttest',
      //     to: '/charttest',
      //   },
      // ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Title입력',
    }
  },
}
</script>
