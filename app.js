
const menu = document.querySelector('.nav-links');
const burger = document.querySelector(".burger");


function menuFunction() {
   
    menu.classList.toggle('nav-active');
    burger.classList.toggle("toggle");
}


function add(){
    let Starters = document.getElementById("Starters").value;
    let chicken = document.getElementById("chicken").value;
    let Biryani = document.getElementById("Biryani").value;
    let Burgers = document.getElementById("Burgers").value;
    
    let Gst = document.getElementById("Gst").value;
    let submit = document.getElementById("submit");

    let total = [parseInt(Starters),parseInt(chicken),parseInt(Biryani),parseInt(Burgers)];
     let sum = 0;
    for(let i = 0 ; i <= total.length - 1 ; i++){
       sum += total[i];

    }
    let bill = sum * (Gst /100) + sum;

    console.log(bill);

    let withtip = bill + 1000 ;


    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;
    let email =document.getElementById("email").value;
    let place = document.getElementById("place").value;
    let demo = document.getElementById("demo");
    let totalBill = document.getElementById("bill");

    demo.innerHTML = (`Name : ${name} </br>
                 Mobile : ${mobile} </br>
                 Email : ${email} </br>
                 Place : ${place} </br>
                 Total amount : ${sum}/- </br>
                 Total bill payment with  with ${Gst}% Gst is ${bill}/- `)

   totalBill.innerHTML = `with tip 1000 rupees ${withtip}/-`; 
}


