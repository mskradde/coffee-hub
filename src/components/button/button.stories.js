import "./button.css";
import { createButton } from "./button";
export default { title: "Button" };

export const addToCard = () => {
  const firstButton = createButton("Button");
  firstButton.className = "btn";
  firstButton.innerText = "Add to cart";

  return firstButton;
};
