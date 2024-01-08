// TODO: write code here

import HeaderBtn from "./header-btn/header-btn";
import MovingElement from "./moving-elements/moving-element";
import ClickImage from "./click-counter/click-counter";

document.addEventListener("DOMContentLoaded", () => {
  const btnHeader = new HeaderBtn(".header");

  const blockItems = new MovingElement(".block__column");

  const click = new ClickImage(".content");

  const data = new MovingElement(document.querySelector(".footer__data"));

  let checkNumber = blockItems.searchRandomNumber();

  blockItems.addImage(checkNumber);

  let interval = setInterval(() => {
    let randomNumber = blockItems.searchRandomNumber();
    if (document.querySelector(".counter__miss").textContent > 4) {
      clearInterval(interval);
      blockItems.banner();
    } else {
      blockItems.getItemsImage(checkNumber, randomNumber);
    }
  }, 1000);

  setInterval(() => {
    blockItems.inputDataTime();
  }, 1000);
});
