import PostSummaryList from "../PostSummaryList/PostSummaryList.js";

const ExploreComponent = () => {
    return(`
    <div class="row position-relative">
        <div class="col-10">
            <input type="search"
                   class="form-control rounded-pill ps-5 wd-search-bar"
                   placeholder="Search Tuiter"/>
            <span class="position-absolute wd-magnifying-glass">
            <i class="fa-solid fa-magnifying-glass"></i>
            </span>
        </div>
        <div class="col-2 d-flex align-items-center justify-content-center ps-0">
            <button class="btn pt-0 pb-0" href="#">
                <i class="fa-solid fa-gear fa-2x wd-fg-blue"></i>
            </button>
        </div>
    </div>
    <ul class="nav mt-2 nav-tabs">
        <li class="nav-item">
                <a class="nav-link active" href="for-you.html">
                    For you
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link wd-nav-tabs" href="trending.html">
                    Trending
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link wd-nav-tabs" href="news.html">
                    News
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link wd-nav-tabs" href="sports.html">
                    Sports
                </a>
            </li>
            <li class="nav-item d-none d-md-block">
                <a class="nav-link wd-nav-tabs" href="entertainment.html">
                    Entertainment
                </a>
        </li>
    </ul>
    <div class="position-relative">
        <img class="w-100 mt-2"
             src="../../images/rocketship.jpg" alt="">
        <h2 class="position-absolute bottom-0 ms-2 text-white">
            SpaceX's Spaceship
        </h2>
    </div>
    ${PostSummaryList()}
    `)
}
export default ExploreComponent;