/* eslint-env jquery */

const NavigationSidebar = () => {
    return(`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i></a>
     <a href="../home.html"
       class="list-group-item list-group-item-action">
        <i class="fa-solid fa-house-chimney"></i>
        <span class="d-none d-xl-inline">
            Home
        </span>
     </a>
     <a href="/index.html"
       class="list-group-item list-group-item-action wd-sidebar-active">
        <i class="fa-solid fa-hashtag wd-icon-selected"></i>
        <span class="d-none d-xl-inline">
            Explore
        </span>
    </a>
   <a href="#"
       class="list-group-item list-group-item-action">
        <i class="fa-solid fa-bell"></i>
        <span class="d-none d-xl-inline">
            Notifications
        </span>
   </a>
   <a href="#"
       class="list-group-item list-group-item-action">
        <i class="fa-solid fa-envelope"></i>
        <span class="d-none d-xl-inline">
            Messages
        </span>
   </a>
   <a href="../bookmarks/index.html"
       class="list-group-item list-group-item-action">
        <i class="fa-solid fa-bookmark"></i>
        <span class="d-none d-xl-inline">
            Bookmarks
        </span>
   </a>
   <a href="#"
       class="list-group-item list-group-item-action">
        <i class="fa-solid fa-list"></i>
        <span class="d-none d-xl-inline">
            Lists
        </span>
   </a>
   <a href="../profile.html"
       class="list-group-item list-group-item-action">
        <i class="fa-solid fa-user"></i>
        <span class="d-none d-xl-inline">
            Profile
        </span>
   </a>
   <a href="#"
       class="list-group-item list-group-item-action ms-0 ps-0">
        <span class="fa-stack fa-1x"><i
                class="fa-solid fa-circle fa-stack-1x"></i><i
                class="fa-solid fa-ellipsis fa-stack-1x text-black"></i></span><span
            class="d-none d-xl-inline">More</span>
   </a>
   </div>
   <div class="d-grid mt-2">
     <a href="../tuit.html"
        class="btn btn-primary btn-block rounded-pill">
        Tuit</a>
   </div>
 `);
}
export default NavigationSidebar;