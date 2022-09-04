let shoe1 = document.querySelector("#Jordan-1");
let shoe2 = document.querySelector("#Jordan-2");
let shoe3 = document.querySelector("#Jordan-3");
let shoe4 = document.querySelector("#Jordan-4");
let shoe5 = document.querySelector("#Jordan-5");
let shoe6 = document.querySelector("#Jordan-6");
let totalDiv = document.querySelector(".total");

const shoe1Price = 100;
const shoe2Price = 150;
const shoe3Price = 200;
const shoe4Price = 250;
const shoe5Price = 50;
const shoe6Price = 100;

const addQty = (e) => {
  const shoe =
    e.target.parentNode.parentNode.previousElementSibling.textContent;
  if (shoe === "Jordan 1") {
    shoe1.textContent = parseInt(++shoe1.textContent);
    totalDiv.textContent = shoe1Price + parseInt(totalDiv.textContent);
  }
  if (shoe === "Jordan 2") {
    shoe2.textContent = parseInt(++shoe2.textContent);
    totalDiv.textContent = shoe2Price + parseInt(totalDiv.textContent);
  }
  if (shoe === "Jordan 3") {
    shoe3.textContent = +parseInt(++shoe3.textContent);
    totalDiv.textContent = shoe3Price + parseInt(totalDiv.textContent);
  }
  if (shoe === "Jordan 4") {
    shoe4.textContent = parseInt(++shoe4.textContent);
    totalDiv.textContent = shoe4Price + parseInt(totalDiv.textContent);
  }
  if (shoe === "Jordan 5") {
    shoe5.textContent = parseInt(++shoe5.textContent);
    totalDiv.textContent = shoe5Price + parseInt(totalDiv.textContent);
  }
  if (shoe === "Jordan 6") {
    shoe6.textContent = parseInt(++shoe6.textContent);
    totalDiv.textContent = shoe6Price + parseInt(totalDiv.textContent);
  }
};

const lessQty = (e) => {
  const shoe =
    e.target.parentNode.parentNode.previousElementSibling.textContent;
  if (shoe === "Jordan 1" && shoe1.textContent > 0) {
    shoe1.textContent = parseInt(--shoe1.textContent);
    totalDiv.textContent = shoe1Price - parseInt(totalDiv.textContent);
  }
  if (shoe === "Jordan 2" && shoe1.textContent > 0) {
    shoe2.textContent = parseInt(--shoe2.textContent);
    totalDiv.textContent = shoe2Price - parseInt(totalDiv.textContent);
  }
  if (shoe === "Jordan 3" && shoe3.textContent > 0) {
    shoe3.textContent = +parseInt(--shoe3.textContent);
    totalDiv.textContent = shoe3Price - parseInt(totalDiv.textContent);
  }
  if (shoe === "Jordan 4" && shoe4.textContent > 0) {
    shoe4.textContent = parseInt(--shoe4.textContent);
    totalDiv.textContent = shoe4Price - parseInt(totalDiv.textContent);
  }
  if (shoe === "Jordan 5" && shoe5.textContent > 0) {
    shoe5.textContent = parseInt(--shoe5.textContent);
    totalDiv.textContent = shoe5Price - parseInt(totalDiv.textContent);
  }
  if (shoe === "Jordan 6" && shoe6.textContent > 0) {
    shoe6.textContent = parseInt(--shoe6.textContent);
    totalDiv.textContent = shoe6Price - parseInt(totalDiv.textContent);
  }
};
