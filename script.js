function change(){
    if(document.documentElement.scrollTop > 350){
        document.getElementById("header").style.backgroundColor="rgb(100, 15, 15)";
    }
    else{
        document.getElementById("header").style.backgroundColor="";
    }
}
function closenotice(){
    document.getElementById("btn").style.display="none"
}


function show() {
    const header = document.getElementById("header");
    const hambox = document.getElementById("hambox");
    
    if (header.style.paddingBottom === "200px") {
        header.style.paddingBottom = "0";
        hambox.style.display = "none";
    } else {
        header.style.paddingBottom = "200px";
        hambox.style.display = "block";
    }
}

function chat(){
    document.getElementById("ai-chat").style.display="block";
}
function hide(){
    document.getElementById("ai-chat").style.display="none";
}