function sayHello() {
  console.log("Hello!");
}

setTimeout(sayHello, 3000);

var sec = 1;
const printTime = () => {
  console.log("After ", sec);
  sec++;
  if (sec === 6) {
    clearInterval(id2);
  }
};

var id2 = setInterval(printTime, 1000);

// timer

var time = 10;
const timer = () => {
  console.log(time);
  time--;
  if (time === 0) {
    clearInterval(id);
    console.log("Stop");
  }
};

var id = setInterval(timer, 1000);
