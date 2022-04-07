import Vue from "vue";
import moment, {Moment} from "moment";
moment.locale('fr')
Vue.filter('dateToString', function (today: Moment) {
  console.log("HGEHEDHJDEHJKDEJK")
  return moment(today).format('LL');
})
