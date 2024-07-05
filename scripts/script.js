$(document).ready(function () {
    new WOW({
        animateClass: 'animate__animated',

    }).init();

    $('#burger').on('click', function () {
        $('#menu').addClass('open');
    })


    $('#menu *').each(function () {
        $(this).on('click', function () {
            $('#menu').removeClass('open');
        })
    })

    $('#choose-program').click(function () {
        $('.programs')[0].scrollIntoView({behavior: "smooth"});
    });

    $('.see-program').click(function () {
        $('.programs')[0].scrollIntoView({behavior: "smooth"});
    });

    $('.schedule').click(function () {
        $('.tours')[0].scrollIntoView({behavior: "smooth"});
    });

    $('.photoMenu').click(function () {
        $('.images-travel')[0].scrollIntoView({behavior: "smooth"});
    });
    $('.photoMenu-adaptive').click(function () {
        $('.images-travel-adaptive')[0].scrollIntoView({behavior: "smooth"});
    });
    $('.gratitude').click(function () {
        $('.reviews')[0].scrollIntoView({behavior: "smooth"});
    });
    let phone = $('.input-phone');
    phone.inputmask({"mask": "+375 (99) 999-99-99"});
    let name = $('.input-name');


    $('.multiple-items').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 890,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1.4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 340,
                settings: {
                    slidesToShow: 1.2,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.one-time').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });

    $('.responsive').slick({
        dots: true,
        infinite: false,
        speed: 300,

        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 740,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });


    $('#btnMail').click(function () {
        let email = $('#email');
        email.css({
            border: '1px solid #ffd61e'
        });

        if (!email.val()) {
            email.css({
                border: '1px solid red',
            });
            return;
        }

        $('#modal').show();

    });

    $('#close').click(function () {
        $('#modal').hide();
    });

    $('#close-popup').click(function () {
        $('#modalPopup').hide();
    });

    $('.button-modal-popup').click(function () {
        $('#modalPopup').hide();
    });

    $('.ring').click(function () {
        $('.main').hide();
        $('.popup').show();

    });

    $('.button-modal-popup2').click(function () {
        $('#modalPopup2').hide();
        $('.main').show();
        $('.popup').hide();
    });

    $('#close-popup2').click(function () {
        $('#modalPopup2').hide();
        $('.main').show();
        $('.popup').hide();
    });

    $('#buttonOrder').click(function () {
        let hasError = false;
        $('.error-input').hide();
        name.css({
            border: '1px solid white'
        });
        phone.css({
            border: '1px solid white'
        });

        if (!name.val()) {
            name.next().show();
            name.css({
                border: '1px solid red'
            });
            hasError = true;
        }
        if (!phone.val()) {
            phone.next().show();
            phone.css({
                border: '1px solid red'
            });
            hasError = true;
        }
        if (!hasError) {
            $.ajax({
                method: "POST",
                url: "https://testologia.ru/checkout",
                data: {name: name.val(), phone: phone.val()}
            })
                .done(function (msg) {
                    if (msg.success) {
                        // $('.first-form').hide();
                        $('#modalPopup').removeClass('d-none').css('display', 'flex');
                    } else {
                        alert('Возникла ошибка при оформлении заявки, позвоните нам и оставьте заявку')
                    }
                });
        }
    })

    let phonePopup = $('.input-phone-popup');
    phonePopup.inputmask({"mask": "+375 (99) 999-99-99"});
    let namePopup = $('.input-name-popup');

    $('.button-order-popup').click(function () {
        let hasError = false;
        $('.error-input-popup').hide();
        namePopup.css({
            border: '1px solid white'
        });
        phonePopup.css({
            border: '1px solid white'
        });
        if (!namePopup.val()) {
            namePopup.next().show();
            namePopup.css({
                border: '1px solid red'
            });
            hasError = true;
        }
        if (!phonePopup.val()) {
            phonePopup.next().show();
            phonePopup.css({
                border: '1px solid red'
            });
            hasError = true;
        }
        if (!hasError) {
            $.ajax({
                method: "POST",
                url: "https://testologia.ru/checkout",
                data: {name: namePopup.val(), phone: phonePopup.val()}
            })
                .done(function (msg) {
                    if (msg.success) {
                        // $('.first-form-popup').hide();
                        $('#modalPopup2').removeClass('d-none').show();

                    } else {
                        alert('Возникла ошибка при оформлении заявки, позвоните нам и оставьте заявку')
                    }
                });
        }
    })


    let btnFurther = $('.btn-further');
    btnFurther.click(function (e) {

        if ($(e.target).prev().find('.more').is(':hidden')) {
            $(e.target).prev().find('.more').removeClass('d-none').show();
            $(e.target).prev().find('.dots').hide();
            $(e.target).html('Скрыть');
            $(e.target).css({
                margin: '2px 0 2px 0'
            });

        } else {
            $(e.target).html('Читать далее  ' + '  &#10095;');
            $(e.target).css({
                margin: '15px 0 20px 0'
            });
            $(e.target).prev().find('.more').addClass('d-none').hide();
            $(e.target).prev().find('.dots').show();

        }
    });


    let btnFurtherDop = $('.btn-further-dop');
    btnFurtherDop.click(function (e) {

        if ($(e.target).prev().find('.more-dop').is(':hidden')) {
            $(e.target).prev().find('.more-dop').removeClass('d-none').show();
            $(e.target).prev().find('.dots-dop').hide();
            $(e.target).html('Скрыть');
            $(e.target).css({
                margin: '2px 30px 2px 30px'
            });

        } else {
            $(e.target).html('Читать далее  ' + '  &#10095;');
            $(e.target).css({
                margin: '15px 30px 20px 30px'
            });
            $(e.target).prev().find('.more-dop').addClass('d-none').hide();
            $(e.target).prev().find('.dots-dop').show();

        }
    });


    $('.open-popup-link').magnificPopup({
        type: 'image',
    });
});






