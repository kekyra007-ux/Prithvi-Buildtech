document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq");

  if (faqItems.length > 0) {
    faqItems.forEach((item) => {
      const toggle = item.querySelector(".que");

      if (toggle) {
        toggle.addEventListener("click", () => {
          item.classList.toggle("active");

          faqItems.forEach((otherItem) => {
            if (otherItem !== item && otherItem.classList.contains("active")) {
              otherItem.classList.remove("active");
            }
          });
        });
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const heroTitle = document.querySelector(".hero-title");
  const heroText = document.querySelector(".hero-text");
  const heroBtn = document.querySelector(".hero-btn");
  const heroFacts = document.querySelectorAll(".hf-block");
  const heroImage = document.querySelector(".hero-image");

  const animateElement = (element, animation, delay) => {
    if (element) {
      setTimeout(() => {
        element.style.opacity = "1";
        element.style.transform = "translate(0, 0)";
        element.classList.add(animation);
      }, delay);
    }
  };

  if (heroTitle) {
    heroTitle.style.opacity = "0";
    heroTitle.style.transform = "translateY(-30px)";
    animateElement(heroTitle, "fade-in-up", 200);
  }

  if (heroText) {
    heroText.style.opacity = "0";
    heroText.style.transform = "translateY(-30px)";
    animateElement(heroText, "fade-in-up", 400);
  }

  if (heroBtn) {
    heroBtn.style.opacity = "0";
    heroBtn.style.transform = "translateY(-30px)";
    animateElement(heroBtn, "fade-in-up", 600);
  }

  if (heroFacts.length > 0) {
    heroFacts.forEach((fact, index) => {
      fact.style.opacity = "0";
      fact.style.transform = "translateX(-30px)";
      animateElement(fact, "fade-in-left", 800 + index * 200);
    });
  }

  if (heroImage) {
    heroImage.style.opacity = "0";
    heroImage.style.transform = "translateX(30px)";
    animateElement(heroImage, "fade-in-right", 1000);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const aboutSection = document.querySelector(".about-hero");
  const aboutLeft = document.querySelector(".about-left");
  const aboutRight = document.querySelector(".about-right");

  if (aboutSection && aboutLeft && aboutRight) {
    setTimeout(() => {
      aboutSection.classList.add("fade-in");
      aboutLeft.classList.add("slide-in-left");
      aboutRight.classList.add("slide-in-right");
    }, 300);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const visionSection = document.querySelector(".our-vision");
  const visionBlocks = document.querySelectorAll(".vision-block");
  const visionImage = document.querySelector(".vision-img");

  if (visionSection && visionBlocks.length > 0 && visionImage) {
    function handleScroll() {
      const sectionPosition = visionSection.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (sectionPosition < screenPosition) {
        visionSection.classList.add("fade-in-vision");
        visionBlocks.forEach((block, index) => {
          setTimeout(() => {
            block.classList.add("slide-up");
          }, index * 100);
        });
        visionImage.classList.add("scale-in");
        window.removeEventListener("scroll", handleScroll);
      }
    }

    window.addEventListener("scroll", handleScroll);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const causesSection = document.querySelector(".causes");
  const causesItems = document.querySelectorAll(".causis-item");

  if (causesSection && causesItems.length > 0) {
    function handleScroll() {
      const sectionPosition = causesSection.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (sectionPosition < screenPosition) {
        causesItems.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add("fade-in-up");
          }, index * 200);
        });
        window.removeEventListener("scroll", handleScroll);
      }
    }

    window.addEventListener("scroll", handleScroll);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const blogsSection = document.querySelector(".blogs");
  const postItems = document.querySelectorAll(".post-item");

  if (blogsSection && postItems.length > 0) {
    function handleScroll() {
      const sectionPosition = blogsSection.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (sectionPosition < screenPosition) {
        postItems.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add("fade-slide-in");
          }, index * 200);
        });
        window.removeEventListener("scroll", handleScroll);
      }
    }

    window.addEventListener("scroll", handleScroll);
  }
});
