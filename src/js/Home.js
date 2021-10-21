const Home = (argument = "") => {
    searchForm.addEventListener("submit", (e) => {
        e.preventDefault();
        let searchInput = searchBar.value;
        console.log(searchBar.value);
        window.location.hash = "pagelist/" + searchInput.replace(/\s+/g, "-");
    });
    const Welcome = () => {
        document.querySelector('#pageContent').innerHTML = `<p class="bloc">The Hyper Progame is the world’s premier event for computer and video games and related products. At The Hyper Progame,
        the video game industry’s top talent pack the Los Angeles Convention Center, connecting tens of thousands of the best,
        brightest, and most innovative in the interactive entertainment industry. For three exciting days, leading-edge companies,
        groundbreaking new technologies, and never-before-seen products will be showcased. The Hyper Progame connects you
        with both new and existing partners, industry executives, gamers, and social influencers providing unprecedented exposure</p>`;
    }
    Welcome();
}

export default Home;