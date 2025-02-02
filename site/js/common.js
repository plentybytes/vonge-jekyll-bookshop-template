document.addEventListener("DOMContentLoaded", function () {
    "use strict";
    var o = document.querySelector("body"), r = document.querySelector(".nav__icon-menu"),
        a = document.querySelector(".nav__icon-close"), i = document.querySelector(".main-nav");
    r.addEventListener("click", () => {
        c()
    }), a.addEventListener("click", () => {
        d()
    });

    function c() {
        i.classList.add("is-open")
    }

    function d() {
        i.classList.remove("is-open")
    }

    setTimeout(function () {
        o.classList.add("is-in")
    }, 150), setTimeout(function () {
        o.classList.add("stop-animations")
    }, 1500);
    let s;
    window.addEventListener("resize", () => {
        document.body.classList.add("resize-animation-stopper"), clearTimeout(s), s = setTimeout(() => {
            document.body.classList.remove("resize-animation-stopper")
        }, 300)
    }), reframe(".post__content iframe:not(.reframe-off), .page__content iframe:not(.reframe-off)");
    const l = document.querySelector(".page img, .post img"), t = document.querySelectorAll(".page a img, .post a img");
    if (t) {
        for (var e = 0; e < t.length; e++) t[e].parentNode.classList.add("image-link");
        for (var e = 0; e < t.length; e++) t[e].classList.add("no-lightense")
    }
    if (l && Lightense(".page img:not(.no-lightense), .post img:not(.no-lightense)", {
        padding: 60,
        offset: 30
    }), document.querySelector(".my-slider")) var u = tns({
        container: ".my-slider",
        items: 3,
        slideBy: 1,
        gutter: 20,
        nav: !1,
        mouseDrag: !0,
        autoplay: !1,
        controlsContainer: "#customize-controls",
        responsive: {1024: {items: 3}, 768: {items: 2}, 0: {items: 1}}
    });
    if (document.querySelector(".c-subscribe")) {
        var m = {
            strings: itype_text,
            typeSpeed: 100,
            backSpeed: 50,
            startDelay: 200,
            backDelay: 1500,
            loop: !0,
            showCursor: !0,
            cursorChar: "|",
            onFinished: function () {
            }
        };
        ityped.init("#ityped", m)
    }
    const n = document.querySelector(".top");
    window.addEventListener("scroll", function () {
        window.scrollY > window.innerHeight ? n.classList.add("is-active") : n.classList.remove("is-active")
    }), n.addEventListener("click", function () {
        window.scrollY != 0 && window.scrollTo({top: 0, left: 0, behavior: "smooth"})
    })
});
