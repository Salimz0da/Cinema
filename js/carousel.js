const CarouselFunc = () => {
    const CarouselInner = document.querySelector(`#carousel-inner-js`)

    CarouselInner.innerHTML = ""

    for (let i = videos.length - 1; i < videos.length; i++) {

        CarouselInner.insertAdjacentHTML("beforeend", `<div class="carousel-item" id="carousel-item-js">
        <div class="carousel-imageholder">
            <img src="${videos[i].Images[0]}" class="d-block w-100" alt="...">
        </div>
        <div class="col-3 col-xl-7 carousel-content">
            <h4 class="carousel-title">${videos[i].Title}</h4>
            <div class="carousel-text">
                <p>
                    ${videos[i].Plot}
                </p>
            </div>
            <div class="stars-icon">
                <time class="carousel-time" id="carousel-time-js">${videos[i].Year}</time>
                <img src="./image/star-filled-icon.svg" alt="Error">
                <span class="stars-level">${videos[i].imdbRating}</span>
            </div>
        </div>
    </div>`)

    }
    const carouselItm = CarouselInner.querySelectorAll("#carousel-item-js")
    carouselItm.forEach((item, index) => {
        if (index === 0) {
            item.classList.add("active")
        }
    })
}

CarouselFunc()