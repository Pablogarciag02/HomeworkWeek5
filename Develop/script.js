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



//9-10am assigns color depending on time of day: There are 3 avilable options.
var today = new Date().getHours();
if (today >= 9 && today <= 9.59) {
    document.getElementById("9am").style.background = "#BBF0D6";
} else if (today >= 9.59 && today <= 17) {
    document.getElementById("9am").style.background = "#D0F9E5";
} else document.getElementById("9am").style.background = "#BBF0D6";

//10-11am assigns color depending on time of day: There are 3 avilable options.
var today = new Date().getHours();
if (today >= 10 && today <= 10.59) {
    document.getElementById("10am").style.background = "#BBF0D6";
} else if (today >= 10.59 && today <= 17) {
    document.getElementById("10am").style.background = "#D0F9E5";
} else document.getElementById("10am").style.background = "#BBF0D6";

//11-12am assigns color depending on time of day: There are 3 avilable options.
var today = new Date().getHours();
if (today >= 11 && today <= 11.59) {
    document.getElementById("11am").style.background = "##E2EEC2";
} else if (today >= 11.59 && today <= 17) {
    document.getElementById("11am").style.background = "#D0F9E5";
} else document.getElementById("11am").style.background = "#BBF0D6";

//12-13pm assigns color depending on time of day: There are 3 avilable options.
var today = new Date().getHours();
if (today >= 12 && today <= 12.59) {
    document.getElementById("12am").style.background = "##E2EEC2";
} else if (today >= 12.59 && today <= 17) {
    document.getElementById("12am").style.background = "#D0F9E5";
} else document.getElementById("12am").style.background = "#BBF0D6";

//13-14pm assigns color depending on time of day: There are 3 avilable options.
var today = new Date().getHours();
if (today >= 13 && today <= 13.59) {
    document.getElementById("13pm").style.background = "##E2EEC2";
} else if (today >= 13.59 && today <= 17) {
    document.getElementById("13pm").style.background = "#D0F9E5";
} else document.getElementById("13pm").style.background = "#BBF0D6";

//14-15pm assigns color depending on time of day: There are 3 avilable options.
var today = new Date().getHours();
if (today >= 14 && today <= 14.59) {
    document.getElementById("14pm").style.background = "##E2EEC2";
} else if (today >= 14.59 && today <= 17) {
    document.getElementById("14pm").style.background = "#D0F9E5";
} else document.getElementById("14pm").style.background = "#BBF0D6";

//15-16pm assigns color depending on time of day: There are 3 avilable options.
var today = new Date().getHours();
if (today >= 15 && today <= 15.59) {
    document.getElementById("15pm").style.background = "##E2EEC2";
} else if (today >= 15.59 && today <= 17) {
    document.getElementById("15pm").style.background = "#D0F9E5";
} else document.getElementById("15pm").style.background = "#BBF0D6";

//16-17pm assigns color depending on time of day: There are 3 avilable options.
var today = new Date().getHours();
if (today >= 16 && today <= 16.59) {
    document.getElementById("16pm").style.background = "##E2EEC2";
} else if (today >= 16.59 && today <= 17) {
    document.getElementById("16pm").style.background = "#D0F9E5";
} else document.getElementById("16pm").style.background = "#BBF0D6";

//17-17pm (next day) assigns color depending on time of day: There are 3 avilable options.
var today = new Date().getHours();
if (today >= 17 && today <= 17.59) {
    document.getElementById("17pm").style.background = "#E2EEC2";
} else if (today >= 17.59 && today <= 17) {
    document.getElementById("17pm").style.background = "#D0F9E5";
} else document.getElementById("17pm").style.background = "#BBF0D6";



//Variable that has nothing, used so that instead of textbox displaying null it displays blank
let activity = ""

//9AM Text_____________________________________________________________________________________
let textarea1 = localStorage.getItem("textArea1");
document.getElementById("9am").innerHTML = "" + textarea1;
//returns null

 if( textarea1 === null){
    localStorage.setItem("textArea1", activity);
    document.getElementById("9am").innerHTML = "" + activity;
} 

document.getElementById("button9").onclick = function ()  {
    localStorage.setItem ("textArea1", document.getElementById("9am").value);
}

if (textarea1 != null){
    document.getElementById("9am").innerHTML = "" + textarea1;
}

//10AM Text____________________________________________________________________________________
let textarea2 = localStorage.getItem("textArea2");
document.getElementById("10am").innerHTML = "" + textarea2;
//returns null

 if( textarea2 === null){
    localStorage.setItem("textArea2", activity);
    document.getElementById("10am").innerHTML = "" + activity;
} 

document.getElementById("button10").onclick = function ()  {
    localStorage.setItem ("textArea2", document.getElementById("10am").value);
}

if (textarea2 != null){
    document.getElementById("10am").innerHTML = "" + textarea2;
}

//11AM Text____________________________________________________________________________________
let textarea3 = localStorage.getItem("textArea3");
document.getElementById("11am").innerHTML = "" + textarea3;
//returns null

 if( textarea3 === null){
    localStorage.setItem("textArea3", activity);
    document.getElementById("11am").innerHTML = "" + activity;
} 

document.getElementById("button11").onclick = function ()  {
    localStorage.setItem ("textArea3", document.getElementById("11am").value);
}

if (textarea3 != null){
    document.getElementById("11am").innerHTML = "" + textarea3;
}

//12AM Text____________________________________________________________________________________
let textarea4 = localStorage.getItem("textArea4");
document.getElementById("12am").innerHTML = "" + textarea4;
//returns null

 if( textarea4 === null){
    localStorage.setItem("textArea4", activity);
    document.getElementById("12am").innerHTML = "" + activity;
} 

document.getElementById("button12").onclick = function ()  {
    localStorage.setItem ("textArea4", document.getElementById("12am").value);
}

if (textarea4 != null){
    document.getElementById("12am").innerHTML = "" + textarea4;
}

//13PM Text____________________________________________________________________________________
let textarea5 = localStorage.getItem("textArea5");
document.getElementById("13pm").innerHTML = "" + textarea5;
//returns null

 if( textarea5 === null){
    localStorage.setItem("textArea5", activity);
    document.getElementById("13pm").innerHTML = "" + activity;
} 

document.getElementById("button13").onclick = function ()  {
    localStorage.setItem ("textArea5", document.getElementById("13pm").value);
}

if (textarea5 != null){
    document.getElementById("13pm").innerHTML = "" + textarea5;
}

//14PM Text____________________________________________________________________________________
let textarea6 = localStorage.getItem("textArea6");
document.getElementById("14pm").innerHTML = "" + textarea6;
//returns null

 if( textarea6 === null){
    localStorage.setItem("textArea6", activity);
    document.getElementById("14pm").innerHTML = "" + activity;
} 

document.getElementById("button14").onclick = function ()  {
    localStorage.setItem ("textArea6", document.getElementById("14pm").value);
}

if (textarea6 != null){
    document.getElementById("14pm").innerHTML = "" + textarea6;
}

//15PM Text____________________________________________________________________________________
let textarea7 = localStorage.getItem("textArea7");
document.getElementById("15pm").innerHTML = "" + textarea7;
//returns null

 if( textarea7 === null){
    localStorage.setItem("textArea7", activity);
    document.getElementById("15pm").innerHTML = "" + activity;
} 

document.getElementById("button15").onclick = function ()  {
    localStorage.setItem ("textArea7", document.getElementById("15pm").value);
}

if (textarea7 != null){
    document.getElementById("15pm").innerHTML = "" + textarea7;
}

//16PM Text____________________________________________________________________________________
let textarea8 = localStorage.getItem("textArea8");
document.getElementById("16pm").innerHTML = "" + textarea8;
//returns null

 if( textarea8 === null){
    localStorage.setItem("textArea8", activity);
    document.getElementById("16pm").innerHTML = "" + activity;
} 

document.getElementById("button16").onclick = function ()  {
    localStorage.setItem ("textArea8", document.getElementById("16pm").value);
}

if (textarea8 != null){
    document.getElementById("16pm").innerHTML = "" + textarea8;
}

//17PM Text____________________________________________________________________________________
let textarea9 = localStorage.getItem("textArea9");
document.getElementById("17pm").innerHTML = "" + textarea9;
//returns null

 if( textarea9 === null){
    localStorage.setItem("textArea9", activity);
    document.getElementById("17pm").innerHTML = "" + activity;
} 

document.getElementById("button17").onclick = function ()  {
    localStorage.setItem ("textArea9", document.getElementById("17pm").value);
}

if (textarea9 != null){
    document.getElementById("17pm").innerHTML = "" + textarea9;
}



