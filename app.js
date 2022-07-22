const submitbutton = document.getElementById("checkButton");
console.log(submitbutton);
var randomnumber=Math.round(Math.random()*100);
console.log(randomnumber);
let livenumber = document.getElementById("attemptCount");
let msg = document.getElementById("message");
function fun(){
    document.getElementById("myform").reset();
} 
var live=10;
submitbutton.onclick =() =>{
    var inputvalue=document.getElementById("textBox").value;
    console.log(inputvalue);
    live--;
    if (inputvalue == randomnumber)//=== strict condition 
    {   
        location.href='./win.html'
    }
    else if(live==0)
    {
        location.href='./lose.html'
    }
    else if(inputvalue>randomnumber)
    {
      text=`Your guess is too high<br><br> ${live}-chances left`;
    }
    else if(inputvalue<randomnumber)
    {
        text=`Your guess is too low<br><br> ${live}-chances left`;
    }
message.style.display="inherit"
msg.innerHTML=text;
livenumber.innerHTML=live;
}

