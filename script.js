$(function() {

const $grid = $('.past-works-cards').isotope({
    itemSelector: '.past-works-card, .past-works-card-big',
    layoutMode: 'fitRows',
    fitRows: {
        gutter: 25
    }
});

    $('.filter-buttons button').on('click', function() {

        const filterValue = $(this).attr('data-filter');

        $grid.isotope({
            filter: filterValue
        });

        
        $('.filter-buttons button').removeClass('is-active');
        $(this).addClass('is-active');

    });

const $menuToggle = $('.menu-toggle');
const $mobileMenu = $('#mobile-menu');

function closeMenu() {
    $mobileMenu.removeClass('is-open');
    $menuToggle.attr('aria-expanded', 'false');
    $menuToggle.attr('aria-label', 'メニューを開く');
}

$menuToggle.on('click', function() {
    $mobileMenu.addClass('is-open');
    $(this).attr('aria-expanded', 'true');
    $(this).attr('aria-label', 'メニューを閉じる');
});

$('.menu-close, .mobile-menu a').on('click', closeMenu);

});