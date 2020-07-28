import "./quantitySelector.css";
import quantitySelector from "./quantitySelector.html";
import { useEffect } from "@storybook/client-api";

export default { title: "Quantity Selector" };

export const coffeeSelector = () => {
  useEffect(() => {
    const buttonminus = document.querySelector(".btn-minus");
    buttonminus.addEventListener("click", () => {
      const message = "minus";
      // button.innerHTML = "Minus";
      alert(message);
    });
    const buttonplus = document.querySelector(".btn-plus");
    buttonplus.addEventListener("click", () => {
      const message = "plus";
      alert(message);
    });
  });
  return quantitySelector;
};
