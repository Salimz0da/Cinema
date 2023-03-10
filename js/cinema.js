const resCinemaElement = document.querySelector("#res-cinema-js");
const cinemaImageElement = resCinemaElement.querySelector(
  "#cinema-image-js img"
);
const cinemaPosterElement = resCinemaElement.querySelector(
  "#cinema-poster-js img"
);
const cinemaTitleElement = resCinemaElement.querySelector("#cinema-title-js");
const cinemaYearElement = resCinemaElement.querySelector("#cinema-year-js");
const cinemaPlotElement = document.querySelector("#cinema-plot-js");
const videoPlayerElement = document.querySelector("#video-js");
const GetObjectFunc = () => {
  const locationId = parseInt(location.search.substr(1));
  for (let id = 0; id < videos.length; id++) {
    if (locationId === id) {
      // console.log(videos[id]);
      cinemaImageElement.setAttribute("src", `${videos[id].Images[0]}`);
      cinemaPosterElement.setAttribute("src", `${videos[id].Poster}`);
      cinemaTitleElement.innerText = videos[id].Title;
      cinemaYearElement.innerText = videos[id].Released;
      cinemaPlotElement.innerText = videos[id].Plot;
      videoPlayerElement.setAttribute("poster", `${videos[id].Poster}`);
    }
  }
};

GetObjectFunc();
