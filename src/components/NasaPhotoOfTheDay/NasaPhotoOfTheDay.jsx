import "./NasaPhotoOfTheDay.css";

import { useEffect, useState } from "react";

function getPhotoOfTheDay() {
  return fetch("htttps://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    .then((response) => {
      return response.json();
    });
}

export function NasaPhotoOfTheDay() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getPhotoOfTheDay()
      .then((data) => { setData(data); })
      .catch((error) => { setError(error); });
  }, []);

  if (error !== null) {
    return <div>{error.message}</div>;
  }

  if (data === null) {
    return <div>Loading...</div>;
  }

  return (
    <figure className="nasa-photo-of-the-day">
      <img src={data.url} alt={data.title} />
      <figcaption>{data.explanation}</figcaption>
    </figure>
  );
}
