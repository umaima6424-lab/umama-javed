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
const text = 'Umama Javed';

let i = 0;
const heading = document.querySelector('.hero h1');

function typeWriter() {
    if (i < text.length) {
        heading.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 80);
    }
}

typeWriter();

const cursor = document.createElement("div");
cursor.classList.add("neon-cursor");
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

document.querySelectorAll("a, button, input, textarea, .fo, .qo, .wow").forEach((element) => {
    element.addEventListener("mouseenter", () => {
        cursor.classList.add("hover");
    });

    element.addEventListener("mouseleave", () => {
        cursor.classList.remove("hover");
    });
});