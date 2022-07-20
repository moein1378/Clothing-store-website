    //loading
    window.addEventListener("load", function() {
        var loadScreen = document.querySelector("#preloader");
        document.body.removeChild(loadScreen);
    });
    //loading end
    $(document).ready(function() {
        //rsp main navbar
        $('.rsp_menu_icon_box').click(function() {
            $('#rsp_navbar').fadeIn('fast');
        });

        function rsp_nav_events(rsp_id, rsp_subtitle) {
            $(rsp_id).hover(
                function() {
                    $(rsp_subtitle).slideDown();
                },
                function() {
                    $(rsp_subtitle).slideUp();
                }
            );
        }
        rsp_nav_events("#rsp_home", ".rsp_home_subtitle");
        rsp_nav_events("#rsp_women", ".rsp_women_subtitle");
        rsp_nav_events("#rsp_categories", ".rsp_categories_subtitle");
        rsp_nav_events("#rsp_shop", ".rsp_shop_subtitle");
        rsp_nav_events("#rsp_blog", ".rsp_blog_subtitle");
        rsp_nav_events("#rsp_pages", ".rsp_pages_subtitle");

        $(".close_mark_box i").click(function() {
            $("#rsp_navbar").fadeOut();
        });
        //rsp main nav bar end
        //main navbar
        function main_nav_events(main_id, main_subtitle, main_color) {
            $(main_id).hover(
                function() {
                    if (main_id == "#woman" || main_id == "#shop") {
                        $(main_id + " a").first().css('color', '#f37259');
                        $(main_subtitle).fadeIn().css('display', 'flex');
                    } else {
                        $(main_id + " a").first().css('color', '#f37259');
                        $(main_subtitle).fadeIn();
                    }
                },
                function() {
                    $(main_id + " a").first().css('color', main_color);
                    $(main_subtitle).fadeOut('fast');
                }
            );
        }
        main_nav_events("#home", ".home_subtitle", "#fff");
        main_nav_events("#woman", ".woman_subtitle_area", "#fff");
        main_nav_events("#categories", ".categories_subtitle", "#fff");
        main_nav_events("#shop", ".shop_subtitle_area", "#fff");
        main_nav_events("#blog", ".blog_subtitle", "#fff");
        main_nav_events("#pages", ".pages_subtitle", "#fff");

        //cart
        $('.cart').mouseenter(function() {
            $('.cart_description').fadeIn();
            $('.triangle').animate({
                'opacity': '1'
            });
        }).mouseleave(function() {
            $('.cart_description').fadeOut('fast');
            $('.triangle').animate({
                'opacity': '0'
            }, 'fast');
        });
        //cart end

        //search box
        $('.search').click(function() {
            $('#search_area').fadeIn();
        });
        $('.close_mark i').click(function() {
            $('#search_area').fadeOut();
        });
        //search box end
        //main navbar end
        //main navbar on scroll down
        $(window).scroll(function() {
            var scroll_top = $(window).scrollTop();
            var fixed_logo = $(".fixed_logo a img");
            var subtitles = [".home_subtitle", ".woman_subtitle", ".categories_subtitle", ".shop_subtitle", ".blog_subtitle", ".pages_subtitle", ".cart_area"];
            if (scroll_top > 1000) {
                $("#main_navbar").addClass("fixed_main_navbar_style");
                $(".fixed_main_navbar_style").fadeIn('fast');
                fixed_logo.fadeIn('fast');
                for (let index = 0; index < subtitles.length; index++) {
                    $(subtitles[index]).css('box-shadow', '0 10px 20px #000');
                }
            } else if (scroll_top < 1000) {
                $("#main_navbar").removeClass("fixed_main_navbar_style");
                fixed_logo.fadeOut('fast');
                for (let index = 0; index < subtitles.length; index++) {
                    $(subtitles[index]).css('box-shadow', 'none');
                }
            }
        });
        //main navbar on scroll down end
        //envelope tags
        function envelops_on_hover(id) {
            $(id).hover(
                function() {
                    $(id + ' ' + '.envelope_text_area ').animate({
                        'top': '-80px'
                    });
                    $(id + ' ' + '.envelope').addClass('envelope_hover');
                    $(id + ' ' + '.envelope_header_icon').addClass('envelope_header_icon_hover');
                    $(id + ' ' + '.envelope_head_divider').addClass('envelope_head_divider_hover');
                    $(id + ' ' + '.envelope_text').addClass('envelope_text_hover');
                    $(id + ' ' + '.envelope_bottom_icon').fadeIn(500);
                },
                function() {
                    $(id + ' ' + '.envelope_text_area ').animate({
                        'top': '0'
                    });
                    $(id + ' ' + '.envelope').removeClass('envelope_hover');
                    $(id + ' ' + '.envelope_header_icon').removeClass('envelope_header_icon_hover');
                    $(id + ' ' + '.envelope_head_divider').removeClass('envelope_head_divider_hover');
                    $(id + ' ' + '.envelope_text').removeClass('envelope_text_hover');
                    $(id + ' ' + '.envelope_bottom_icon').fadeOut(500);
                }
            );

        }
        envelops_on_hover('#promotions');
        envelops_on_hover('#free_shipping');
        envelops_on_hover('#free_returns');
        //envelope tags end

        //shop this looks
        function product_img_slider_on_hover(id) {
            $(id).hover(
                function() {
                    function delay_on_hover(index) {
                        setTimeout(function() {
                            $(id + ' ' + '.product_options' + ' ' + '.options_box:nth-child' + '(' + index + ')').find('.options_bar_area').removeClass('animate__slideOutLeft').addClass('animate__slideInLeft').css('display', 'inline-flex');
                        });
                    }
                    for (let i = 1; i <= 3; i++) {
                        delay_on_hover(i);
                    }
                },
                function() {
                    function delay_on_exit(index) {
                        setTimeout(function() {
                            $(id + ' ' + '.product_options' + ' ' + '.options_box:nth-child' + '(' + index + ')').find('.options_bar_area').removeClass('animate__slideInLeft').addClass('animate__slideOutLeft');
                        });
                    }
                    for (let i = 1; i <= 3; i++) {
                        delay_on_exit(i);
                    }
                }
            );
        }


        for (let index = 1; index <= 5; index++) {
            product_img_slider_on_hover('#men_p' + index);
            product_img_slider_on_hover('#women_p' + index);
            product_img_slider_on_hover('#men_discount_p' + index);
            product_img_slider_on_hover('#women_discount_p' + index);
        }

        function change_product_img_on_hover(section_id) {
            $(section_id).hover(
                function() {
                    $(this).find('img').fadeOut('fast', function() {
                        var $temp = $(this).attr('src');
                        $(this).attr('src', $(this).attr('data-alt-src'));
                        $(this).attr('data-alt-src', $temp);
                    });

                    $(this).find('img').fadeIn('fast');
                },
                function() {
                    $(this).find('img').fadeOut('fast', function() {
                        var $temp = $(this).attr('data-alt-src');
                        $(this).attr('data-alt-src', $(this).attr('src'));
                        $(this).attr('src', $temp);
                    });

                    $(this).find('img').fadeIn('fast');

                }
            );
        }
        for (let index = 1; index <= 5; index++) {
            change_product_img_on_hover('#men_p' + index);
            change_product_img_on_hover('#women_p' + index);
            change_product_img_on_hover('#women_discount_p' + index);
            change_product_img_on_hover('#men_discount_p' + index);
        }
        //shop this looks end

        //beauty of canifa
        function beauty_slider_hover(slide_number) {
            $('#beauty_slider_p' + slide_number).hover(
                function mouse_in() {
                    $('#beauty_slider_p' + slide_number + ' img').css('filter', 'none');
                    for (let i = slide_number + 1; i <= 7; i++) {
                        $('#beauty_slider_p' + i + ' img').css('filter', 'grayscale(100%)');
                    }
                    for (let j = slide_number - 1; j >= 1; j--) {
                        $('#beauty_slider_p' + j + ' img').css('filter', 'grayscale(100%)');
                    }
                },
                function mouse_out() {
                    for (let k = 1; k <= 7; k++) {
                        $('#beauty_slider_p' + k + ' img').css('filter', 'none');
                    }
                }
            );
        }
        for (let q = 1; q <= 7; q++) {
            beauty_slider_hover(q);
        }
        //beauty of canifa end
    });

    document.addEventListener('DOMContentLoaded', function() {
        new Splide('#ps_for_men', {
            perPage: 2,
            perMove: 1,
            rewindSpeed: 1000,
            rewind: true,
            drag: true,
            autoplay: true,
            interval: 3000,
            pagination: false,
        }).mount();
    });
    document.addEventListener('DOMContentLoaded', function() {
        new Splide('#ps_for_women', {
            perPage: 2,
            perMove: 1,
            rewindSpeed: 1000,
            rewind: true,
            drag: true,
            autoplay: true,
            interval: 3000,
            pagination: false,
        }).mount();
    });
    document.addEventListener('DOMContentLoaded', function() {
        new Splide('#ps_for_women_WD', {
            perPage: 2,
            perMove: 1,
            rewindSpeed: 1000,
            rewind: true,
            drag: true,
            autoplay: true,
            interval: 3000,
            pagination: false,
        }).mount();
    });
    document.addEventListener('DOMContentLoaded', function() {
        new Splide('#ps_for_men_WD', {
            perPage: 2,
            perMove: 1,
            rewindSpeed: 1000,
            rewind: true,
            drag: true,
            autoplay: true,
            interval: 3000,
            pagination: false,
        }).mount();
    });
    document.addEventListener('DOMContentLoaded', function() {
        new Splide('#beauty_slider_for_woman', {
            perPage: 5,
            perMove: 1,
            rewindSpeed: 1000,
            rewind: true,
            drag: true,
            autoplay: true,
            interval: 3000,
            pagination: false,

        }).mount();
    });
    document.addEventListener('DOMContentLoaded', function() {
        new Splide('#clients_slider', {
            perPage: 5,
            perMove: 1,
            rewindSpeed: 1000,
            rewind: true,
            drag: true,
            autoplay: true,
            interval: 3000,
            pagination: false,

        }).mount();
    });