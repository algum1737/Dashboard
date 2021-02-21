import Vue from "vue"

Vue.filter("StatusColorJob", (value) => {
  if (value=='Faluted') return ('<span style="color:red">' + value + '</span>')
  else if (value=='Successful') return ('<span style="color:green">' + value + '</span>')
  else if (value=='Running') return ('<span style="color:blue">' + value + '</span>')
  else if (value=='Stopping') return ('<span style="color:blue">' + value + '</span>')
  else return ('<span style="color:white">' + value + '</span>')

 
});
Vue.filter("StatusColorRobots", (value) => {
//   if (value=='Faluted') return ('dkdkdkdk')
  if (value=='Available') return ('<span style="color:green">' + value + '</span>')
  else if (value=='Busy') return ('<span style="color:blue">' + value + '</span>')
  else if (value=='Unresponsive') return ('<span style="color:gray">' + value + '</span>')
  else return ('<span style="color:red">' + value + '</span>')
});