(function() {
  var ACTIVE_WIDTH = 992;

  function init() {
    var elements = getPageElements();
    setInterval(update(elements), 1000/60);
  }

  function update(elements) {
    return function() {
      window.requestAnimationFrame(function() {
        var scrollY = window.pageYOffset;
        if (window.innerWidth < ACTIVE_WIDTH) return;
        if (elements.hero) {
          setNavigationPosition(scrollY, elements);
        }
      });
    };
  }

  function getPageElements() {
    return {
      hero: document.getElementById("hero"),
      nav: document.getElementById("work"),
      work: document.getElementById("work-link"),
    };
  }

  function setNavigationPosition(scrollY, elements) {
    var heroMaxY = elements.hero.getBoundingClientRect().bottom - 1;
    console.log("Hero max y:", heroMaxY);
    if (heroMaxY < 0) {
      elements.nav.classList.add('sticky');
      elements.hero.classList.add('nav-active');
      elements.work.classList.add('active');
    } else {
      elements.nav.classList.remove('sticky');
      elements.hero.classList.remove('nav-active');
      elements.work.classList.remove('active');
    }
  }

  document.addEventListener("DOMContentLoaded", function() {
    init();
  });
})();