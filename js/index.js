const navFormElement = document.querySelector("#navigation-form-js");
const inputElement = navFormElement.querySelector("#input-js");
const searchBtnElemnt = navFormElement.querySelector("#search-js");
const headerSectionElement = document.querySelector("#header-js");
const videosSectionElement = document.querySelector("#videos-js");
const resultSearchElement = document.querySelector("#result-search-js");
const videoResulteElement =
  resultSearchElement.querySelector("#video-result-js");
const VideoSearchResult = videosSectionElement.querySelector(
  "#video-search-result-js"
);

const SerchFunc = () => {
  searchBtnElemnt.addEventListener("click", (event) => {
    event.preventDefault();
    inputElement.classList.toggle("d-block");
  });

  inputElement.addEventListener("keyup", (e) => {
    e.preventDefault();
    if (e.keyCode == 13 && inputElement.value != "") {
      headerSectionElement.classList.add("d-none");
      videosSectionElement.classList.add("d-none");
      resultSearchElement.classList.remove("d-none");
      videos.map((video) => {
        if (
          inputElement.value.toLowerCase() === video.Title.toLowerCase() ||
          parseInt(inputElement.value) == parseInt(video.Year)
        ) {
          videoResulteElement.innerHTML = "";
          SearchResulteFunc();
        }
      });
    } else if (e.keyCode == 13 && inputElement.value == "") {
      headerSectionElement.classList.remove("d-none");
      videosSectionElement.classList.remove("d-none");
      resultSearchElement.classList.add("d-none");
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

const UpdateVideosFunc = () => {
  VideoSearchResult.innerHTML = "";
  videos.map((video, videoIndex) => {
    let letterLength = "";
    for (let i = 0; i < video.Title.length; i++) {
      // const element = array[i];
      if (video.Title.length >= 15) {
        letterLength = `${video.Title.substr(0, 15)}...`;
      } else {
        letterLength = video.Title;
      }
    }
    VideoSearchResult.innerHTML += `
            
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
  });
};

SerchFunc();

UpdateVideosFunc();
