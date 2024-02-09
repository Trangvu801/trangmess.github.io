const wrapper = document.querySelector(".main3");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yay, can you send me a text to 717-254-3537.";
  gif.src =
    "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
});

let noBtnClickCount = 0;

noBtn.addEventListener("click", () => {
  if (noBtnClickCount === 0) {
    question.innerHTML = "Did you click No by mistake?";
  } else if (noBtnClickCount === 1) {
    question.innerHTML = "Are you really sure you don't want to see me? Let's try again one more time.";
  } else {
    question.innerHTML = "Ok then! However the Yes button is still there if you want to change your mind.";
    // Here you can add any further actions you want to perform when the user clicks "No" for the final time
  }

  // Increment the click count
  noBtnClickCount++;

  // Reset the click count after the third click (optional)
  if (noBtnClickCount > 2) {
    noBtnClickCount = 0;
  }
});

noBtn.addEventListener("click", () => {
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();

  const maxX = wrapperRect.width - noBtnRect.width;
  const maxY = wrapperRect.height - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});


const cursor = document.querySelector(".cursor");
window.addEventListener("mousemove", function(e){
    cursor.style.left = (e.x-100)+"px";
    cursor.style.top = (e.y-100)+"px";
})
