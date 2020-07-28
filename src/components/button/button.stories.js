import "./button.css";

export default { title: "Button" };

function createButton(buttonText) {
  const button = document.createElement("button");
  button.className = "btn";
  const text = document.createTextNode(buttonText);
  button.append(text);
  button.addEventListener("click", () => {
    alert("Hello");
  });
  return button;
}

export const addToCard = () => {
  const firstButton = createButton("Button");
  firstButton.className = "btn";
  firstButton.innerText = "Add to cart";

  return firstButton;
};
