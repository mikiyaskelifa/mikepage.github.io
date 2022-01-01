
var view = document.getElementById("view");
var point =360;
var count =0;

let next =()=>{
  
  point= point - 225;




  if(point <  -1890){

       point = -1890;

  }
  else{
    document.getElementById('imgbox').style.left = point + "px";
    count++;
  }

  if(count ==1){
     
    document.getElementById("view").style.backgroundImage ="url('/photo/1.jpg')";

  }
  else if(count ==2){
     
    document.getElementById("view").style.backgroundImage ="url('/photo/2.jpg')";

  }
  else if(count ==3){
     
    document.getElementById("view").style.backgroundImage ="url('/photo/3.jpg')";

  }
  else if(count ==4){
     
    document.getElementById("view").style.backgroundImage ="url('/photo/4.jpg')";

  }

  else if(count ==5){
     
    document.getElementById("view").style.backgroundImage ="url('/photo/5.jpg')";

  }
 
  else if(count ==6){
     
    document.getElementById("view").style.backgroundImage ="url('/photo/6.jpg')";

  }
  else if(count ==7){
     
    document.getElementById("view").style.backgroundImage ="url('/photo/7.jpg')";

  }
  else if(count ==8){
     
    document.getElementById("view").style.backgroundImage ="url('/photo/8.jpg')";

  }
  else if(count ==9){
     
    document.getElementById("view").style.backgroundImage ="url('/photo/9.jpg')";

  }
  else if(count ==10){
     
    document.getElementById("view").style.backgroundImage ="url('/photo/10.jpg')";

  }
} 

let prebtn =()=>{

  point= point + 225;

    if(point > 360){

      point =360;

    }

    else{
    
    document.getElementById('imgbox').style.left =point + "px";
    count--;

    }
    if(count ==1){
     
      document.getElementById("view").style.backgroundImage ="url('/photo/1.jpg')";
  
    }
    else if(count ==2){
       
      document.getElementById("view").style.backgroundImage ="url('/photo/2.jpg')";
  
    }
    else if(count ==3){
       
      document.getElementById("view").style.backgroundImage ="url('/photo/3.jpg')";
  
    }
    else if(count ==4){
       
      document.getElementById("view").style.backgroundImage ="url('/photo/4.jpg')";
  
    }
  
    else if(count ==5){
       
      document.getElementById("view").style.backgroundImage ="url('/photo/5.jpg')";
  
    }
   
    else if(count ==6){
       
      document.getElementById("view").style.backgroundImage ="url('/photo/6.jpg')";
  
    }
    else if(count ==7){
       
      document.getElementById("view").style.backgroundImage ="url('/photo/7.jpg')";
  
    }
    else if(count ==8){
       
      document.getElementById("view").style.backgroundImage ="url('/photo/8.jpg')";
  
    }
    else if(count ==9){
       
      document.getElementById("view").style.backgroundImage ="url('/photo/9.jpg')";
  
    }
    else if(count ==10){
       
      document.getElementById("view").style.backgroundImage ="url('/photo/10.jpg')";
  
    }
  } 