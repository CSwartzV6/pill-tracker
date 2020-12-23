if (typeof(Storage) !== "undefined") {
    // Retrieve
    document.getElementById("result").innerHTML = localStorage.getItem("pillsCount");
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
  }
  function pillsCountStart(pillsCount) {
    if (isNaN(pillsCount) {
      pillsCount = 0;
    }
  }
  function pillsCounter() {
    if (typeof(Storage) !== "undefined") {
      if (localStorage.pillsCount) {
        localStorage.pillsCount = Number(localStorage.pillsCount)+30;
      } else {
        localStorage.pillsCount = 1;
      }
      document.getElementById("result").innerHTML = localStorage.pillsCount;
    } else {
      document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
  }
  function pillsCounterMinus() {
   //show time last taken
    if (typeof(Storage) !== "undefined") {
        var timeNow = (new Date());
        document.getElementById("demo").innerHTML = timeNow;
       localStorage.timeTakenLast = timeNow;
      if (localStorage.pillsCount) {
        localStorage.pillsCount = Number(localStorage.pillsCount)-1;
      } else {
        localStorage.pillsCount = 1;
      }
      document.getElementById("result").innerHTML = localStorage.pillsCount;
    } else {
      document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
  }
  function pillsCounterReset() {
    if (typeof(Storage) !== "undefined") {
      if (localStorage.pillsCount) {
        localStorage.pillsCount = Number(localStorage.pillsCount)*0;
      } else {
        localStorage.pillsCount = 1;
      }
      document.getElementById("result").innerHTML = localStorage.pillsCount;
    } else {
      document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
  }