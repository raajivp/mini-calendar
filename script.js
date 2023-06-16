const mnameE1 = document.getElementById("month-name");
const dnameE1 = document.getElementById("day-name");
const dnumE1 = document.getElementById("daynumber");
const yearE1 = document.getElementById("year");

const date = new Date() ; 
const month = date.getMonth()


mnameE1.innerText = date.toLocaleString("en" , { 
    month :  "long" })
 
dnameE1.innerText = date.toLocaleString("en" , {weekday : "long"});

dnumE1.innerText = date.getDate()

yearE1.innerText = date.getFullYear()