import { useEffect } from "@storybook/client-api";

export default {
  title: "Pages/Details",
};

export const basic = () => {
  useEffect(() => {
    // alert("Button!!!");
    const button = document.querySelector(".btn");
    button.addEventListener("click", () => {
      alert(button.innerHTML);
      button.innerHTML = "Test";
    });
  });

  return '<button class= "btn">Hallo Fische</buttton>';
};

// const numberOfStudents = 15.5;
// const message = `Hello ${numberOfStudents + 5} fishes`;
// alert(message);
