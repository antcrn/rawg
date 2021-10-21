const PageDetail = (argument) => {
    const key = "?key=";
    const preparePage = () => {
        let cleanedArgument = argument.replace(/\s+/g, "-");
        const fetchGame = (url, argument) => {
            let finalURL = url + argument + key;
            fetch(`${finalURL}`)
                .then((response) => response.json())
                .then((response) => {
                    console.log(response);
                    let { id, name, released, description, background_image, tags, developers, genres, platforms, rating, ratings, rating_top } = response;
                    let articleDOM = document.querySelector(".page-detail .article");
                    articleDOM.querySelector("h1#title").innerHTML = name;
                    articleDOM.querySelector("p.rating").innerHTML = `<strong>${rating}/${rating_top}-${ratings.length} votes</strong>`;
                    articleDOM.querySelector("p.release-date span").innerHTML = released;
                    articleDOM.querySelector("p.description").innerHTML = description;
                    articleDOM.querySelector("div.cover").innerHTML = `<img src="${background_image}" width="100%"/>`;
                    tags.forEach((el) => {
                        articleDOM.querySelector("p.tags").innerHTML += `${el.name}, `;
                    });
                    developers.forEach((dev) => {
                        articleDOM.querySelector("p.dev").innerHTML += `${dev.name}, `;
                    });
                    genres.forEach((genre) => {
                        articleDOM.querySelector("p.genre").innerHTML += `${genre.name}, `;
                    });
                    platforms.forEach((device) => {
                        articleDOM.querySelector("p.platform").innerHTML += `${device.platform.name}, `;
                    })
                    console.log(id);
                    fetchScreenshots(`https://api.rawg.io/api/games/${id}/screenshots`);
                    fetchTrailers(`https://api.rawg.io/api/games/${id}/movies`);
                    fetchstores(`https://api.rawg.io/api/games/${id}/stores`);
                });
        };
        const fetchScreenshots = (url) => {
            let finalURL = url + key;
            fetch(`${finalURL}`)
                .then((response) => response.json())
                .then((response) => {
                    let imgScreenshots = response.results.slice(0, 4);
                    console.log(imgScreenshots);
                    imgScreenshots.forEach((el) => {
                        document.querySelector("#screenshots").innerHTML += `<img src="${el.image}" class="col-6 mb-3">`;
                    });
                });
        };

        const fetchTrailers = (url) => {
            let finalURL = url + key;
            fetch(`${finalURL}`)
                .then((response) => response.json())
                .then((response) => {
                    console.log("response", response);
                    let trailers = response.results.slice(0, 1);
                    if (response.count !== 0) {
                        console.log(trailers[0].data);
                        document.querySelector("#trailer").innerHTML += ` 
                    <video controls class="video" id="video" preload="metadata" poster="${trailers[0].preview}">
                        <source src="${trailers[0].data.max}" type="video/mp4"></source>
                    </video>`;
                    } else {
                        document.querySelector("#trailer").innerHTML += `<p class="text-light me-4">Sorry, No trailer... </p>`;
                    }
                });
        };

        const fetchstores = (url) => {
            let finalURL = url + key;
            fetch(`${finalURL}`)
                .then((response) => response.json())
                .then((response) => {
                    let stores = response.results;
                    console.log(stores);
                    stores.forEach((store) => {
                        document.querySelector("#buy").innerHTML += `<a href="${store.url}">Buy</a>`;
                    });
                });
        };
        fetchGame("https://api.rawg.io/api/games/", cleanedArgument);
    };

    const render = () => {
        pageContent.innerHTML = `
        <section class="container page-detail">
            <div class="article">
            <div class="cover container-fluid"></div>
            <h1 id="title"></h1>
            <p class="rating"></p>
            <p class="release-date">Release date : <span></span></p>
            <p class="description"></p>
            <strong>Genre</strong>
            <p class="genre"></p>
            <strong>Tags</strong>
            <p class="tags"></p>
            <strong>Developpers</strong>
            <p class="dev"></p>
            <strong>Platforms</strong>
            <p class="platform"></p>   
            </div>
            <h1 class="title">Buy</h1>
            <div class="row" id="buy"></div>
            <h1 class="title">Trailers</h1>
            <div class="row" id="trailer"></div>
            <h1 class="title">Screenshots</h1>
            <div class="row" id="screenshots"></div>
        </section>
      `;
        preparePage();
    };
    render();
};
export default PageDetail;