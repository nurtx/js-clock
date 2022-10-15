let firstName = prompt("isminizi giriniz: ")
let myName = document.querySelector("#myName")
myName.innerHTML = firstName


function dateClock()  {
    let nowDate = new Date()
    let hours = nowDate.getHours()
    let minute = nowDate.getMinutes()
    let second = nowDate.getSeconds()
    let days = nowDate.getDay()
    let gunler = ["pazar","pazartesi","salı","çarşamba","perşembe","cuma","cumartesi"]

    let myClock = document.querySelector("#myClock")
    myClock.innerHTML = `${hours} : ${minute} : ${second} ${gunler[days]}`
}
setInterval(dateClock,1000)