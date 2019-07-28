class Carousel {
  constructor(element) {
    this.element = element;
    this.images = Array.from(this.element.querySelectorAll("img"));
    this.currentImage = 0;

    this.images[this.currentImage].style.display = "inline-block";

    let leftNav = this.element.querySelector(".left-button");
    let rightNav = this.element.querySelector(".right-button");

    leftNav.addEventListener("click", e => this.showImage("left"));
    rightNav.addEventListener("click", e => this.showImage("right"));
  }

  showImage(direction) {
    //this.images[this.currentImage].style.display = "none";
    TweenLite.to(this.images[this.currentImage], 0.1, {
      display: "none"
    });

    switch (direction) {
      case "left":
        this.currentImage--;
        break;
      case "right":
        this.currentImage++;
        break;
      default:
    }

    if (this.currentImage < 0) this.currentImage = this.images.length - 1;
    else if (this.currentImage === this.images.length) this.currentImage = 0;

    TweenLite.to(this.images[this.currentImage], 0.1, {
      display: "inline-block",
      opacity: "1"
    });

    //this.images[this.currentImage].style.display = "inline-block";
  }
}

let carousel = document.querySelector(".carousel");

carousel = new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
