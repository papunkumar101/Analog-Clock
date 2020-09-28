setInterval(() => {
  d = new Date();
  htime = d.getHours();
  mtime = d.getMinutes();
  stime = d.getSeconds();
  hrotation = 30 * htime + mtime / 2;
  mrotation = 6 * mtime;
  srotation = 6 * stime;

  hour.style.transform = `rotate(${hrotation}deg)`;
  minute.style.transform = `rotate(${mrotation}deg)`;
  second.style.transform = `rotate(${srotation}deg)`;
  /*________digital time_____*/   
  var digitalTime= document.getElementById("digitalC").innerHTML=d.toLocaleTimeString();

}, 1000);

/*________digital time_____ 
 d = new Date();
var digitalTime= document.getElementById("digitalC").innerHTML=d.toLocaleTimeString();*/
