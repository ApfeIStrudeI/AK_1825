window.addEventListener('DOMContentLoaded', () => {
    const mobile = document.querySelector('.mobile'),
    menu = document.querySelector('.mobile_menu'),
    footer = document.querySelector('.footer'),
    menuItem = document.querySelectorAll('.mobile_menu_item'),
    hamburger = document.querySelector('.hamburger'),
    button = document.getElementById('button'),
    menuEl = document.querySelectorAll('.mobile_menu_el'),
    menuLink = document.querySelectorAll('.mobile_menu_link'),
    newsBookmarkWrapper = document.querySelector('.news-bookmark__wrapper'),
    newsMarkWrapper = document.querySelector('.news-mark__wrapper'),
    newsBackMark = document.querySelector('.news-back-mark'),
    body = document.querySelector('.body');

    newsBookmarkWrapper.addEventListener('click', () => {
        newsMarkWrapper.classList.toggle('news-mark__wrapper_active');
        newsBookmarkWrapper.classList.toggle('news-bookmark__wrapper_active');
        newsBackMark.classList.toggle('news-back-mark_active');
    });

    newsBackMark.addEventListener('click', () => {
        newsMarkWrapper.classList.toggle('news-mark__wrapper_active');
        newsBookmarkWrapper.classList.toggle('news-bookmark__wrapper_active');
        newsBackMark.classList.toggle('news-back-mark_active');
    });

    hamburger.addEventListener('click', () => {
        mobile.classList.toggle('mobile_active');
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('mobile_menu_active');
        body.classList.toggle('body_active');
        if (footer.classList.contains('footer_active')) {
            setTimeout(() => { footer.classList.toggle('footer_active'); }, 500);
        } else {
            footer.classList.toggle('footer_active');
        }
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            mobile.classList.toggle('mobile_active');
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('mobile_menu_active');
            body.classList.toggle('body_active');
            if (footer.classList.contains('footer_active')) {
                setTimeout(() => { footer.classList.toggle('footer_active'); }, 500);
            } else {
                footer.classList.toggle('footer_active');
            }
        })
    });

    menuEl.forEach(el => {
        el.addEventListener('click', () => {
            el.classList.toggle('mobile_menu_el_active');
        })
    });

    // about   aboutDropdownMenu
    const menuTitle = document.getElementById('about');
    const subMenuList = document.getElementById('aboutDropdownMenu');

    subMenuList.addEventListener('mouseover', () => {
        menuTitle.style.color = '#1FA9CB';
        menuTitle.style.fontWeight = '400';
        menuTitle.style.letterSpacing = '1px';
    });
    subMenuList.addEventListener('mouseout', () => {
        menuTitle.style.color = '#19191A';
        menuTitle.style.fontWeight = '300';
        menuTitle.style.letterSpacing = '1.4px';
    });

    menuTitle.addEventListener('mouseover', () => {
        menuTitle.style.color = '#1FA9CB';
        menuTitle.style.fontWeight = '400';
        menuTitle.style.letterSpacing = '1px';
    });
    menuTitle.addEventListener('mouseout', () => {
        menuTitle.style.color = '#19191A';
        menuTitle.style.fontWeight = '300';
        menuTitle.style.letterSpacing = '1.4px';
    });

    const menuTitleS = document.getElementById('services');
    const subMenuListS = document.getElementById('servicesDropdownMenu');

    subMenuListS.addEventListener('mouseover', () => {
        menuTitleS.style.color = '#1FA9CB';
        menuTitleS.style.fontWeight = '400';
        menuTitleS.style.letterSpacing = '1px';
    });
    subMenuListS.addEventListener('mouseout', () => {
        menuTitleS.style.color = '#19191A';
        menuTitleS.style.fontWeight = '300';
        menuTitleS.style.letterSpacing = '1.4px';
    });

    menuTitleS.addEventListener('mouseover', () => {
        menuTitleS.style.color = '#1FA9CB';
        menuTitleS.style.fontWeight = '400';
        menuTitleS.style.letterSpacing = '1px';
    });
    menuTitleS.addEventListener('mouseout', () => {
        menuTitleS.style.color = '#19191A';
        menuTitleS.style.fontWeight = '300';
        menuTitleS.style.letterSpacing = '1.4px';
    });

    // //Про деактивацию кнопок под меню

    // function updateButtonState() {
    //     if (menu = document.querySelector('mobile_menu_active')) {
    //         button.disabled = true;
    //     } else {
    //         button.disabled = false;
    //     }
    // }
    // // Обработчик события для вызова функции при изменении состояния меню
    // menu.addEventListener('click', updateButtonState);
    // // Инициализация состояния при загрузке страницы
    // updateButtonState();

    const mediaQueryMD = window.matchMedia('(max-width: 1860px)');

    if (mediaQueryMD.matches) {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 1200) {
                $('.news-bookmark').fadeOut('fast');
            } else {
                $('.news-bookmark').fadeIn();
            }
        })
    };

    const mediaQueryLG = window.matchMedia('(min-width: 1860px)');

    if (mediaQueryLG.matches) {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 1200) {
                $('.news').fadeOut('fast');
            } else {
                $('.news').fadeIn();
            }
        })
    };

    $('.pageup').fadeOut();
    
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1200) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href=#up]").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
});