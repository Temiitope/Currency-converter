let btn = document.getElementById("btn");

btn.addEventListener("click" , function() {
    let naira = document.getElementById("dollars").value
    let dollars = document.getElementById("naira")
    dollars.value =naira/415;
});