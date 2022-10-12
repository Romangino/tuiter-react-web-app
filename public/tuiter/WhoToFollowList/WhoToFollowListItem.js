/* eslint-env jquery */
const WhoToFollowListItem = (who) => {
    return(`
    <li class="list-group-item">
        <div class="row">
            <div class="col-xxl-2 col-xl-2 col-lg-2 p-1">
                <img class="rounded-circle w-100"
                     src="${who.avatarIcon}" alt="">
            </div>
            <div class="col-xxl-7 col-xl-6 col-lg-6">
                <div class="fw-bold text-nowrap">
                    ${who.userName}
                    <i class="fa-solid fa-certificate"></i>
                </div>
                <div class="text-secondary small">
                    ${who.handle}
                </div>
            </div>
            <div class="col-xxl-3 col-xl-4 col-lg-4 d-flex align-items-center">
                <a href="#"
                   class="btn btn-primary wd-follow-button rounded-pill w-100">
                    Follow
                </a>
            </div>
        </div>
    </li>
    `);
}
export default WhoToFollowListItem;