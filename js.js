setInterval(() => {
  let BackBox = document.getElementsByClassName("backbox");

  let RedBox = '<div class="red"></div>';

  BackBox[0].insertAdjacentHTML("afterbegin", RedBox);
}, 3000);
