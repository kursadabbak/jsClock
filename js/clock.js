function ad() {
let isim = prompt("İsminiz nedir?")

let myName= document.querySelector("#myName")
myName.innerHTML=isim;
}

function showTime(){
let date = new Date

let hour = date.getHours()
let minute = date.getMinutes()
let sec= date.getSeconds()
let day= date.getDay()
let gunler=["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]

let myClock= document.querySelector("#myClock")
myClock.innerHTML=`${hour<10?"0"+hour:hour}:${minute<10?"0"+minute:minute}:${sec<10?"0"+sec:sec} ${gunler[day]}`


}

setInterval(function(){
    showTime()
 },1000);

 ad()
showTime()

