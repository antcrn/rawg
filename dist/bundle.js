/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://rawg/./src/sass/style.scss?");

/***/ }),

/***/ "./src/js/Home.js":
/*!************************!*\
  !*** ./src/js/Home.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Home = (argument = \"\") => {\n    searchForm.addEventListener(\"submit\", (e) => {\n        e.preventDefault();\n        let searchInput = searchBar.value;\n        console.log(searchBar.value);\n        window.location.hash = \"pagelist/\" + searchInput.replace(/\\s+/g, \"-\");\n    });\n    const Welcome = () => {\n        document.querySelector('#pageContent').innerHTML = `<p class=\"bloc\">The Hyper Progame is the world’s premier event for computer and video games and related products. At The Hyper Progame,\n        the video game industry’s top talent pack the Los Angeles Convention Center, connecting tens of thousands of the best,\n        brightest, and most innovative in the interactive entertainment industry. For three exciting days, leading-edge companies,\n        groundbreaking new technologies, and never-before-seen products will be showcased. The Hyper Progame connects you\n        with both new and existing partners, industry executives, gamers, and social influencers providing unprecedented exposure</p>`;\n    }\n    Welcome();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n//# sourceURL=webpack://rawg/./src/js/Home.js?");

/***/ }),

/***/ "./src/js/PageDetail.js":
/*!******************************!*\
  !*** ./src/js/PageDetail.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//todo hover de la card, on peut voir la date de sortie, l'éditeur, le(s) genre(s) du jeu, \n//ainsi que sa note et le nombre de votes qui apparaissent à la place de l'image.\nconst PageDetail = (argument) => {\n    const key = \"?key=051b21c775414adda7cc87dc5e7d84e6\";\n    const preparePage = () => {\n        let cleanedArgument = argument.replace(/\\s+/g, \"-\");\n        const fetchGame = (url, argument) => {\n            let finalURL = url + argument + key;\n            fetch(`${finalURL}`)\n                .then((response) => response.json())\n                .then((response) => {\n                    console.log(response);\n                    let { id, name, released, description, background_image, tags, developers, genres, platforms, rating, ratings, rating_top } = response;\n                    let articleDOM = document.querySelector(\".page-detail .article\");\n                    articleDOM.querySelector(\"h1#title\").innerHTML = name;\n                    articleDOM.querySelector(\"p.rating\").innerHTML = `<strong>${rating}/${rating_top}-${ratings.length} votes</strong>`;\n                    articleDOM.querySelector(\"p.release-date span\").innerHTML = released;\n                    articleDOM.querySelector(\"p.description\").innerHTML = description;\n                    articleDOM.querySelector(\"div.cover\").innerHTML = `<img src=\"${background_image}\" width=\"100%\"/>`;\n                    tags.forEach((el) => {\n                        articleDOM.querySelector(\"p.tags\").innerHTML += `${el.name}, `;\n                    });\n                    developers.forEach((dev) => {\n                        articleDOM.querySelector(\"p.dev\").innerHTML += `${dev.name}, `;\n                    });\n                    genres.forEach((genre) => {\n                        articleDOM.querySelector(\"p.genre\").innerHTML += `${genre.name}, `;\n                    });\n                    platforms.forEach((device) => {\n                        articleDOM.querySelector(\"p.platform\").innerHTML += `${device.platform.name}, `;\n                    })\n                    console.log(id);\n                    fetchScreenshots(`https://api.rawg.io/api/games/${id}/screenshots`);\n                    fetchTrailers(`https://api.rawg.io/api/games/${id}/movies`);\n                    fetchstores(`https://api.rawg.io/api/games/${id}/stores`);\n                });\n        };\n        const fetchScreenshots = (url) => {\n            let finalURL = url + key;\n            fetch(`${finalURL}`)\n                .then((response) => response.json())\n                .then((response) => {\n                    let imgScreenshots = response.results.slice(0, 4);\n                    console.log(imgScreenshots);\n                    imgScreenshots.forEach((el) => {\n                        document.querySelector(\"#screenshots\").innerHTML += `<img src=\"${el.image}\" class=\"col-6 mb-3\">`;\n                    });\n                });\n        };\n\n        const fetchTrailers = (url) => {\n            let finalURL = url + key;\n            fetch(`${finalURL}`)\n                .then((response) => response.json())\n                .then((response) => {\n                    console.log(\"response\", response);\n                    let trailers = response.results.slice(0, 1);\n                    if (response.count !== 0) {\n                        console.log(trailers[0].data);\n                        document.querySelector(\"#trailer\").innerHTML += ` \n                    <video controls class=\"video\" id=\"video\" preload=\"metadata\" poster=\"${trailers[0].preview}\">\n                        <source src=\"${trailers[0].data.max}\" type=\"video/mp4\"></source>\n                    </video>`;\n                    } else {\n                        document.querySelector(\"#trailer\").innerHTML += `<p class=\"text-light me-4\">Sorry, No trailer... </p>`;\n                    }\n                });\n        };\n\n        const fetchstores = (url) => {\n            let finalURL = url + key;\n            fetch(`${finalURL}`)\n                .then((response) => response.json())\n                .then((response) => {\n                    let stores = response.results;\n                    console.log(stores);\n                    stores.forEach((store) => {\n                        document.querySelector(\"#buy\").innerHTML += `<a href=\"${store.url}\">Buy</a>`;\n                    });\n                });\n        };\n        fetchGame(\"https://api.rawg.io/api/games/\", cleanedArgument);\n    };\n\n    const render = () => {\n        pageContent.innerHTML = `\n        <section class=\"container page-detail\">\n            <div class=\"article\">\n            <div class=\"cover container-fluid\"></div>\n            <h1 id=\"title\"></h1>\n            <p class=\"rating\"></p>\n            <p class=\"release-date\">Release date : <span></span></p>\n            <p class=\"description\"></p>\n            <strong>Genre</strong>\n            <p class=\"genre\"></p>\n            <strong>Tags</strong>\n            <p class=\"tags\"></p>\n            <strong>Developpers</strong>\n            <p class=\"dev\"></p>\n            <strong>Platforms</strong>\n            <p class=\"platform\"></p>   \n            </div>\n            <h1 class=\"title\">Buy</h1>\n            <div class=\"row\" id=\"buy\"></div>\n            <h1 class=\"title\">Trailers</h1>\n            <div class=\"row\" id=\"trailer\"></div>\n            <h1 class=\"title\">Screenshots</h1>\n            <div class=\"row\" id=\"screenshots\"></div>\n        </section>\n      `;\n        preparePage();\n    };\n    render();\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageDetail);\n\n//# sourceURL=webpack://rawg/./src/js/PageDetail.js?");

/***/ }),

/***/ "./src/js/PageList.js":
/*!****************************!*\
  !*** ./src/js/PageList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst PageList = (argument = \"\") => {\n    const preparePage = () => {\n        const key = \"?key=051b21c775414adda7cc87dc5e7d84e6\";\n        let cleanedArgument = argument.replace(/\\s+/g, \"-\");\n        let articles = \"\";\n        searchForm.addEventListener(\"submit\", () => {\n            window.location.hash = \"pagelist/\" + searchBar.value.replace(/\\s+/g, \"-\");\n        });\n        const fetchList = (url, argument) => {\n            let finalURL = url;\n            if (argument) {\n                finalURL = `${url}&search=${argument}`;\n            }\n\n            fetch(`${finalURL}`)\n                .then((response) => response.json())\n                .then((response) => {\n                    console.log(response);\n                    response.results.forEach((article) => {\n                        let platformsList = article.platforms;\n                        articles += `\n                  <div class=\"cardGame card bg-dark text-white col-4 brrr\">\n                  <a href = \"#pagedetail/${article.slug}\">     \n                  <img src='${article.background_image}' class=\"card-img\" alt=\"...\" style=\"height: 18rem;\">\n                        <div class=\"card-img-overlay info-game\">\n                            <h5 class=\"card-title\">${article.released}</h5>\n                            <p class=\"card-text\">This is a wider card .</p>\n                            <p class=\"card-text\">Last updated 3 mins ago</p>\n                        </div>\n                        <h1 class=\"ms-4\">${article.name}</h1></a>\n                        \n                        <p id='platformGameList' class=\"ms-2\">`\n                        platformsList.forEach((platf) => {\n                            if (platf.platform.name == \"PC\") {\n                                articles += `<span><img src='src/images/windows.svg'></span> `;\n                            } else if (platf.platform.name == \"PlayStation 3\") {\n                                articles += `<span><img src='src/images/ps4.svg'><sup> 3</sup></span> `;\n                            } else if (platf.platform.name == \"PlayStation 4\") {\n                                articles += `<span><img src='src/images/ps4.svg'><sup> 4</sup></span> `;\n                            } else if (platf.platform.name == \"PlayStation 5\") {\n                                articles += `<span><img src='src/images/ps4.svg'><sup> 5</sup></span> `;\n                            } else if (platf.platform.name == \"PS Vita\") {\n                                articles += `<span><img src='src/images/ps4.svg'><sup> psp</sup></span> `;\n                            } else if (platf.platform.name == \"Xbox Series S/X\") {\n                                articles += `<span><img src='src/images/xbox.svg'><sup> X/S</sup></span> `;\n                            } else if (platf.platform.name == \"Xbox 360\") {\n                                articles += `<span><img src='src/images/xbox.svg'><sup> 360</sup></span> `;\n                            } else if (platf.platform.name == \"Xbox One\") {\n                                articles += `<span><img src='src/images/xbox.svg'><sup> one</sup></span> `;\n                            } else if (platf.platform.name == \"Nintendo Switch\") {\n                                articles += `<span><img src='src/images/switch.svg'><sup></sup></span> `;\n                            } else if (platf.platform.name == \"Linux\") {\n                                articles += `<span><img src='src/images/linux.svg'><sup></sup></span> `;\n                            } else {\n                                articles += `<span>${platf.platform.name} </span> `;\n                            }\n                        });\n                        articles += `\n                    </p>\n                </div>\n                `;\n                    });\n                    document.querySelector(\".page-list .articles\").innerHTML = articles;\n\n                });\n        };\n\n        fetchList(\"https://api.rawg.io/api/games?key=051b21c775414adda7cc87dc5e7d84e6&page_size=27\", cleanedArgument);\n    };\n    // const filterByPlateform = () => {\n\n    //     fetch(\"https://api.rawg.io/api/games?key=051b21c775414adda7cc87dc5e7d84e6&dates=2021-09-01,2021-12-30\")\n    //         .then(response => response.json())\n    //         .then(response => showListByPlatform(response))\n    //         .catch(error => console.log(\"Erreur : \" + error));\n    //     const showListByPlatform = (data) => {\n    //         let result = data.results;\n    //         result.forEach(element => {\n    //             let platformOfGame = element.platforms\n    //             platformOfGame.forEach(platf => {\n    //                 if (platf.platform.name == 'Nintendo Switch') {\n    //                     pageContent.innerHTML += `<p>${platf.platform.name}</p>`;\n    //                 }\n    //             })\n    //         })\n    //     }\n    // }\n    // filterByPlateform();\n\n    const render = () => {\n        pageContent.innerHTML = `\n      <section class=\"page-list container\">\n        <div class=\"articles row\">\n        <div class=\"load1 loading\"></div>\n        <div class=\"load2 loading\"></div>\n        <div class=\"load3 loading\"></div>\n        </div>\n      </section>\n    `;\n\n        preparePage();\n    };\n\n    render();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageList);\n\n//# sourceURL=webpack://rawg/./src/js/PageList.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes */ \"./src/js/routes.js\");\n/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sass/style.scss */ \"./src/sass/style.scss\");\n\n\n\nlet pageArgument;\n\nconst setRoute = () => {\n    let path = window.location.hash.substring(1).split(\"/\");\n    pageArgument = path[1] || \"\";\n\n    let pageContent = document.getElementById(\"pageContent\");\n    _routes__WEBPACK_IMPORTED_MODULE_0__[\"default\"][path[0]](pageArgument);\n    return true;\n};\n\nwindow.addEventListener(\"hashchange\", () => setRoute());\nwindow.addEventListener(\"DOMContentLoaded\", () => setRoute());\n\n//# sourceURL=webpack://rawg/./src/js/index.js?");

/***/ }),

/***/ "./src/js/routes.js":
/*!**************************!*\
  !*** ./src/js/routes.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home */ \"./src/js/Home.js\");\n/* harmony import */ var _PageDetail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageDetail */ \"./src/js/PageDetail.js\");\n/* harmony import */ var _PageList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageList */ \"./src/js/PageList.js\");\n\n\n\n\nconst routes = {\n    '': _Home__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    'pagelist': _PageList__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    'pagedetail': _PageDetail__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);\n\n//# sourceURL=webpack://rawg/./src/js/routes.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;