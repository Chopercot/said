$(document).ready(function(){
    $('.nav a[href^="#"]').click(function(){//выбрать ссыли из меню
        var offset=$('.nav').innerHeight();//Высота меню, получаем денамически
        var target=$(this).attr('href');//Сохраняем значение атрибута href
        $('html,body').animate({
            scrollTop: $(target).offset().top - offset//вычеть высоту меню
        },500);//время анимации
        $('.nav a[href^="#"]').removeClass('active');//удалить класс active у всех пунктов меню
        $(this).addClass('active');//добавить класс active активной ссылке
        return false;
        });

    });
