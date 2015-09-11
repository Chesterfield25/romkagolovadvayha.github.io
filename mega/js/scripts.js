var photo_entity = $(".photo_entity");
var photo_bg = $(".bg_black");
$('.photo').click(function () {
    var element = $(this);
    photo_entity.css('backgroundImage', "url(" + element.attr('data-href') + ")");
    destination = 200;
    $('body, html').animate( { scrollTop: destination }, 1100 );
    photo_entity.show('hide');
    photo_bg.show();
    //element.attr('data-href');
});

photo_bg.click(function () {
    photo_entity.hide("slow");
    photo_bg.hide();
});
