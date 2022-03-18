alert("Welcome to my blogpost!");

//Text Size Changer
document.querySelector("select").onchange = function () {
  document.querySelector(".info").style.fontSize = this.value;
};
//Color Changer
document.getElementById("Switch-Theme").onclick = function () {
  if (document.body.classList.contains("dark")) {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
    document.querySelector("body").style.backgroundColor = "white";
    document.querySelector(".info").style.color = "black";
    document.querySelector("h2").style.color = "black";
    document.querySelector(".caption").style.color = "black";
    document.querySelector("div").style.color = "black";
    document.getElementById("result").style.color = "black";
  } else {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector(".info").style.color = "white";
    document.querySelector("h2").style.color = "white";
    document.querySelector(".caption").style.color = "white";
    document.querySelector("div").style.color = "white";
    document.getElementById("result").style.color = "white";
  }
};
function note() {
  let name = document.getElementById("name").value;
  if (name === "") {
    alert("You didn't type anything!");
    document.getElementById("result").innerHTML =
      "Thank you for reading this blog!";
  }
  //alert("Hello, " + name + "!");
  else {
    document.getElementById("result").innerHTML =
      "Thank you, " + name + ", for reading this blog!";
  }
}

//Hello
/* function greet() {
  let name = document.getElementById("name").value;
  if (name === "") {
    name = "world";
  }
  //alert("Hello, " + name + "!");
  document.getElementById("result").innerHTML = "Hello, " + name + "!";
}
 */

//Counter
/* let counter = 0;
function increment() {
  counter++;
  document.getElementById("result").innerHTML = counter;
} */

/* 
document.getElementById("green").onclick = function () {
  document.querySelector("body").style.backgroundColor = "green";
};
document.getElementById("blue").onclick = function () {
  document.querySelector("body").style.backgroundColor = "blue";
};
document.getElementById("pink").onclick = function () {
  document.querySelector("body").style.backgroundColor = "pink";
};
document.getElementById("orange").onclick = function () {
  document.querySelector("body").style.backgroundColor = "orange";
};
document.getElementById("teal").onclick = function () {
  document.querySelector("body").style.backgroundColor = "teal";
}; */
