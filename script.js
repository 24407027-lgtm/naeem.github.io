// Dark & Light Mode

const darkBtn = document.getElementById("darkMode");

darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){

        darkBtn.innerHTML="☀️";

    }else{

        darkBtn.innerHTML="🌙";

    }

});


// Navbar Active Link

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


// Typing Effect

const titles=[
"Future News Presenter",
"Journalist",
"Content Creator",
"Video Editor"
];

let index=0;

const text=document.querySelector(".hero h2");

setInterval(()=>{

index++;

if(index>=titles.length){

index=0;

}

text.innerHTML=titles[index];

},2500);


// Scroll Animation

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

});

document.querySelectorAll("section").forEach(sec=>{

sec.style.opacity="0";

sec.style.transform="translateY(50px)";

sec.style.transition=".8s";

observer.observe(sec);

});
