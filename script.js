$(document).ready(function () {
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var topTitle = $(".top-title");
    var words = $(".words");
    var bgmusic = $("#music")[0];

    btn_reset.hide();

    btn_open.click(function () {
        openEnvelope();
        btn_open.hide();
        topTitle.hide();
        btn_reset.show(); // Show the reset button now
        bgmusic.play();
        bgmusic.loop = true;
        words.removeClass('blurred').addClass('unblurred');
        
        // Hearts burst animation
        $('.envelope-wrapper').addClass('open');
        $('.hearts .heart').each(function (i) {
            const delay = i * 100;
            $(this).css({
                animation: `burst 1s ease-out ${delay}ms forwards`
            });
        });
        $('.hearts').css('opacity', 1);
    });

    btn_reset.click(function () {
        btn_reset.text("Resetting...");
        topTitle.fadeOut(800);
        words.removeClass('unblurred').addClass('blurred');
        envelope.removeClass("opened").addClass("closed");

        setTimeout(function () {
            location.reload();
        }, 500);
    });

    function openEnvelope() {
        envelope.addClass("opened open").removeClass("closed");
    }
});
