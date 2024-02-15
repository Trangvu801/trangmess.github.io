const wrapper = document.querySelector(".main2");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

let noBtnClickCount = 0;

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yay, thank you for being a good and supportive friend. Can't wait to hangout this weekend!";
  gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
});

noBtn.addEventListener("click", () => {
  if (noBtnClickCount === 0) {
    question.innerHTML = "Did you click No by mistake?";
    yesBtn.style.fontSize = "18px";
    yesBtn.style.padding = "16px 26px";
    noBtn.style.fontSize = "14px";
    noBtn.style.padding = "12px 22px";
  } else if (noBtnClickCount === 1) {
    question.innerHTML = "Yes button is the button that you need to click!";
    yesBtn.style.fontSize = "20px";
    yesBtn.style.padding = "18px 28px";
    noBtn.style.fontSize = "12px";
    noBtn.style.padding = "10px 20px";
  } else if (noBtnClickCount === 2) {
    question.innerHTML = "I kindly ask you to click Yes!";
    yesBtn.style.fontSize = "22px";
    yesBtn.style.padding = "20px 30px";
    noBtn.style.fontSize = "10px";
    noBtn.style.padding = "8px 16px";
  } else if (noBtnClickCount === 3) {
    question.innerHTML = "Open your eyes and click Yes!";
    yesBtn.style.fontSize = "24px";
    yesBtn.style.padding = "22px 32px";
    noBtn.style.fontSize = "8px";
    noBtn.style.padding = "6px 14px";
  } else if (noBtnClickCount === 4) {
    question.innerHTML = "Click Yes bitch!";
    yesBtn.style.fontSize = "26px";
    yesBtn.style.padding = "24px 34px";
    noBtn.style.fontSize = "6px";
    noBtn.style.padding = "4px 6px";
  } else if (noBtnClickCount === 5) {
    question.innerHTML = "Click the bigger button! I bet you are smart enough to distingish the shape.";
    yesBtn.style.fontSize = "28px";
    yesBtn.style.padding = "26px 36px";
    noBtn.style.fontSize = "4px";
    noBtn.style.padding = "2px 4px";
  } else {
    // Seventh click or more
    noBtn.style.display = 'none'; // Hide the noBtn
    question.innerHTML = "Sorry Pookie maybe options might make you feel confused.";
    gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
  }

  // Increment the click count
  noBtnClickCount++;
});
