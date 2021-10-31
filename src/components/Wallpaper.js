import lightrain from "../assets/images/lightrain.jpg"
import clearsky2 from "../assets/images/clearsky2.jpg"
import mist from "../assets/images/mist.jpg"
import snow from "../assets/images/snow.jpg"
import thanderstorm from "../assets/images/thanderstorm.jpg"
import newcloud from "../assets/images/newcloud.jpg"
import newcloud2 from "../assets/images/newcloud2.jpg"

const wallpaper = (theme) => {
  switch (theme) {
    case "Clear":
      return clearsky2
    case "Few clouds":
      return newcloud;
    case "Scattered clouds":
      return newcloud;
    case "Clouds":
      return newcloud2;
    case "Overcast clouds":
    return newcloud2;
    case "Shower rain":
      return lightrain;
    case "Rain":
      return lightrain;
    case "Thanderstorm":
      return thanderstorm
    case "Mist":
      return mist;
    case "Snow":
        return snow;
    default:
      return newcloud2;
  }
}

export default wallpaper
