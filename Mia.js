const wrapper = document.querySelector(".main2");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML =  "Yay, thank you for being a good and supportive friend. Can't wait to hangout this weekend!";
});

const container = document.getElementById("section2");

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();
  
  const maxX = containerRect.width - noBtnRect.width;
  const maxY = containerRect.height - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
