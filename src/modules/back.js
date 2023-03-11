import initialzeWeb from "./webpage";

const backToHomePage = () => {
    const content = document.querySelector('.content');
    const back = document.querySelector('.back');
    back.addEventListener('click', function(e){
        content.innerHTML = ''
        document.body.removeChild(e.target)
        initialzeWeb()
    })

}

export default backToHomePage