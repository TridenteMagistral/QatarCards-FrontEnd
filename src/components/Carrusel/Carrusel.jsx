/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-undef */
import "./Carrusel.css"

export default function Carrusel() {

    const timer = 3500;

    let i = 0;
    var max = $('#c > li').length;

    $("#c > li").eq(i).addClass('active').css('left', '0');
    $("#c > li").eq(i + 1).addClass('active').css('left', '25%');
    $("#c > li").eq(i + 2).addClass('active').css('left', '50%');
    $("#c > li").eq(i + 3).addClass('active').css('left', '75%');


    setInterval(function () {

        $("#c > li").removeClass('active');

        $("#c > li").eq(i).css('transition-delay', '0.25s');
        $("#c > li").eq(i + 1).css('transition-delay', '0.5s');
        $("#c > li").eq(i + 2).css('transition-delay', '0.75s');
        $("#c > li").eq(i + 3).css('transition-delay', '1s');

        if (i < max - 4) {
            i = i + 4;
        }

        else {
            i = 0;
        }

        $("#c > li").eq(i).css('left', '0').addClass('active').css('transition-delay', '1.25s');
        $("#c > li").eq(i + 1).css('left', '25%').addClass('active').css('transition-delay', '1.5s');
        $("#c > li").eq(i + 2).css('left', '50%').addClass('active').css('transition-delay', '1.75s');
        $("#c > li").eq(i + 3).css('left', '75%').addClass('active').css('transition-delay', '2s');

    }, timer);

    return (
        <section class="awSlider">
            <div class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target=".carousel" data-slide-to="0" class="active"></li>
                    <li data-target=".carousel" data-slide-to="1"></li>
                    <li data-target=".carousel" data-slide-to="2"></li>
                    <li data-target=".carousel" data-slide-to="3"></li>
                </ol>

                <div class="carousel-inner" role="listbox">
                    <div class="item active">
                        <img src="http://www.adobewordpress.com/wp-content/uploads/2014/02/wallpaper-thumb-941.jpg" />
                        <div class="carousel-caption">Görsel #1</div>
                    </div>
                    <div class="item">
                        <img src="http://www.adobewordpress.com/wp-content/uploads/2014/02/wallpaper-thumb-101.jpg" />
                        <div class="carousel-caption">Görsel #2</div>
                    </div>
                    <div class="item">
                        <img src="http://www.adobewordpress.com/wp-content/uploads/2014/02/wallpaper-thumb-1051.jpg" />
                        <div class="carousel-caption">Görsel #3</div>
                    </div>
                    <div class="item">
                        <img src="http://www.adobewordpress.com/wp-content/uploads/2013/07/wallpaper-thumb-74.jpg" />
                        <div class="carousel-caption">Görsel #4</div>
                    </div>
                </div>

                <a class="left carousel-control" href=".carousel" role="button" data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                    <span class="sr-only">Geri</span>
                </a>
                <a class="right carousel-control" href=".carousel" role="button" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                    <span class="sr-only">İleri</span>
                </a>
            </div>
        </section>
    )
}
