import "../header-btn/header-btn.css";
export default class HeaderBtn {
  constructor(element) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    this.onBtnClick = this.onBtnClick.bind(this);

    this._element = element;
    this._headBtnStart = this._element.querySelector(".header__btn_start");
    this._headBtnStop = this._element.querySelector(".header__btn_stop");
    this._headBtnStart.addEventListener("click", this.onBtnClick);
    this._headBtnStop.addEventListener("click", this.onBtnClick);
  }

  onBtnClick(element) {
    if (element.currentTarget.textContent === "start") {
      this.runGame();
    }
    if (element.currentTarget.textContent === "stop") {
      this.stopGame();
    }
  }

  runGame() {
    document
      .querySelector(".header__btn_start")
      .classList.add("header__btn_del");
    document
      .querySelector(".header__btn_stop")
      .classList.remove("header__btn_del");
  }

  stopGame() {
    document
      .querySelector(".header__btn_start")
      .classList.remove("header__btn_del");
    document
      .querySelector(".header__btn_stop")
      .classList.add("header__btn_del");
  }
}
