import hu from '../img/hu.jpg';
import ai from '../img/ai.png';
import sun from '../img/sun.svg';
import moon from '../img/moon.svg';

function createChoseGame(choseGame, gametext, typeChose, typeImg){
    const column = document.createElement('div');
    column.classList.add('game-column');
    choseGame.appendChild(column);
    const item = document.createElement('div');
    item.classList.add('game-item');
    column.appendChild(item);
    const img = new Image();
    img.src = typeImg;
    img.alt = 'img';
    const text = document.createElement('p');
    text.innerText = gametext;
    const button = document.createElement('button');
    button.classList.add('button-classic');
    button.setAttribute('id', typeChose);
    button.innerText = 'PLAY';
    item.appendChild(img);
    item.appendChild(text);
    item.appendChild(button);

}

const homePage = () => {
    const choseGame = document.createElement('div');
    choseGame.classList.add('chose-game');
    choseGame.classList.add('__container');

    const darkMode = document.createElement('button');
    darkMode.classList.add('dark-mode-btn');
    darkMode.setAttribute('id', 'dark-mode-btn');
    
    const sunImg = new Image();
    sunImg.src = sun;
    sunImg.classList.add('dark-mode-btn__icon');
    darkMode.appendChild(sunImg);

    const moonImg = new Image();
    moonImg.src = moon;
    moonImg.classList.add('dark-mode-btn__icon');
    darkMode.appendChild(moonImg);

    choseGame.appendChild(darkMode);

    createChoseGame(choseGame, 'PLAY WITH HUMAN', 'huChose', hu);
    createChoseGame(choseGame, 'PLAY WITH AI', 'aiChose', ai);

    return choseGame;
}

export default homePage;