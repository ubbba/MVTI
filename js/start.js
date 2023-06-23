const main = document.querySelector("#main");
const qna = document.querySelector("#qna");

function addAnswer(answerText, qNum) {
  var a = document.querySelector(".answer");
  var answer = document.createElement("button");
  answer.classList.add("answerList");
  // a안에서 answer가 소속될 수 있게
  a.appendChild(answer);
  answer.innerHTML = answerText;

  answer.addEventListener(
    "click",
    function () {
      var children = document.querySelectorAll(".answerList");
      for (let i = 0; i < children.length; i++) {
        children[i].disabled = true;
        children[i].style.display = "none";
      }
      goNext(++qNum);
    },
    false
  );
}

function goNext(qNum) {
  var q = document.querySelector(".question");
  q.innerHTML = qnaList[qNum].q;
  for (let i in qnaList[qNum].a) {
    addAnswer(qnaList[qNum].a[i].answer, qNum);
  }
}

function begin() {
  main.style.animation = "fadeOut 1s ";
  main.style.WebkitAnimation = "fadeOut 1s ";

  setTimeout(() => {
    qna.style.animation = "fadeIn 1s ";
    qna.style.WebkitAnimation = "fadeIn 1s ";

    setTimeout(() => {
      qna.style.display = "block";
      main.style.display = "none";
    }, 400);
    let qNum = 0;
    goNext(qNum);
  }, 300);
}
