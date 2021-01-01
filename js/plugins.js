
//  Gallery Code-1 
// var Imagch=document.getElementById("Imagch").src="images/back-1.jpg";

// function OneImg(){
//     document.getElementById("Imagch").src="images/back-2.jpg";
// }

// function TwoImg(){
//     document.getElementById("Imagch").src="images/back-3.jpg";
// }
// function ThreeImg(){
//     document.getElementById("Imagch").src="images/back-4.jpg";
// }
// function FourImg(){
//     document.getElementById("Imagch").src="images/back-5.jpg";
// }

//  Gallery Code-2 

var Imagch=document.getElementById("Imagch");

var ImgSlid= document.getElementsByClassName("ImgSlid");


    ImgSlid[0].onclick= function(){
        Imagch.src=ImgSlid[0].src;
    }

    ImgSlid[1].onclick= function(){
        Imagch.src=ImgSlid[1].src;
    }
    ImgSlid[2].onclick= function(){
        Imagch.src=ImgSlid[2].src;
    }
    ImgSlid[3].onclick= function(){
        Imagch.src=ImgSlid[3].src;
    }