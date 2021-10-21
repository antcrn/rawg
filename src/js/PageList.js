const PageList = (argument = "") => {
    const preparePage = () => {
        const key = "?key=";
        let cleanedArgument = argument.replace(/\s+/g, "-");
        let articles = "";
        searchForm.addEventListener("submit", () => {
            window.location.hash = "pagelist/" + searchBar.value.replace(/\s+/g, "-");
        });
        const fetchList = (url, argument) => {
            let finalURL = url;
            if (argument) {
                finalURL = `${url}&search=${argument}`;
            }

            fetch(`${finalURL}`)
                .then((response) => response.json())
                .then((response) => {
                    console.log(response);
                    response.results.forEach((article) => {
                        let platformsList = article.platforms;
                        articles += `
                  <div class="cardGame card bg-dark text-white col-4 brrr">
                  <a href = "#pagedetail/${article.slug}">     
                  <img src='${article.background_image}' class="card-img" alt="..." style="height: 18rem;">
                        <div class="card-img-overlay info-game">
                            <h5 class="card-title">${article.released}</h5>
                            <p class="card-text">This is a wider card .</p>
                            <p class="card-text">Last updated 3 mins ago</p>
                        </div>
                        <h1 class="ms-4">${article.name}</h1></a>
                        
                        <p id='platformGameList' class="ms-2">`
                        platformsList.forEach((platf) => {
                            if (platf.platform.name == "PC") {
                                articles += `<span><img src='src/images/windows.svg'></span> `;
                            } else if (platf.platform.name == "PlayStation 3") {
                                articles += `<span><img src='src/images/ps4.svg'><sup> 3</sup></span> `;
                            } else if (platf.platform.name == "PlayStation 4") {
                                articles += `<span><img src='src/images/ps4.svg'><sup> 4</sup></span> `;
                            } else if (platf.platform.name == "PlayStation 5") {
                                articles += `<span><img src='src/images/ps4.svg'><sup> 5</sup></span> `;
                            } else if (platf.platform.name == "PS Vita") {
                                articles += `<span><img src='src/images/ps4.svg'><sup> psp</sup></span> `;
                            } else if (platf.platform.name == "Xbox Series S/X") {
                                articles += `<span><img src='src/images/xbox.svg'><sup> X/S</sup></span> `;
                            } else if (platf.platform.name == "Xbox 360") {
                                articles += `<span><img src='src/images/xbox.svg'><sup> 360</sup></span> `;
                            } else if (platf.platform.name == "Xbox One") {
                                articles += `<span><img src='src/images/xbox.svg'><sup> one</sup></span> `;
                            } else if (platf.platform.name == "Nintendo Switch") {
                                articles += `<span><img src='src/images/switch.svg'><sup></sup></span> `;
                            } else if (platf.platform.name == "Linux") {
                                articles += `<span><img src='src/images/linux.svg'><sup></sup></span> `;
                            } else {
                                articles += `<span>${platf.platform.name} </span> `;
                            }
                        });
                        articles += `
                    </p>
                </div>
                `;
                    });
                    document.querySelector(".page-list .articles").innerHTML = articles;

                });
        };

        fetchList("https://api.rawg.io/api/games?key=&page_size=27", cleanedArgument);
    };
    // const filterByPlateform = () => {

    //     fetch("https://api.rawg.io/api/games?key=051b21c775414adda7cc87dc5e7d84e6&dates=2021-09-01,2021-12-30")
    //         .then(response => response.json())
    //         .then(response => showListByPlatform(response))
    //         .catch(error => console.log("Erreur : " + error));
    //     const showListByPlatform = (data) => {
    //         let result = data.results;
    //         result.forEach(element => {
    //             let platformOfGame = element.platforms
    //             platformOfGame.forEach(platf => {
    //                 if (platf.platform.name == 'Nintendo Switch') {
    //                     pageContent.innerHTML += `<p>${platf.platform.name}</p>`;
    //                 }
    //             })
    //         })
    //     }
    // }
    // filterByPlateform();

    const render = () => {
        pageContent.innerHTML = `
      <section class="page-list container">
        <div class="articles row">
        <div class="load1 loading"></div>
        <div class="load2 loading"></div>
        <div class="load3 loading"></div>
        </div>
      </section>
    `;

        preparePage();
    };

    render();
};

export default PageList;