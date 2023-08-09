


function mousemoveEvent() {
    const $cursor = $(".followCursor");
    const $cover = $("section .coverBg");

    const mousePos = {
        x: 0, // property
        y: 0,
    };

    $(window).on("mousemove", function (event) {
        mousePos.x = event.clientX;
        mousePos.y = event.clientY;
        $cursor.css({left: mousePos.x, top: mousePos.y});
        $cover.css({transform: `translateX(${mousePos.x}px)`,});
    });
}

mousemoveEvent();
