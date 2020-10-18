// <!-- {/*to make header fixed during scroll*/} -->
<script> 
    
    var header = document.getElementById("ftco-navbar");
    //offsetTop return position of coordinate top of element in pixel 
    var sticky = header.offsetTop;
    window.onscroll =()=>myFunction();
  
  function myFunction() {
    //window.scrollY it return the y coordinate in pixel of top of window in opened page
    if(window.scrollY > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  
  }


  </script>