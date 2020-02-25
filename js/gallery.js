function show(element) {
    document.getElementById("overlayer").style.display = "block";
    document.getElementById("modal").style.display = "block";
    document.getElementById("modal").data = element.firstElementChild.src;
}

function hide(element){
    document.getElementById("modal").style.display = "none";
    element.style.display = "none";
}
