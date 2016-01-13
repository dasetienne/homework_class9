$(document).ready(function() {
  // - starting point, some way to get current time
  // - some way to display it (HTML + inject clock into HTML + CSS to style it)
  // - way to update the clock, refresh (needs to back to 0/12AM)

  // reminder:
  // $("#someId").css("color", "red");
  // $("#someId").css("font-size", "red");
  // $("#someId").css({
  //   color: "red",
  //   fontSize: "14px",
  //   backgroundColor: "blue"
  // });

  // 4 / 2 -> 2

  // 4 % 2 -> 0
  // 5 % 2 -> 1
  // 6 % 2 -> 0

  // if a number is even then % with 2 will return 0
  // otherwise if a number is odd then % with 2 will return 1

  function startTime() {
    var today = new Date();
    // today = Thu Jan 07 2016 18:42:12 GMT-0500 (EST)
    var h = today.getHours();
    // h = 18
    var m = today.getMinutes();
    // m = 42
    var s = today.getSeconds();
    // s = 12
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);

    oddMinute(m);

    $("#txt").html(h + ":" + m + ":" + s);
    var t = setTimeout(startTime, 500);
  };

  function checkTime(i) {
    // i = 1
    if (i < 10) {
      i = "0" + i
    }
    return i;
  };

    // $("#txt").html(h + ":" + m + ":" + s);
    // var t = setTimeout(startTime, 500);
  

  function checkTime(i) {
    // i = 1
    if (i < 10) {
      i = "0" + i
    }
    return i;
  };

  function oddMinute(i) {
    if (i % 2 ===1) {

      $("#txt").css("color", "red");


    } else {
      $("#txt").css("color","blue");
    }
  };

  //   var = background

  //   $("#txt").html(h + ":" + m + ":" + s);
  //   var background = setTimeout(startTime, 300000); 
  // }

  function backgroundColor() {
    if($("body").css("backgroundColor") === "rgb(128, 0, 128)") {
      
      $("body").css("backgroundColor", "green")

    } else {

      $("body").css("backgroundColor", "purple");

    };
    // if () {
    // } else {
    //   // change to a different color
    // }

    var background = setTimeout(backgroundColor, 300000);

  };

  
  function fontSizeChange() {

    var fontSizes = ["12px", "14px", "16px", "18px"];
    var random = Math.floor(Math.random() * 4);
    $("body").css("font-size", fontSizes[random]);
    // fontSizes[random]
    

    setTimeout(fontSizeChange, 1000);


  };




  fontSizeChange();
  backgroundColor();
  startTime();

});


