function updateclock(){
    let now=new Date();
    let hours=now.getHours().toString().padStart(2,'0');
    let minutes=now.getMinutes().toString().padStart(2,'0');
    let seconds=now.getSeconds().toString().padStart(2,'0');

let timeele=document.getElementById("time");

if(timeele){
    timeele.innerText=hours+":"+minutes+":"+seconds;

}else{
    console.error("element with id 'time' not found");
}
}
setInterval(updateclock,1000);
updateclock();
