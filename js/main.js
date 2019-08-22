function change (iconID){
  if(document.getElementById(iconID).className=="fas fa-bell bell2"){
    document.getElementById(iconID).className = "far fa-bell bell1";
    alert("You are turning off the notification");
  }else{
    document.getElementById(iconID).className = "fas fa-bell bell2";
    alert("You are turning on the notification");
  }
}

