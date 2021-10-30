import lightrain from "../assets/images/lightrain.jpg"
import clearsky2 from "../assets/images/clearsky2.jpg"
import mist from "../assets/images/mist.jpg"
import snow from "../assets/images/snow.jpg"
import thanderstorm from "../assets/images/thanderstorm.jpg"
import newcloud from "../assets/images/newcloud.jpg"
import newcloud2 from "../assets/images/newcloud2.jpg"

const wallpaper = (theme) => {
  switch (theme) {
    case "clear sky":
      return clearsky2
    case "few clouds":
      return newcloud;
    case "scattered clouds":
      return newcloud;
    case "broken clouds":
      return newcloud2;
    case "overcast clouds":
    return newcloud2;
    case "shower rain":
      return lightrain;
    case "rain":
      return lightrain;
    case "thanderstorm":
      return thanderstorm
    case "mist":
      return mist;
    case "snow":
        return snow;
    default:
      return newcloud2;
  }
}

export default wallpaper
