let DarkLighttoggler = ()=>{
    

let bgdark="2,11,22";
let tdark="248, 249, 250";

let darklight=document.getElementById("darklight");
if(window.localStorage.getItem("bodyst")){
  document.body.className=`${JSON.parse(window.localStorage.getItem("bodyst"))}`;
}
if(document.body.classList.contains("light")){
  darklight.classList.add("bi-moon");
  darklight.classList.remove("bi-brightness-high");

  document.documentElement.style.setProperty("--bs-primary-rgb","253,253,253");
  document.documentElement.style.setProperty("--bs-light-rgb","black");

  document.querySelectorAll(".btn-close").forEach(btn =>{
    btn.classList.remove("btn-close-white");
  })
}else{
  darklight.classList.remove("bi-moon");
  darklight.classList.add("bi-brightness-high");

  
  document.documentElement.style.setProperty("--bs-primary-rgb",bgdark);
  document.documentElement.style.setProperty("--bs-light-rgb",tdark);
  document.querySelectorAll(".btn-close").forEach(btn =>{
    btn.classList.add("btn-close-white");
  })
}


// ////////////////////darkmode&light

darklight.addEventListener("click",function(){
    document.body.classList.toggle("light");
    if(document.body.classList.contains("light")){
      darklight.classList.add("bi-moon");
      darklight.classList.remove("bi-brightness-high");
      
      document.documentElement.style.setProperty("--bs-primary-rgb","253,253,253");
      document.documentElement.style.setProperty("--bs-light-rgb","black");
  
      document.querySelectorAll(".btn-close").forEach(btn =>{
        btn.classList.remove("btn-close-white");
      })
    }else{
      darklight.classList.remove("bi-moon");
      darklight.classList.add("bi-brightness-high");
  
  
      
      document.documentElement.style.setProperty("--bs-primary-rgb",bgdark);
      document.documentElement.style.setProperty("--bs-light-rgb",tdark);
      document.querySelectorAll(".btn-close").forEach(btn =>{
        btn.classList.add("btn-close-white");
      })
    }
    window.localStorage.setItem("bodyst",JSON.stringify(document.body.className));
  })
  
  
  
}


export default DarkLighttoggler;