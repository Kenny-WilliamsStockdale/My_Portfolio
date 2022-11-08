//cards for project page
const cards = document.querySelectorAll(".card");
const cards2 = document.querySelectorAll(".card-long");

cards.forEach((card) => {
  card.addEventListener("mousemove", function (event) {
    const { clientX, clientY } = event;
    const { target } = event;
    const domRect = target.getBoundingClientRect();
    const x = Math.max(0, clientX - Math.round(domRect.left));
    const y = Math.max(0, clientY - Math.round(domRect.top));
    const width = domRect.width;
    const height = domRect.height;
    const posX = width / 2 - x;
    const posY = height / 2 - y;
    const hypotenuseCursor = Math.sqrt(Math.pow(posX, 2) + Math.pow(posY, 2));
    const hypotenuseMax = Math.sqrt(
      Math.pow(width / 2, 2) + Math.pow(height / 2, 2)
    );

    const ratio = hypotenuseCursor / hypotenuseMax;

    if (target.classList.contains("cover")) {
      const highlight = target.children[0];
      target.style.transform = `rotate3d(${posY / hypotenuseCursor}, ${-posX / hypotenuseCursor
        }, 0, ${ratio * 20}deg)`;
      target.style.filter = `brightness(${1.6 - y / height})`;
      highlight.style.transform = `translateX(${posX * ratio * 0.75
        }px) translateY(${posY * ratio}px)`;
    }
  });

  card.addEventListener("mouseleave", function (event) {
    const cover = event.target.children[0];
    if (cover) {
      const highlight = cover.children[0];
      cover.style.transform = "";
      cover.style.filter = "";
      highlight.style.transform = "";
    }
  });
});

cards2.forEach((card) => {
  card.addEventListener("mousemove", function (event) {
    const { clientX, clientY } = event;
    const { target } = event;
    const domRect = target.getBoundingClientRect();
    const x = Math.max(0, clientX - Math.round(domRect.left));
    const y = Math.max(0, clientY - Math.round(domRect.top));
    const width = domRect.width;
    const height = domRect.height;
    const posX = width / 2 - x;
    const posY = height / 2 - y;
    const hypotenuseCursor = Math.sqrt(Math.pow(posX, 2) + Math.pow(posY, 2));
    const hypotenuseMax = Math.sqrt(
      Math.pow(width / 2, 2) + Math.pow(height / 2, 2)
    );

    const ratio = hypotenuseCursor / hypotenuseMax;

    if (target.classList.contains("cover")) {
      const highlight = target.children[0];
      target.style.transform = `rotate3d(${posY / hypotenuseCursor}, ${-posX / hypotenuseCursor
        }, 0, ${ratio * 20}deg)`;
      target.style.filter = `brightness(${1.6 - y / height})`;
      highlight.style.transform = `translateX(${posX * ratio * 0.75
        }px) translateY(${posY * ratio}px)`;
    }
  });

  card.addEventListener("mouseleave", function (event) {
    const cover = event.target.children[0];
    if (cover) {
      const highlight = cover.children[0];
      cover.style.transform = "";
      cover.style.filter = "";
      highlight.style.transform = "";
    }
  });
});