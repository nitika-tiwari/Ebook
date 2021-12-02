function myfun() {
  var text = document.getElementById("tb").value;

         var ele = document.getElementsByClassName('genderCheck');
            
            var result=document.getElementById("result");

             for(i = 0; i < ele.length; i++){

                 if(ele[i].checked && ele[i].value=="Male"){

                    result.innerHTML="Boy";

                      for (var i = 0; i < text.length; i++) {

    var letter = text.charAt(i);

    var firstimage ="dream/image_"+letter + 0+".png";

    var secondimage = "dream/image_"+letter + 1+".png";

    var html = document.createElement("div");



    html.innerHTML = '<p ><img src='+firstimage+' /></p><p><img src='+secondimage+' /></p>';


     document.getElementById("myList").appendChild(html);


     

  }
                 }

                 else if(ele[i].checked && ele[i].value=="Female"){

                    result.innerHTML="Girl";
                                     for (var i = 0; i < text.length; i++) {
    var letter = text.charAt(i);
    var firstimage ="princes/image_"+letter + 0+".png";
    var secondimage = "princes/image_"+letter + 1+".png";

    var html = document.createElement("div")

    html.innerHTML = '<p><img src='+firstimage+' /></p><p><img src='+secondimage+' /></p>';
     document.getElementById("myList").appendChild(html);

  }
              }  
                
            
            }
            $('.fade').slick();

            
}

