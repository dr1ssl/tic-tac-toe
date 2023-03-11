import homePage from "./home";
import initialPage from "./initialPage";
import huGame from "./huGame";
import aiGame from "./aigame";
import backToHomePage from "./back";

const initialzeWeb = () => {
    const content = document.querySelector('.content');
    content.appendChild(homePage())

    const huChose = document.getElementById('huChose');
    const aiChose = document.getElementById('aiChose');

    huChose.addEventListener('click',function(){
        content.innerHTML = '';
        content.appendChild(initialPage());
        huGame()
        backToHomePage()
    });
    aiChose.addEventListener('click',function(){
        content.innerHTML = '';
        content.appendChild(initialPage());
        aiGame()
        backToHomePage()
    });
    
    const darkMode = document.querySelector("#dark-mode-btn");
    darkMode.addEventListener("click", function () {
        document.body.classList.toggle("light-mode");
        darkMode.classList.toggle("dark-mode-btn--active");
    
        let currentMode = document.body.getAttribute("class");
        localStorage.setItem("mode", currentMode);
    });
    const bodyClass = localStorage.getItem("mode");
    bodyClass === ''
      ? darkMode.classList.add("dark-mode-btn--active")
      : document.body.classList.add(bodyClass);



    return content;
}


export default initialzeWeb
