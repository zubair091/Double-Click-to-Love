
const container = document.querySelector(".container"),
  heart = document.querySelector(".heart");


container.addEventListener("dblclick", (e) => {

  let xValue = e.clientX - e.target.offsetLeft,
    yValue = e.clientY - e.target.offsetTop;

  
  heart.style.left = `${xValue}px`;
  heart.style.top = `${yValue}px`;


  heart.classList.add("active");


  setTimeout(() => {
    heart.classList.remove("active");
  }, 1000);
});
