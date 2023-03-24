const resCinemaElement = document.querySelector("#res-cinema-js");
const cinemaImageElement = resCinemaElement.querySelector("#cinema-image-js img");
const cinemaPosterElement = resCinemaElement.querySelector("#cinema-poster-js img");
const cinemaTitleElement = resCinemaElement.querySelector("#cinema-title-js");
const cinemaYearElement = resCinemaElement.querySelector("#cinema-year-js");
const cinemaPlotElement = document.querySelector("#cinema-plot-js");
const videoPlayerElement = document.querySelector("#video-js");

const navFormElement = document.querySelector("#navigation-form-js");
const inputElement = navFormElement.querySelector("#input-js");
const searchBtnElemnt = navFormElement.querySelector("#search-js");
// 
const resultSearchElement = document.querySelector("#result-search-js");
const videoResulteElement = resultSearchElement.querySelector("#video-result-js");
const videoPlayholderSectionElement = document.querySelector("#video-playholder-js")
const overviewellement = document.querySelector("#overview-js")
// 

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

const SerchFunc = () => {
  searchBtnElemnt.addEventListener("click", (event) => {
    event.preventDefault();
    inputElement.classList.toggle("d-block");
  });

  inputElement.addEventListener("keyup", (e) => {
    e.preventDefault();
    if (e.keyCode == 13 && inputElement.value != "") {
      resCinemaElement.classList.add("d-none");
      videoPlayholderSectionElement.classList.add("d-none")
      overviewellement.classList.add("d-none")
      resultSearchElement.classList.remove("d-none");
      videos.map((video) => {
        if (
          inputElement.value.toLowerCase() === video.Title.toLowerCase() ||
          parseInt(inputElement.value) == parseInt(video.Year)
        ) {
          videoResulteElement.innerHTML = "";
          SearchResulteFunc()
        }
      });
    } else if (e.keyCode == 13 && inputElement.value == "") {
      resCinemaElement.classList.remove("d-none");
      videoPlayholderSectionElement.classList.remove("d-none")
      resultSearchElement.classList.add("d-none");
      overviewellement.classList.remove("d-none")
    }
  });
};

const SearchResulteFunc = () => {
  videos.map((video, videoIndex) => {
    if (
      inputElement.value.toLowerCase() === video.Title.toLowerCase() ||
      parseInt(inputElement.value) == parseInt(video.Year)
    ) {
      let letterLength = "";
      for (let i = 0; i < video.Title.length; i++) {
        // const element = array[i];
        if (video.Title.length >= 15) {
          letterLength = `${video.Title.substr(0, 15)}...`;
        } else {
          letterLength = video.Title;
        }
      }
      videoResulteElement.innerHTML += `
            
            <div class="col-6 col-sm-4 col-md-3 col-xl-2">
            <a href="./cinema.html?${videoIndex}" class="video__link video">
                <div class="video__imageholder">
                    <img src="${video.Poster}" alt="Error upload">
                </div>
                <div class="video__desc">
                    <h5 class="video__title">${letterLength}</h5>
                    <p class="video__date">${video.Year}</p>
                </div>
            </a>
        </div>
            `;
    }
  });
};


GetObjectFunc();
SerchFunc()