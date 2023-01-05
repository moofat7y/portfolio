import DarkLighttoggler from './DarkLighttoggler.js';

DarkLighttoggler();


// Install aos
AOS.init();




let about=document.querySelector(".about-div");
// about section
ScrollOut({
    targets:".about-div .img",
  });
  





// ///////////////////////////
            // filter
// ////////////////////////////
let filters= document.querySelectorAll(".works-div .contener .works ul li");
let filtered=document.querySelectorAll(".works-div .contener .works .filtered .it");


filters.forEach(filter =>{
  filter.addEventListener("click",function(){
    document.querySelector(".works-div .contener .works ul li.active").classList.remove("active");
    filter.classList.add("active");
    let filterditems=filter.dataset.filter;
    filtered.forEach(item =>{
      if(item.classList.contains(filterditems)){
        item.classList.remove("hidden");
        item.classList.add("show");
      }else{
        item.classList.remove("show");
        item.classList.add("hidden");
      }
    })
  })
})

// toast



let whatsappBtn = document.getElementById("whatsapp");

let toastbtnToggle = window.matchMedia("(min-width: 992px)");
if(toastbtnToggle.matches){
  whatsappBtn.innerHTML= `<a href="https://phenomenal-daifuku-e6afd3.netlify.app/" target="_blank" class="text-decoration-none link-secondary me-2 fs-7">Demo</a><i class="bi bi-arrow-right"></i>`;
}

window.addEventListener('resize',() =>{
  if(toastbtnToggle.matches){
    whatsappBtn.innerHTML= `<a href="https://phenomenal-daifuku-e6afd3.netlify.app/" target="_blank" class="text-decoration-none link-secondary me-2 fs-7">Demo</a><i class="bi bi-arrow-right"></i>`;
  }
  else{
    whatsappBtn.innerHTML = `<span type="button" class="text-decoration-none link-secondary me-2 fs-7" id="app">Demo</span><i class="bi bi-arrow-right"></i>`;
  }
})
let toastbtn=document.getElementById("app");
let mytoast=document.getElementById("apptoast");

toastbtn.addEventListener("click",function(){
  let toast=new bootstrap.Toast(mytoast);
  toast.show();
})



// send massege for my email
function sendEmail(){
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "mohammedbelal802@gmail.com",
    Password : "85E8EFC6A7FFB8BAB0862D88D23CAAE53397",
    To : 'mohammedbelal802@gmail.com',
    From :document.getElementById("mail").value ,
    Subject : "New Contact",
    Body : "Name: " + document.getElementById("name").value + "<br>" + 
    "Email: " + document.getElementById("mail").value + "<br>" + 
    "Project: " + document.getElementById("project")
  }).then(
  message => (document.getElementById("form").firstElementChild.firstElementChild.lastElementChild.textContent=message)
  );
}


