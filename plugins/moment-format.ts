import Vue from "vue";
import moment, {Moment} from "moment";
moment.locale('fr')
Vue.filter('dateToString', function (today: Moment) {
  return moment(today).format('LL');
})
