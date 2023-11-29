document.addEventListener("DOMContentLoaded", function () {
    var pythonSections = document.querySelectorAll(".Python");

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScroll() {
        pythonSections.forEach(function (section) {
            if (isElementInViewport(section)) {
                section.classList.add("in-view");
            } else {
                section.classList.remove("in-view");
            }
        });
    }

    window.addEventListener("scroll", handleScroll);

    var lastScrollTop = 0;
    window.addEventListener("scroll", function () {
        var st = window.scrollY || document.documentElement.scrollTop;
        if (st > lastScrollTop) {
            // Scrolling down
            handleScroll();
        } else {
            // Scrolling up
            handleScroll();
        }
        lastScrollTop = st <= 0 ? 0 : st; // For mobile or negative scrolling
    });

    handleScroll();
});


