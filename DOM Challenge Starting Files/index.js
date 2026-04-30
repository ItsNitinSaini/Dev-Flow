document.querySelector("h1").innerHTML = "Hello World!";
delay = 2000;
setTimeout(() => {
  document.querySelector("h1").classList.add("huge");
}, delay);