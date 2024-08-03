$(document).ready(function(){
    
    // настройка слайдера

    $('.carousel__inner').slick({
        speed: 900,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/chevron-left-solid.svg"></img></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/chevron-right-solid.svg"></img></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                  dots: true,
                  arrows: false
                }
            }
        ]
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(item){
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catolog-item__content').eq(i).toggleClass('catolog-item__content_active');
                $('.catolog-item__list').eq(i).toggleClass('catolog-item__list_active');
            })
        })
    };

    toggleSlide('.catolog-item__link');
    toggleSlide('.catolog-item__back');

    // валидация формы
    
    function validateForms(form){
        $(form).validate({
            rules: {
                model: {
                    required: true,
                    minlength: 2
                },
                number: "required",
                category: "required",
                ownership: "required",
                date: "required",
                con_face: {
                    required: true,
                    minlength: 2
                },
                con_phone: "required"
            },
            messages: {
                model: {
                    required: "Пожалуйста заполните данное поле",
                    minlength: jQuery.validator.format("Введите минимум {0} символа!")
                },
                number: "Пожалуйста заполните данное поле",
                category: "Пожалуйста заполните данное поле",
                ownership: "Пожалуйста заполните данное поле",
                date: "Пожалуйста заполните данное поле",
                con_face: {
                    required: "Пожалуйста заполните данное поле",
                    minlength: jQuery.validator.format("Введите минимум {0} символа!")
                },
                con_phone: "Пожалуйста заполните данное поле"
            }
        });
    };
    validateForms('.form');
});