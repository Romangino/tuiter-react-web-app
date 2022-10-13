const NavigationSidebarItems = (active, item) => {
    return(`
    <a href="${item.url}"
       class="list-group-item list-group-item-action ${active === item.name ? 'active': ''}">
        <i class="${item.icon}"></i>
        <span class="d-none d-xl-inline">
            ${item.name}
        </span>
     </a>
    `)
};
export default NavigationSidebarItems

