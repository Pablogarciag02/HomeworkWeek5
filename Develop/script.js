//Function to set time and day and display it onto the main header
const date = new Date();

const n = date.toDateString();

setInterval(() => {
    const date = new Date().toLocaleTimeString('en-US', {
        hour: 'numeric',
        hour12: true,
        minute: 'numeric',
        second: 'numeric',
       });
       document.getElementById("currentTime").innerHTML = "Time: " + date;
    }, 1000);


document.getElementById("currentDay").innerHTML = "Date: " + date;


const t  = document.getElementsByTagName("textarea");

var today = new Date().getHours();
if (today >= 9 && today <= 9.59) {
    document.getElementById("9am").style.background = "#5A7BB5";
} else if (today >= 9.59 && today <= 17) {
    document.getElementById("9am").style.background = "#B2BFC2";
} else document.getElementById("9am").style.background = "#CCDCF2";

var today = new Date().getHours();
if (today >= 10 && today <= 10.59) {
    document.getElementById("10am").style.background = "#5A7BB5";
} else if (today >= 10.59 && today <= 17) {
    document.getElementById("10am").style.background = "#B2BFC2";
} else document.getElementById("10am").style.background = "#CCDCF2";

var today = new Date().getHours();
if (today >= 11 && today <= 11.59) {
    document.getElementById("11am").style.background = "#5A7BB5";
} else if (today >= 11.59 && today <= 17) {
    document.getElementById("11am").style.background = "#B2BFC2";
} else document.getElementById("11am").style.background = "#CCDCF2";

var today = new Date().getHours();
if (today >= 12 && today <= 12.59) {
    document.getElementById("12am").style.background = "#5A7BB5";
} else if (today >= 12.59 && today <= 17) {
    document.getElementById("12am").style.background = "#B2BFC2";
} else document.getElementById("12am").style.background = "#CCDCF2";

var today = new Date().getHours();
if (today >= 13 && today <= 13.59) {
    document.getElementById("13pm").style.background = "#5A7BB5";
} else if (today >= 13.59 && today <= 17) {
    document.getElementById("13pm").style.background = "#B2BFC2";
} else document.getElementById("13pm").style.background = "#CCDCF2";

var today = new Date().getHours();
if (today >= 14 && today <= 14.59) {
    document.getElementById("14pm").style.background = "#5A7BB5";
} else if (today >= 14.59 && today <= 17) {
    document.getElementById("14pm").style.background = "#B2BFC2";
} else document.getElementById("14pm").style.background = "#CCDCF2";

var today = new Date().getHours();
if (today >= 15 && today <= 15.59) {
    document.getElementById("15pm").style.background = "#5A7BB5";
} else if (today >= 15.59 && today <= 17) {
    document.getElementById("15pm").style.background = "#B2BFC2";
} else document.getElementById("15pm").style.background = "#CCDCF2";

var today = new Date().getHours();
if (today >= 16 && today <= 16.59) {
    document.getElementById("16pm").style.background = "#5A7BB5";
} else if (today >= 16.59 && today <= 17) {
    document.getElementById("16pm").style.background = "#B2BFC2";
} else document.getElementById("16pm").style.background = "#CCDCF2";

var today = new Date().getHours();
if (today >= 17 && today <= 17.59) {
    document.getElementById("17pm").style.background = "#5A7BB5";
} else if (today >= 17.59 && today <= 17) {
    document.getElementById("17pm").style.background = "#B2BFC2";
} else document.getElementById("17pm").style.background = "#CCDCF2";

//const bad = "null";
//const good = bad.replace("null", " ");

//let array = [0, 1, null, 2, 3];

//function removeNull(array) {
//return array.filter(x => x !== null)
//};

//function textarea1() {
let textarea1 = localStorage.getItem("textArea1");
document.getElementById("9am").innerHTML = "" + textarea1;
//if (textarea1 = "null");{
//textarea1.replace(" "); 
//}
//}

let textarea2 = localStorage.getItem("textArea2");
document.getElementById("10am").innerHTML = "" + textarea2;

let textarea3 = localStorage.getItem("textArea3");
document.getElementById("11am").innerHTML = "" + textarea3;

let textarea4 = localStorage.getItem("textArea4");
document.getElementById("12am").innerHTML = "" + textarea4;

let textarea5 = localStorage.getItem("textArea5");
document.getElementById("13pm").innerHTML = "" + textarea5;

let textarea6 = localStorage.getItem("textArea6");
document.getElementById("14pm").innerHTML = "" + textarea6;

let textarea7 = localStorage.getItem("textArea7");
document.getElementById("15pm").innerHTML = "" + textarea7;

let textarea8 = localStorage.getItem("textArea8");
document.getElementById("16pm").innerHTML = "" + textarea8;

let textarea9 = localStorage.getItem("textArea9");
document.getElementById("17pm").innerHTML = "" + textarea9;



//if (textarea1 = "null");{
    //textarea1.replace(" "); 
    //}

//const bad = "null";
//const good = bad.replace("null", " ");



document.getElementById("button9").onclick = function ()  {
    localStorage.setItem ("textArea1", document.getElementById("9am").value);
}

document.getElementById("button10").onclick = function ()  {
    localStorage.setItem ("textArea2", document.getElementById("10am").value);
}

document.getElementById("button11").onclick = function ()  {
    localStorage.setItem ("textArea3", document.getElementById("11am").value);
}

document.getElementById("button12").onclick = function ()  {
    localStorage.setItem ("textArea4", document.getElementById("12am").value);
}

document.getElementById("button13").onclick = function ()  {
    localStorage.setItem ("textArea5", document.getElementById("13pm").value);
}

document.getElementById("button14").onclick = function ()  {
    localStorage.setItem ("textArea6", document.getElementById("14pm").value);
}

document.getElementById("button15").onclick = function ()  {
    localStorage.setItem ("textArea7", document.getElementById("15pm").value);
}

document.getElementById("button16").onclick = function ()  {
    localStorage.setItem ("textArea8", document.getElementById("16pm").value);
}

document.getElementById("button17").onclick = function ()  {
    localStorage.setItem ("textArea9", document.getElementById("17pm").value);
}