// Implementando o Dark/Light Theme
const btn = document.getElementById("botao");
const css = document.getElementById("appcss");
const theme = window.localStorage.getItem("theme");

if (theme === "Dark"){
    css.href = "./css/app_dark.css";
    btn.innerHTML = "Light"
}else{
    css.href = "./css/app.css";
}

function changeColorTheme(){
    if(btn.innerHTML === "Dark"){
        btn.innerHTML = "Light";
        window.localStorage.setItem("theme", "Dark");
        css.href = "./css/app_dark.css";

    }else{
        btn.innerHTML = "Dark";
        window.localStorage.setItem("theme", "Light");
        css.href = "./css/app.css";
    } 
}
