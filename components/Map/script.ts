export default {
  name: "Map",
  data () {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 30,
      center: [48.104275, -1.688926],
      markerLatLng: [48.104275, -1.688926]
    };
  }
}
