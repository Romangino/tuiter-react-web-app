/* eslint-env jquery */

const PostSummaryItem = (post) => {
    if (post.userName === '' || post.userName === undefined || post.userName === null) {
            return(`
            <a class="list-group-item"
               href="#">
                <div class="row">
                    <div class="col-md-10 col-sm-9">
                        <div class="text-secondary small">
                            ${post.topic}
                        </div>
                        <div class="fw-semibold">
                            ${post.title}
                        </div>
                        <div class="text-secondary small">
                            ${post.tweets} Tuits
                        </div>
                    </div>
                    <div class="col">
                        <img class="rounded-2 w-100"
                             src="${post.image}"
                             alt="">
                    </div>
                </div>
            </a>
            `)
    }
    if (post.tweets === '' || post.tweets === undefined || post.tweets === null) {
        return(`
            <a class="list-group-item"
           href="#">
            <div class="row">
                <div class="col-md-10 col-sm-9">
                    <div class="text-secondary small">
                        ${post.topic}
                    </div>
                    <div class="fw-semibold">
                        ${post.userName}
                        <i class="fa-solid fa-certificate"></i>
                        <span class="text-secondary small fw-normal">
                            - ${post.time}
                        </span>
                    </div>
                    <div class="fw-semibold">
                        ${post.title}
                    </div>
                </div>
                <div class="col">
                    <img class="rounded-2 w-100"
                         src="${post.image}"
                         alt="">
                </div>
            </div>
        </a>
        `)
    }
    else {
        return(`
        <a class="list-group-item"
           href="#">
            <div class="row">
                <div class="col-md-10 col-sm-9">
                    <div class="text-secondary small">
                        ${post.topic}
                    </div>
                    <div class="fw-semibold">
                        ${post.userName}
                        <i class="fa-solid fa-certificate"></i>
                        <span class="text-secondary small fw-normal">
                            - ${post.time}
                        </span>
                    </div>
                    <div class="fw-semibold">
                        ${post.title}
                    </div>
                    <div class="text-secondary small">
                        ${post.tweets} Tuits
                    </div>
                </div>
                <div class="col">
                    <img class="rounded-2 w-100"
                         src="${post.image}"
                         alt="">
                </div>
            </div>
        </a>
        `)
    }
}
export default PostSummaryItem;