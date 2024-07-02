let counter = 0;
let timer;

document.addEventListener("DOMContentLoaded", () => {
  const counterElement = document.getElementById("counter");
  //start timer to increment every secound the page load
  function startTimer() 
  {
  timer = setInterval(() => {
   counter++;
   counterElement.textContent = counter;
  }, 1000);
}
//stop timer
function stopTimer() 
{
   clearInterval(timer);
}
startTimer();
  //Setting function to Plus and Minus button
  const plusButton = document.getElementById("plus");
  const minusButton = document.getElementById("minus");

  plusButton.addEventListener("click", () => {
     counter++;
     counterElement.textContent = counter;
  });

  minusButton.addEventListener("click", () => {
     counter--;
     counterElement.textContent = counter;
  });

  //Adding like button function
  
  const likeButton = document.getElementById("heart");
  const likesList =document.querySelector(".likes");

  likeButton.addEventListener("click", () => {
      const existingLike = document.getElementById(`like-${counter}`);
      if (existingLike)
      {
        const likeCount = existingLike.querySelector("span");
        likeCount.textContent = parseInt(likeCount.textContent) + 1;
      } else 
      {
        const likeItem = document.createElement("li");
        likeItem.id = `like-${counter}`;
        likeItem.innerHTML = `${counter} has been liked <span>1</span> time`;
        likesList.appendChild(likeItem);
      }
 });
 //adding function for pause button
const pauseButton =document.getElementById("pause");

pauseButton.addEventListener("click", () => {
    if (pauseButton.textContent === "pause")
        {
            stopTimer();
            // console.log("Timer paused"); // Debug log
            pauseButton.textContent = "resume";
            disableButtons(true);
        } else {
          startTimer();
        //   console.log("Timer resumed"); // Debug log
          pauseButton.textContent ="pause"
          disableButtons(false);
        }
    });
 
  function disableButtons(disabled)
  {
    plusButton.disabled = disabled;
    minusButton.disabled = disabled;
    likeButton.disabled = disabled;
  }  
  const restartButton = document.createElement("button");
  restartButton.id = "restart";
  restartButton.textContent = "restart";
  document.body.insertBefore(restartButton, document.querySelector('.likes').nextSibling);

  restartButton.addEventListener("click", () => {
    counter = 0;
    counterElement.textContent = counter;
    stopTimer();
    startTimer();
    pauseButton.textContent = "pause";
    disableButtons(false);
  });

  // Comment form
  const commentForm = document.getElementById("comment-form");
  const commentInput = document.getElementById("comment-input");
  const commentList = document.getElementById("list");

  commentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const comment = document.createElement("p");
    comment.textContent = commentInput.value;
    commentList.appendChild(comment);
    commentInput.value = "";
  });


})
