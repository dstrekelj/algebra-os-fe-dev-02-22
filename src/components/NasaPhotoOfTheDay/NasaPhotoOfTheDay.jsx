import "./NasaPhotoOfTheDay.css";
import data from "./data.json";

export function NasaPhotoOfTheDay() {
  return (
    <figure className="nasa-photo-of-the-day">
      <img src={data.url} alt={data.title} />
      <figcaption>{data.explanation}</figcaption>
    </figure>
  )
}
