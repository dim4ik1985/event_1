import "./click-counter.css";

export default class ClickImage {
  constructor(element) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }

    this.onImgClick = this.onImgClick.bind(this);

    this._element = element;
    this._blockItem = this._element.querySelector(".block");
    this._blockItem.addEventListener("click", this.onImgClick);
    this._counterFind = 0;
  }

  onImgClick(e) {
    const countFind = document.querySelector(".counter__find");
    const countMiss = document.querySelector(".counter__miss");
    if (e.target.className === "block__img" && countMiss.textContent <= 5) {
      this._counterFind++;
      countFind.textContent = this._counterFind;
      countMiss.textContent = 0;
      document.querySelector(".block__img").hidden = true;
    }
  }
}
