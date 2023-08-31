const Account = {
    removePen: () => {
        $(document).on('click', '.icon-pen', function (e) {
            e.preventDefault();
            let inputfocus = $(this).parent('.request-form').find('.request-form-input');
            inputfocus.prop('disabled', false);
            inputfocus.get(0).focus();
        });
    }
};
$(document).ready(function () {
    Account.removePen();
});
const Cart = {
    btnQuantity: () => {
        $('.button-quantity').on('click', function () {
            let $button = $(this);
            let $parent = $button.parent();
            let oldValue = $parent.find('.input').val();
            let newVal = 0;
            if ($button.text() == '+') {
                newVal = parseFloat(oldValue) + 1;
            } else {
                // Don't allow decrementing below zero
                if (oldValue > 1) {
                    newVal = parseFloat(oldValue) - 1;
                } else {
                    newVal = 0;
                }
            }
            $parent.find('a.add-to-cart').attr('data-quantity', newVal);
            $parent.find('.input').val(newVal);
        });
    },
    toggleHref: () => {
        $('.page-toast__btn').on('click', function () {
            $(this).parent().toggleClass('show');
        });
        $('a[href^="#"]').on('click', function (e) {
            if ($(this).data('toggle') == 'tab') {
                return;
            }
            e.preventDefault();
            let target = this.hash;
            let $target = $(target);
            if ($target.length > 0) {
                let headerHeight = $('.header').outerHeight() || 0;
                $('html, body').stop().animate({ 'scrollTop': $target.offset().top - parseInt(headerHeight) - 20 }, 900, 'swing', null);
            }
        });
    },
    toastNotify: () => {
        $('.add-to-cart').on('click', function (e) {
            $('#toast').addClass('toast--show');
        });
        $('#close_toast').on('click', function (e) {
            $('#toast').removeClass('toast--show');
        });
    },
    initContentOutlet: () => {
        $(document).on('click', '.outlet-content__item', function () {
            $('.outlet-content__item').removeClass('show');
            $(this).addClass('show');
        });
    }
};
$(document).ready(function () {
    Cart.btnQuantity();
    Cart.toggleHref();
    Cart.toastNotify();
    Cart.initContentOutlet();
});
const Home = {
    initSwiper: () => {
        let swiper = new Swiper('.homeBannerSwiper', {
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction'
            },
            effect: 'fade',
            navigation: {
                nextEl: '.home-slider-button-next',
                prevEl: '.home-slider-button-prev'
            },
            scrollbar: {
                el: '.swiper-scrollbar',
                hide: true
            }
        });
        let swiperHomeProductMobile = new Swiper('.homepage-experience-products--swiper', {
            spaceBetween: 20,
            slidesPerView: 2,
            loop: true,
            navigation: {
                nextEl: '.homepage-cars-controls-next',
                prevEl: '.homepage-cars-controls-prev'
            },
            pagination: {
                el: '.homepage-cars-controls-swiper-pagination',
                type: 'fraction'
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                0: {
                    slidesPerView: 1.5,
                    spaceBetween: 10
                }
            }
        });
        let homepageProductThumb = new Swiper('.product-featured-swiper-thumbs', {
            // loop: true,
            spaceBetween: 20,
            slidesPerView: 2,
            freeMode: true,
            slideToClickedSlide: true,
            navigation: {
                nextEl: '.swiper-homepage-product-mobile-next',
                prevEl: '.swiper-homepage-product-mobile-prev'
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                0: {
                    slidesPerView: 1.2,
                    spaceBetween: 10
                }
            }
        });
        let homepageProduct = new Swiper('.homepage-product-swiper', {
            spaceBetween: 10,
            slidesPerView: 1,
            loop: true,
            navigation: {
                nextEl: '.swiper-homepage-product-next',
                prevEl: '.swiper-homepage-product-prev'
            },
            thumbs: { swiper: homepageProductThumb }
        });
        let homepageEvaluate = new Swiper('.homepage-evaluate--left-slider', {
            spaceBetween: 10,
            slidesPerView: 1,
            loop: true
        });
    },
    handleShowLanguageOption: () => {
        $(document).on('click', '.header-cta--change-language', function () {
            $('.header-cta--change-language-list').toggle();
            $('.header-cta--login-list').hide();
        });
    },
    handleShowLoginOption: () => {
        $(document).on('click', '.header-cta--login', function () {
            $('.header-cta--login-list').toggle();
            $('.header-cta--change-language-list').hide();
        });
    },
    handleSetHeightForSectionTab: () => {
        let heightTabContent = $('.tab-content-container-item').height();
        $('.tab-content-container-item').css('min-height', heightTabContent);
        let heightEvaluate = $('.dp_item').height();
        $('#dp-slider').css('height', heightEvaluate);
        let heightEvaluateItem = $('.homepage-evaluate-swiper-item .item-desc').height();
        $('.homepage-evaluate-swiper-item .item-desc').css('height', heightEvaluateItem);
        $('.header-mega-menu').hide();
    },
    handleShowHideMegaMenu: () => {
        $(document).on('mouseenter', '.list-menu-primary', function () {
            $('.header-mega-menu').animate({ 'opacity': 'show' }, 100);
        });
        $(document).on('mouseenter', '.page-content', function () {
            $('.header-mega-menu').animate({ 'opacity': 'hide' }, 300);
        });
        $(document).on('mouseenter', '.footer__content', function () {
            $('.header-mega-menu').animate({ 'opacity': 'hide' }, 300);
        });
    },
    slideStackCard: () => {
        // let card = $('.card');
        // let lastCard = $(".card-list .card").length - 1;
        // $('.card-next').click(function () {
        //   let prependList = function () {
        //     if ($('.card').hasClass('activeNow')) {
        //       let $slicedCard = $('.card').slice(lastCard).removeClass('transformThis activeNow');
        //       $('.card-list').prepend($slicedCard);
        //     }
        //   }
        //   $('.card').last().removeClass('transformPrev').addClass('transformThis').prev().addClass('activeNow');
        //   setTimeout(function () { prependList(); }, 150);
        // });
        // $('.card-prev').click(function () {
        //   let appendToList = function () {
        //     if ($('.card').hasClass('activeNow')) {
        //       let $slicedCard = $('.card').slice(0, 1).addClass('transformPrev');
        //       $('.card-list').append($slicedCard);
        //     }
        //   }
        //   $('.card').removeClass('transformPrev').last().addClass('activeNow').prevAll().removeClass('activeNow');
        //   setTimeout(function () { appendToList(); }, 150);
        // });
        $('#dp-next').click(function () {
            $('#dp-slider .dp_item:first-child').hide().appendTo('#dp-slider').fadeIn();
            $.each($('.dp_item'), function (index, dp_item) {
                $(dp_item).attr('data-position', index + 1);
            });
            Home.detectActive();
        });
        $('#dp-prev').click(function () {
            $('#dp-slider .dp_item:last-child').hide().prependTo('#dp-slider').fadeIn();
            $.each($('.dp_item'), function (index, dp_item) {
                $(dp_item).attr('data-position', index + 1);
            });
            Home.detectActive();
        });
        $('#dp-dots li').click(function () {
            $('#dp-dots li').removeClass('active');
            $(this).addClass('active');
            let get_slide = $(this).attr('data-class');
            console.log(get_slide);
            $('#dp-slider .dp_item[data-class=' + get_slide + ']').hide().prependTo('#dp-slider').fadeIn();
            $.each($('.dp_item'), function (index, dp_item) {
                $(dp_item).attr('data-position', index + 1);
            });
        });
        $('body').on('click', '#dp-slider .dp_item:not(:first-child)', function () {
            let get_slide = $(this).attr('data-class');
            $('#dp-slider .dp_item[data-class=' + get_slide + ']').hide().prependTo('#dp-slider').fadeIn();
            $.each($('.dp_item'), function (index, dp_item) {
                $(dp_item).attr('data-position', index + 1);
            });
            Home.detectActive();
        });
    },
    handleShowHideNavMobile: () => {
        $(document).on('click', '.header-cta--bars', function () {
            $('body').toggleClass('lock-scroll');
            $('.header-mega-menu').css('transform', 'translateX(0%)');
            $('.header-cta--close-menu').animate({ 'opacity': 'show' }, 100);
            $(this).hide();
        });
        $(document).on('click', '.header-cta--close-menu', function () {
            $('body').removeClass('lock-scroll');
            $('.header-mega-menu').css('transform', 'translateX(100%)');
            $('.header-cta--bars').animate({ 'opacity': 'show' }, 100);
            $(this).hide();
        });
    },
    detectActive: () => {
        // get active
        let get_active = $('#dp-slider .dp_item:first-child').data('class');
        $('#dp-dots li').removeClass('active');
        $('#dp-dots li[data-class=' + get_active + ']').addClass('active');
    },
    backToTop: () => {
        const btn = $('a.text-scroll');
        $(window).scroll(function () {
            if ($(window).scrollTop() > 400) {
                btn.addClass('show-button-top ');
            } else {
                btn.removeClass('show-button-top ');
            }
        });
        btn.on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({ scrollTop: 0 }, '300');
        });
    },
    setPosition: () => {
        const el = $('a.text-scroll');
        const width = $('a.text-scroll').width();
        el.css('right', -width / 2 + 60);
        el.css('bottom', width / 2 + 100);
        if ($(window).width() <= 480) {
            el.css('right', -width / 2 + 38);
            el.css('bottom', width / 2 + 100);
        }
    },
    initDropdown: () => {
        $('#survey_campain').dropdown();
        $('#survey_gender').dropdown();
    },
    popupSurvey: () => {
        setTimeout(function () {
            $('#show_popup_survey').trigger('click');
        }, 5000);
        $('#submit_survey').submit(function (e) {
            e.preventDefault();
            //ajax here
            setTimeout(function () {
                $('.popup-form__close').trigger('click');
            }, 500);
            setTimeout(function () {
                $('#show_popup_survey_thankyou').trigger('click');
            }, 1000);
        });
    }
};
$(document).ready(function () {
    Home.initSwiper();
    Home.handleShowLanguageOption();
    Home.handleShowLoginOption();
    Home.handleSetHeightForSectionTab();
    Home.handleShowHideMegaMenu();
    Home.slideStackCard();
    Home.handleShowHideNavMobile();
    Home.backToTop();
    Home.setPosition();
    Home.initDropdown();
    // Home.popupSurvey();
});
const LangdingPage = {
    initSwiper: () => {
        let swiperNewListMobile = new Swiper('.list-mobile', {
            spaceBetween: 20,
            slidesPerView: 2,
            loop: true,
            navigation: {
                nextEl: '.homepage-cars-controls-next',
                prevEl: '.homepage-cars-controls-prev'
            },
            pagination: {
                el: '.homepage-cars-controls-swiper-pagination',
                type: 'fraction'
            },
            breakpoints: {
                768: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                0: {
                    slidesPerView: 1,
                    spaceBetween: 20
                }
            }
        });
    },
    handlePlayVideo() {
        const el = $('.iframe-ytb-video');
        const btnPlay = $('.icon-circular-base.btn-play');
        const thumbImage = $('.car-details__video-image');
        const videoYtb = $('.video-car-detail');
        if (!!el) {
            el.click(function (ev) {
                btnPlay.hide();
                thumbImage.hide();
                videoYtb.addClass('d-block');
                $('#video-car')[0].src += '?autoplay=1';
                ev.preventDefault();
            });
        }
    },
    playTVC() {
        $(document).ready(function () {
            var $videoSrc;
            $('.video-btn').click(function () {
                $videoSrc = $(this).data('src');
            });
            $('#video_pop').on('shown.bs.modal', function (e) {
                $('#video').attr('src', $videoSrc + '?rel=0&amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1');
            });
            $('#video_pop').on('hide.bs.modal', function (e) {
                $('#video').attr('src', $videoSrc);
            });
        });
    }
};
$(document).ready(function () {
    LangdingPage.initSwiper();
    LangdingPage.handlePlayVideo();
    LangdingPage.playTVC();
});
const ProductDetail = {
    initProductSlide: () => {
        var swiperThumb = new Swiper('#product_swiper_thumb', {
            spaceBetween: 10,
            slidesPerView: 7,
            freeMode: true,
            direction: 'vertical',
            slideToClickedSlide: true,
            multipleActiveThumbs: false,
            breakpoints: {
                0: {
                    slidesPerView: 5,
                    spaceBetweenSlides: 20,
                    direction: 'horizontal'
                },
                768: {
                    slidesPerView: 6,
                    direction: 'horizontal',
                    spaceBetweenSlides: 20
                },
                1024: {
                    slidesPerView: 7,
                    spaceBetween: 10,
                    direction: 'vertical'
                }
            }
        });
        var swiper = new Swiper('#product_swiper_main', {
            loop: true,
            spaceBetween: 20,
            slidesPerView: 2,
            direction: 'vertical',
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    direction: 'horizontal'
                },
                1024: {
                    slidesPerView: 2,
                    direction: 'vertical'
                }
            },
            navigation: {
                nextEl: '#slide-next-btn',
                prevEl: '#slide-prev-btn'
            },
            thumbs: {
                swiper: swiperThumb,
                multipleActiveThumbs: false
            }
        });
    },
    initDropdown: () => {
        $('#option_quantity').dropdown();
        $('#option_specific').dropdown();
    },
    ratingAction: () => {
        let star = $('.product-rating-star--action');
        star.click(function () {
            var stars = $('.product-rating-star--action');
            stars.removeClass('product-rating-star').addClass('product-rating-nostar');
            var thisIndex = $(this).index();
            for (var i = 0; i <= thisIndex; i++) {
                stars.eq(i).addClass('product-rating-star').removeClass('product-rating-nostar');
            }
        });
    }
};
$(document).ready(function () {
    ProductDetail.initProductSlide();
    ProductDetail.initDropdown();
    ProductDetail.ratingAction();
});
var swiper = new Swiper('.recruitmentSwiper', {
    grabCursor: true,
    effect: 'cards',
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction'
    },
    navigation: {
        nextEl: '.recruitment-slider-button-next',
        prevEl: '.recruitment-slider-button-prev'
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: true
    }
});
const Search = {
    handleShowHideSearch: () => {
        $(document).on('click', '.shop__search-filter', function () {
            $('.search-product-filter').animate({ 'opacity': 'show' }, 100);
            $('.search-container').css('overflow', 'hidden');
        });
        $(document).on('click', '.search-product-filter-fixed', function () {
            $('.search-product-filter').hide();
            $('.search-container').css('overflow', 'auto');
        });
    },
    searchReset: () => {
        $('.button-reset').click(function () {
            $('.search__reusult-top-content-wrapper').hide();
            $('.search__reusult-search-products').show();
        });
    },
    handleRadioSearchByTire: () => {
        $('.shop__search-type-checkbox-tire').click(function () {
            $('.search-product-filter--by-tire').show();
            $('.search-product-filter--by-car').hide();
            $('.item-filter1').show();
            $('.item-filter1').siblings().hide();
            $('.search-product-filter--menu-item').removeClass('active');
            $('.search-product-filter--menu-item1').addClass('active');
        });
    },
    handleRadioSearchByCar: () => {
        $('.shop__search-type-checkbox-car').click(function () {
            $('.search-product-filter--by-tire').hide();
            $('.search-product-filter--by-car').show();
            $('.item-filter1').show();
            $('.item-filter1').siblings().hide();
            $('.search-product-filter--menu-item').removeClass('active');
            $('.search-product-filter--menu-item1').addClass('active');
        });
    },
    handleNextStepSearch: () => {
        $('.list-item-filter li').click(function () {
            const idNext = $(this).parent().data('id') + 1;
            const elementShow = $(`.item-filter${ idNext }`);
            const elementNextActive = $(`.search-product-filter--menu-item${ idNext }`);
            elementShow.show();
            elementShow.siblings().hide();
            $('.search-product-filter--menu-item').removeClass('active');
            elementNextActive.addClass('active');
        });
    },
    handlePrevStepSearch: () => {
        $('.prev-filter').click(function () {
            const idPrev = $(this).parent().data('id') - 1;
            const elementShow = $(`.item-filter${ idPrev }`);
            const elementPrevActive = $(`.search-product-filter--menu-item${ idPrev }`);
            elementShow.show();
            elementShow.siblings().hide();
            $('.search-product-filter--menu-item').removeClass('active');
            elementPrevActive.addClass('active');
        });
    },
    handleCloseSearch: () => {
        $('.close-filter').click(function () {
            $('.search-product-filter').hide();
        });
    },
    handleSearchHeader: () => {
        $('.header-cta--search').click(function () {
            $('body').toggleClass('lock-scroll');
            $('.search-container').css('transform', 'translateY(0%)');
        });
        $('.search-container--close').click(function () {
            $('body').removeClass('lock-scroll');
            $('.search-container').css('transform', 'translateY(-100%)');
        });
        $('.search__grand-button').click(function () {
            {
                $('.search__grand').hide();
                $('.search__result-grand').show();
            }
        });
        $('.search__result-button').click(function () {
            {
                $('.search__grand').show();
                $('.search__result-grand').hide();
            }
        });
    },
    initDropdown: () => {
        $('#search_option_classify').dropdown();
        $('#search_option_order').dropdown();
        $('#search_option_display').dropdown();
    }
};
$(document).ready(function () {
    Search.searchReset();
    Search.handleRadioSearchByCar();
    Search.handleRadioSearchByTire();
    Search.handleNextStepSearch();
    Search.handlePrevStepSearch();
    Search.handleCloseSearch();
    Search.handleShowHideSearch();
    Search.handleSearchHeader();
    Search.initDropdown();
});
const Service = {
    initDateTimePicker: () => {
        $('#datepicker').datepicker();
        $('.timepicker').timepicker({
            timeFormat: 'HH:mm',
            interval: 30,
            minTime: '9:30',
            maxTime: '18:00',
            defaultTime: '9:30',
            startTime: '9:30',
            dropdown: true,
            dynamic: false,
            scrollbar: true
        });
        $('.ui-timepicker-viewport').attr('data-before', $('.timepicker').data('before'));
    },
    initDropdown: () => {
        $('#option_order_service').dropdown();
    }
};
$(document).ready(function () {
    Service.initDateTimePicker();
    Service.initDropdown();
});
var maxMinArr = [1000000, 2500000];
const Shop = {
    initPriceRange: () => {
        $('#slider-range').slider({
            range: true,
            min: 1000000,
            max: 5000000,
            values: [1000000, 2500000],
            slide: function (event, ui) {
                $('#amount').val(ui.values[0].toLocaleString('it-IT', {}) + 'đ - ' + ui.values[1].toLocaleString('it-IT', {}) + 'đ');
            }
        });
        $('#amount').val($('#slider-range').slider('values', 0).toLocaleString('it-IT', {}) + 'đ - ' + $('#slider-range').slider('values', 1).toLocaleString('it-IT', {}) + 'đ');
    },
    initDropdown: () => {
        $('#option_order').dropdown();
        $('#option_display').dropdown();
    },
    handleChangeShopView: () => {
        $(document).on('click', '#shop_view_grid', function () {
            $(this).addClass('active').siblings().removeClass('active');
            $('#shop_list').removeClass('list');
        });
        $(document).on('click', '#shop_view_list', function () {
            $(this).addClass('active').siblings().removeClass('active');
            $('#shop_list').addClass('list');
        });
    },
    handleFilterMobile: () => {
        $('.filter-mobile-menu').on('click', function () {
            $('body').toggleClass('lock-scroll');
            $('#shop_filter').toggleClass('animate');
            var mobileNav = $('#shop_filter');
            mobileNav.addClass('show');
            mobileNav.removeClass('hide');
        });
        $('#shop_filter_close').on('click', function () {
            $('body').removeClass('lock-scroll');
            $('#shop_filter').removeClass('show');
            $('#shop_filter').addClass('hide');
        });
    },
    initProductImageSlide: () => {
        let largeSliders = document.querySelectorAll('.shop__product-item-thumbnail-slide');
        largeSliders.forEach((slider, index) => {
            let sliderLength = slider.children[0].children.length;
            let prevArrow = document.querySelectorAll('.slide-button-prev');
            let nextArrow = document.querySelectorAll('.slide-button-next');
            let result = sliderLength > 1 ? true : false;
            const swiper = new Swiper(slider, {
                direction: 'vertical',
                loop: result,
                navigation: {
                    nextEl: nextArrow[index],
                    prevEl: prevArrow[index]
                },
                speed: 1200
            });
        });
    },
    addToWishlist: () => {
        $(document).on('click', '.add-to-wishlist', function (e) {
            e.preventDefault();
            $(this).toggleClass('active');
        });
    },
    resetFilter: () => {
        $('#reset_filter').on('click', function () {
            $('input[name=\'categories[]\']').prop('checked', false);
            $('input[name=\'features[]\']').prop('checked', false);
            $('#slider-range').slider('option', 'values', [1000000, 2500000]);
            $('#amount').val(maxMinArr[0].toLocaleString('it-IT', {}) + 'đ - ' + maxMinArr[1].toLocaleString('it-IT', {}) + 'đ');
        });
    }
};
$(document).ready(function () {
    Shop.initDropdown();
    Shop.addToWishlist();
    Shop.initPriceRange();
    Shop.handleFilterMobile();
    Shop.handleChangeShopView();
    Shop.initProductImageSlide();
    Shop.resetFilter();
});
const Sign = {
    handleShowHideFormSign: () => {
        $(document).ready(function () {
            $('.show_sign_up').click(function () {
                $('.register_content').show();
                $('.login__content').hide();
                $('#show_forgot_password_content').hide();
            });
            $('.show_sign_in').click(function () {
                $('.login__content').show();
                $('.register_content').hide();
                $('#show_forgot_password_content').hide();
            });
            $('.show_forgot_password').click(function () {
                $('#show_forgot_password_content').show();
                $('.register_content').hide();
                $('.login__content').hide();
            });
        });
    },
    handleShowHidePassword: () => {
        $('.toggle-password').click(function () {
            $(this).toggleClass('fa-eye fa-eye-slash');
            var input = $($(this).attr('toggle'));
            if (input.attr('type') == 'password') {
                input.attr('type', 'text');
            } else {
                input.attr('type', 'password');
            }
        });
    }
};
$(document).ready(function () {
    Sign.handleShowHideFormSign();
    Sign.handleShowHidePassword();
});
var $modal = $('#exampleModalCenterAdvenza');
$modal.find('.modal-content').css({ width: 645 }).resizable({ minWidth: 645 });
var launch = function () {
    $modal.modal();
};
$(document).ready(function () {
    fixedLeftMenuWWhenScroll();
});
$(window).on("scroll", function () {
  fixedLeftMenuWWhenScroll();
});
function fixedLeftMenuWWhenScroll() {
    var scrollTop = $(window).scrollTop();
    var elementerMainContent = $('.dai-ly-management .content-order');
    var offTop = elementerMainContent.offset().top - scrollTop;
    var fotterTop = $('.footer__content').offset().top - scrollTop;
    var checkAreaMainContent = $(window).height() - $('.footer__content').height() + 60;
    if (offTop < 100 && fotterTop > checkAreaMainContent) {
        $('.dai-ly-management .content-order .menu-left .list-menu').removeClass('fixed-bottom-custom');
        $('.dai-ly-management .content-order .menu-left .list-menu').addClass('fixed-top-custom');
    } else if(fotterTop < checkAreaMainContent) {
        $('.dai-ly-management .content-order .menu-left .list-menu').removeClass('fixed-top-custom');
        $('.dai-ly-management .content-order .menu-left .list-menu').addClass('fixed-bottom-custom');
    } else {
        $('.dai-ly-management .content-order .menu-left .list-menu').removeClass('fixed-bottom-custom');
        $('.dai-ly-management .content-order .menu-left .list-menu').removeClass('fixed-top-custom');
    }
}
const DaiLyAction = {
    checkBoxTable: () => {
        var parentCheckbox = document.getElementById('flexCheckIndeterminate');
        parentCheckbox.addEventListener('change', e => {
            document.querySelectorAll('.form-check-input').forEach(checkbox => {
                checkbox.checked = e.target.checked
            })
        });  
        document.querySelectorAll('tbody .form-check-input').forEach(checkbox => {
            checkbox.addEventListener('change', ()=> {
                var tbodyCheckbox = document.querySelectorAll('tbody .form-check-input').length;
                var tbodyCheckedbox = document.querySelectorAll('tbody .form-check-input:checked').length;
                if(tbodyCheckbox == tbodyCheckedbox){
                    //console.log('All selected')
                    parentCheckbox.indeterminate = false;
                    parentCheckbox.checked = true;
                }
                if (tbodyCheckbox > tbodyCheckedbox && tbodyCheckedbox>=1) {
                    // console.log('Some selected')
                    parentCheckbox.indeterminate = true;
                }
                if(tbodyCheckedbox==0) {
                    // console.log('No any selected')
                    parentCheckbox.indeterminate = false;
                    parentCheckbox.checked = false;
                }
            })
        })
    },
    stepChungNhan: () => {
        $('.btn-check-code').on('click', function () {
            $('#content-chung-nhan section').addClass('d-none');
            $('#find-success').removeClass('d-none');
        });
    },
    initDropdown: () => {
        $('#option_city').dropdown();
        $('#option_district').dropdown();
        $('#option_ward').dropdown();
    },
    loadData: () => {
        var citis = document.getElementById("option_city");
        var districts = document.getElementById("option_district");
        var wards = document.getElementById("option_ward");
        var Parameter = {
            url: "https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json", 
            method: "GET", 
            responseType: "application/json", 
        };
        var promise = axios(Parameter);
        promise.then(function (result) {
            renderCity(result.data);
        });
        function renderCity(data) {
            for (const x of data) {
                citis.options[citis.options.length] = new Option(x.Name, x.Id);
            }
            for (const k of data[0].Districts) {
                districts.options[districts.options.length] = new Option(k.Name, k.Id);
            }
            for (const w of data[0].Districts[0].Wards) {
                wards.options[wards.options.length] = new Option(w.Name, w.Id);
            }

            citis.onchange = function () {
                districts.length = 0;
                wards.length = 0;
                if(this.value != ""){
                    const result = data.filter(n => n.Id === this.value);
                    for (const k of result[0].Districts) {
                        districts.options[districts.options.length] = new Option(k.Name, k.Id);
                    }
                    const dataCity = data.filter((n) => n.Id === citis.value);
                    const dataWards = dataCity[0].Districts[0].Wards;
                    for (const w of dataWards) {
                        wards.options[wards.options.length] = new Option(w.Name, w.Id);
                    }
                }
            };
            districts.onchange = function () {
                wards.length = 0;
                const dataCity = data.filter((n) => n.Id === citis.value);
                if (this.value != "") {
                    const dataWards = dataCity[0].Districts.filter(n => n.Id === this.value)[0].Wards;
                    for (const w of dataWards) {
                        wards.options[wards.options.length] = new Option(w.Name, w.Id);
                    }
                }
            };
        }
    },
    checkboxAction: () => {
        $('#reset-filter').on('click', function () {
        $('.shop__filter-categories-list input[type="checkbox"]').prop('checked', false);
        });
        $('#alpha-a-z').on('click', function () {
            if ($(this).prop('checked')) {
                $('#alpha-z-a').prop('checked', false)
            }
        });
        $('#alpha-z-a').on('click', function () {
            if ($(this).prop('checked')) {
                $('#alpha-a-z').prop('checked', false)
            }
        });
        $('#price-asc').on('click', function () {
            if ($(this).prop('checked')) {
                $('#price-desc').prop('checked', false)
            }
        });
        $('#price-desc').on('click', function () {
            if ($(this).prop('checked')) {
                $('#price-asc').prop('checked', false)
            }
        });
    },
    setupDateRangePicker: () => {
        var languageCurrent = $('body').attr('data-language');
        var localeConfig = {};
        moment.locale(languageCurrent); 
        if (languageCurrent == 'vi') {
            var rangesValue = {
                "Hôm nay": [moment(), moment()],
                "Hôm qua": [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                "7 ngày trước": [moment().subtract(6, 'days'), moment()],
                "30 ngày trước": [moment().subtract(29, 'days'), moment()],
                "Tháng này": [moment().startOf('month'), moment().endOf('month')],
                "Tháng trước": [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
            }
            var localeConfig =  {
                format: 'YYYY-MM-DD',
                separator: ' - ',
                applyLabel: 'Áp dụng',
                cancelLabel: 'Hủy',
                fromLabel: 'Từ',
                toLabel: 'Đến',
                customRangeLabel: 'Tùy chọn',
                daysOfWeek: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
                monthNames: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
                firstDay: 1
            }
        } else {
            var rangesValue = {
                "Today": [moment(), moment()],
                "Yesterday": [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                "Last 7 Days": [moment().subtract(6, 'days'), moment()],
                "Last 30 Day": [moment().subtract(29, 'days'), moment()],
                "This Month": [moment().startOf('month'), moment().endOf('month')],
                "Last Month": [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
            }
        }
        $('#date-range-filter').daterangepicker({
            timePicker24Hour: true,
            autoApply: false,
            opens: 'left',
            showButtons: false,
            locale: localeConfig,
            ranges: rangesValue,
            showCustomRangeLabel: true,
            alwaysShowCalendars: true,
            startDate: moment().subtract(7, 'days'),
            endDate: moment()
        }, function(start, end) {
            console.log("New date range selected: " + start.format('YYYY-MM-DD') + " to " + end.format('YYYY-MM-DD'));
        });

        $('#filter-date').on('click', function () {
            $('#date-range-filter').click();
        });
    }
}
$(document).ready(function () {
    if ($(".table-checkbox").height() > 0) {
        DaiLyAction.checkBoxTable();
    }
    if ($(".npp-area-choose").height() > 0) {
        $("#option_city").dropdown();
        $("#option_outlet").dropdown();
    }
    if ($('#content-chung-nhan').height() > 0) {
        DaiLyAction.stepChungNhan();
    }
    if ($('#group-city-option').height() > 0) {
        DaiLyAction.initDropdown();
        DaiLyAction.loadData();
    }
    $('#to-step-2').on('click', function () {
        DaiLyAction.initDropdown();
        DaiLyAction.loadData();
    });
    $('#btn-active-bh').on('click', function () {
        $('.info-active-bh').addClass('d-none');
        $('.active-success').removeClass('d-none');
    });
    $('#edit-content').on('click', function () {
        $('.content-reason').addClass('d-none');
        $('#form-content-confirm').removeClass('d-none');
    });
    DaiLyAction.checkboxAction();
    if ($('.area-filter-date').height() > 0) {
        DaiLyAction.setupDateRangePicker();
    }
});