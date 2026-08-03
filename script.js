console.log("javascript connected");
window.addEventListener("scroll",
    function(){
    let scrollTop=
    document.documentElement.scrollTop
    ;
    let scrollHeight=
    document.documentElement.scrollHeight-
    document.documentElement.clientHeight;
       let percentage=(scrollTop/
        scrollHeight)*100;
          console.log(percentage);
    document.getElementById("progress"
    ).style.width=percentage+"%";
});
const text="I'm Umama,Front-end Developer";
let i=0;
function typeWriter(){
    if(i<text.length){
        document.querySelector('.hero h1').innerHTML+=text.charAt(i);
        i++;
        setTimeout(typeWriter,100)
    }
}
typeWriter();