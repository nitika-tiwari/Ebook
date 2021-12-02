function myfun() {
 var text = document.getElementById("tb").value;
 var formattedInput = document.getElementById("tb").value.toLowerCase();
 var validateInput = formattedInput.split("").filter(function(x, n, s) {
                          return s.indexOf(x) == n
                        }).join("");
  document.getElementById('mylocation').innerHTML=text;
 var ele = document.getElementsByClassName('genderCheck');
 var result=document.getElementById("result");
    for(i = 0; i < ele.length; i++) {
      var genderVal = ele[i].value;
       if(ele[i].checked == true) {
         // Global The End Page
         var frontcover = document.createElement("div");
         frontcover.innerHTML = '<div class="front_cover"><img src="boys/"'+genderVal+'"_front.jpg" width="100%" height="100%" /></div>';
         document.getElementById("features").appendChild(frontcover);
         // Gender Based Start cover Pages
          for (var i = 1; i < 9; i++) {
             var bannerpath = "boys/"+genderVal+"_start_0"+ i +".png";
             var startbanner = document.createElement("div");
             startbanner.innerHTML = '<div class="banner"><img src="'+ bannerpath +'" /></div>';
             var imagesecond = document.getElementById("features").appendChild(startbanner);
          }
          // Name Based character loop
          for (var i = 0; i < validateInput.length; i++) {
            var letter = validateInput.charAt(i);
              for (var j = 0; j < 4; j++) {
                var firstimage ="boys/"+genderVal+"_"+letter + j+".png";
                var html = document.createElement("div");
              //  html.setAttribute("data-double", "true");
                html.innerHTML = '<div class="imageone_'+i+'"><img src='+firstimage+' /></div>';
                var imagefirsts =  document.getElementById("features").appendChild(html);
              }
          }
            // Gender Based Last cover Pages
           for (var i = 1; i < 7; i++) {
               var lastimg_path = "boys/"+genderVal+"_last0"+ i +".png";
               var lastpages = document.createElement("div");
               lastpages.innerHTML = '<div><img src="'+ lastimg_path +'" /></div>';
               document.getElementById("features").appendChild(lastpages);
            }
            // Global The End Page
            var lastcover = document.createElement("div");
            lastcover.innerHTML = '<div class="last_cover"><img src="images/cover_last.png" width="100%" height="100%" /></div>';
            document.getElementById("features").appendChild(lastcover);
      }
  }
       $('#features').wowBook({
            height : 500,
            width  : 800,
            controls : {
                next      : '#next',
                back      : '#back',
                first     : '#first',
                last      : '#last',
            }
        }).css({'display':'none', 'margin':'auto'}).fadeIn(1000);
}
