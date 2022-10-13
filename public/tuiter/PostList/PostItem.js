/* eslint-env jquery */

const PostItem = (post) => {
    return (`
            <div class="row pt-1 border-bottom border border-top-0 border-opacity-50 
            border-secondary">
                <div class="row pt-1">
                    <div class="col-1 pe-1 pt-1">
                        <img class="rounded-circle w-100"
                         src="${post.profilePicture}" alt="">
                    </div>
                    <div class="col-11">
                        <div class="fw-bold text-nowrap text-white">
                        ${post.userName}
                        <i class="fa-solid fa-certificate"></i>
                        <span class="text-secondary small ps-1">
                            ${post.handle}
                        </span>
                        <span class="text-secondary small">
                            - ${post.time}
                        </span>
                    </div>
                    <div class="text-white">
                        ${post.tuit}
                    </div>
                    </div>
                </div>
                <div class="col-1"></div>
                <div class="col-11 ps-1">
                    <div class="card mt-1 bg-black">
                        <img class="${!post.mediaTitle ?
                                      'rounded w-100 border border-bottom-0 border-opacity-50 border-secondary' :
                                      'card-img-top rounded-top w-100 border border-bottom-0 border-opacity-50 border-secondary'}"
                             src="${post.mediaImage}" alt="">
                        <div class="${!post.mediaTitle ?
                                      'd-none' :
                                      'card-body rounded-bottom border border-opacity-50 border-secondary'}">
                            <div class="text-white fw-bold pb-1">
                                ${post.mediaTitle}
                            </div>
                            <div class="text-secondary">
                                ${post.mediaText}
                            </div>
                            <div class="text-secondary">
                                <i class="fa-solid fa-link"></i>
                                ${post.mediaLink}
                            </div>
                        </div>
                    </div>
                    <div class="row pt-3 pb-3">
                        <div class="col">
                            <i class="fa-regular fa-comment pe-2"></i>
                            ${post.comments}
                        </div>
                        <div class="col">
                            <i class="fa-solid fa-retweet"></i>
                            ${post.retuits}
                        </div>
                        <div class="col">
                            <i class="fa-regular fa-heart"></i>
                            ${post.likes}
                        </div>
                        <div class="col">
                            <i class="fa-solid fa-arrow-up-from-bracket"></i>
                        </div>
                    </div>
                </div>
        </div>
        `)
}
export default PostItem;