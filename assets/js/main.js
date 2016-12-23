var init_swipper = function() {
    var swiper = new Swiper('.swiper-container', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 3000,
        autoplayDisableOnInteraction: false,
        preloadImages: false,
        lazyLoading: true
    });
}

$(document).ready(function () {
    init_swipper();
    display_leaflet_map();
});
