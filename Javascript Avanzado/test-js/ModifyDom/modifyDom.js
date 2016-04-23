  $( document ).ready( start );

  function start(){
    var div = $(".index"),
        outDiv = $("#out"),
        div1 = $("#div1"),
        div2 = $("#div2"),
        div3 = $("#div3");

    function moveUp(){
      $(".index div:first").appendTo(".index:first");
      console.log( div.offset() );
    }
    function moveDown(){
      $(".index div:last").prependTo(".index:first");
    }

    $("#click").on("click", moveUp);
    $("#click2").on("click", moveDown);
  }
