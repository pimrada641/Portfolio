window.onload = pageLoad;

function pageLoad(){
	document.getElementById("cinnamon").onclick = cinnamon;
    document.getElementById("blog").onclick = blog;
    document.getElementById("register").onclick = register;
    document.getElementById("square").onclick = square;
    document.getElementById("project").onclick = project;
}

function cinnamon(){
    window.open("assignment4/recipe.html")
}
function blog(){
    window.open("assignment5/index.html")
}
function register(){
    window.open("assignment6/register.html")
}
function square(){
    window.open("assignment7/index.html")
}
function project(){
    window.open("project.html")
}