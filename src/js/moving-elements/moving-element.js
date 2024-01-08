import "./moving-elements.css";

import imageUrl from "./img/goblin.png";
export default class MovingElement {
  constructor(element) {
    if (typeof element === "string") {
      element = document.querySelectorAll(element);
    }

    this._element = element;

    this._counterMiss = 0;
  }

  addImage(num) {
    const imageItem = document.createElement("img");
    imageItem.src = imageUrl;
    imageItem.classList.add("block__img");

    this._element[num].prepend(imageItem);
  }

  removeImage() {
    document.querySelector(".block__img").remove();
  }
  getItemsImage(check, random) {
    let counterMissElement = document.querySelector(".counter__miss");
    this._counterMiss = counterMissElement.textContent;
    if (check !== random && document.querySelector(".block__img")) {
      this.removeImage();
      this.addImage(random);
      this._counterMiss++;
      counterMissElement.textContent = this._counterMiss;
    }
    if (check !== random && !document.querySelector(".block__img")) {
      this.addImage(random);
      this._counterMiss++;
      counterMissElement.textContent = this._counterMiss;
    }
  }

  searchRandomNumber() {
    return Math.floor(Math.random() * (16 - 1)) + 1;
  }

  banner() {
    document.querySelector(".block").remove();
    const bannerGameOver = document.createElement("div");
    bannerGameOver.className = "banner";
    bannerGameOver.textContent = "game over";
    document.querySelector(".content").append(bannerGameOver);
  }
  inputDataTime() {
    const dataTime = new Date();
    document.querySelector(".footer__data").textContent = `${dataTime}`;
  }
}
