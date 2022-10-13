import NavigationSidebarItems from "./NavigationSidebarItems.js";
import items from "./items.js";

const NavigationSidebar = (active) => {
    return(`
    <div class="list-group">
        ${items.map(item => {
        return(NavigationSidebarItems(active, item));
    }).join('')
    }        
    </div>
    <div class="d-grid mt-2">
     <a href="../tuit.html"
        class="btn btn-primary btn-block rounded-pill">
        Tuit</a>
   </div>
    `)
}
export default NavigationSidebar

/*
* Updated NavigationSidebar to now use a list of items to build out the navigation bar
*/
// const NavigationSidebar = (active) => {
//     return(`
//    <div class="list-group">
//      <a class="list-group-item" href="#">
//        <i class="fab fa-twitter"></i></a>
//      <a href="../HomeScreen/index.html"
//        class="list-group-item list-group-item-action ${active === 'home' ? 'active': null}">
//         <i class="fa-solid fa-house-chimney"></i>
//         <span class="d-none d-xl-inline">
//             Home
//         </span>
//      </a>
//      <a href="../ExploreScreen/index.html"
//        class="list-group-item list-group-item-action ${active === 'explore' ? 'active': null}">
//         <i class="fa-solid fa-hashtag"></i>
//         <span class="d-none d-xl-inline">
//             Explore
//         </span>
//     </a>
//    <a href="#"
//        class="list-group-item list-group-item-action ${active === 'notifications' ? 'active': null}">
//         <i class="fa-solid fa-bell"></i>
//         <span class="d-none d-xl-inline">
//             Notifications
//         </span>
//    </a>
//    <a href="#"
//        class="list-group-item list-group-item-action ${active === 'messages' ? 'active': null}">
//         <i class="fa-solid fa-envelope"></i>
//         <span class="d-none d-xl-inline">
//             Messages
//         </span>
//    </a>
//    <a href="../bookmarks/index.html"
//        class="list-group-item list-group-item-action ${active === 'bookmarks' ? 'active': null}">
//         <i class="fa-solid fa-bookmark"></i>
//         <span class="d-none d-xl-inline">
//             Bookmarks
//         </span>
//    </a>
//    <a href="#"
//        class="list-group-item list-group-item-action ${active === 'lists' ? 'active': null}">
//         <i class="fa-solid fa-list"></i>
//         <span class="d-none d-xl-inline">
//             Lists
//         </span>
//    </a>
//    <a href="../profile.html"
//        class="list-group-item list-group-item-action ${active === 'profile' ? 'active': null}">
//         <i class="fa-solid fa-user"></i>
//         <span class="d-none d-xl-inline">
//             Profile
//         </span>
//    </a>
//    <a href="#"
//        class="list-group-item list-group-item-action ms-0 ps-0 ${active === 'more' ? 'active': null}">
//         <span class="fa-stack fa-1x"><i
//                 class="fa-solid fa-circle fa-stack-1x"></i><i
//                 class="fa-solid fa-ellipsis fa-stack-1x text-black"></i></span><span
//             class="d-none d-xl-inline">More</span>
//    </a>
//    </div>
//    <div class="d-grid mt-2">
//      <a href="../tuit.html"
//         class="btn btn-primary btn-block rounded-pill">
//         Tuit</a>
//    </div>
//  `);
// }
// export default NavigationSidebar;