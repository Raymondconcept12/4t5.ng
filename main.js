function change() {
    var x = document.getElementById("myLink");
    
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  $(document).ready(function(){
    $(window).scroll(function(){
      if(this.scrollY > 20){
        $(".welcome").addClass("sticky");
        $(".goTop").fadeIn();
      }
      else{
        $(".welcome").removeClass("sticky");
        $(".goTop").fadeOut();
      }
    });
  
    $(".goTop").click(function(){scroll(0,0)});
}  ) ;