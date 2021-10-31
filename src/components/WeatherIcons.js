import sun from '../assets/images/icons/sun.png'
import cloud from '../assets/images/icons/cloud.png'
import cloudy from '../assets/images/icons/cloudy.png'
import all from '../assets/images/icons/all.png'
import lightrain from '../assets/images/icons/lightrain.png'
import mist from '../assets/images/icons/mist.png'
import rain from '../assets/images/icons/rain.png'
import storm from '../assets/images/icons/storm.png'
import snow from '../assets/images/icons/snow.png'

const WeatherIcons = (theme) => {
    switch (theme) {
        case "Clear":
          return sun;
        case "Few clouds":
          return cloudy;
        case "Scattered clouds":
          return cloudy;
        case "Clouds":
          return cloud;
        case "Overcast clouds":
        return cloud;
        case "Shower rain":
          return lightrain;
        case "Rain":
          return rain;
        case "Thanderstorm":
          return storm
        case "Mist":
          return mist;
        case "Snow":
            return snow;
        default:
          return all;
      }
}

export default WeatherIcons;
