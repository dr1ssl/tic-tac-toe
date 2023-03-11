const initialPage = () => {

    const game = document.createElement('div');
    game.classList.add('game');   

    const back = document.createElement('button');
    back.classList.add('back');
    back.classList.add('button-classic');
    back.innerText = 'BACK';
    document.body.appendChild(back);

    const resultModule = document.createElement('div');
    resultModule.classList.add('result-module');
    const result = document.createElement("div");
    result.classList.add('result');
    resultModule.appendChild(result);
    
    content.appendChild(resultModule);

    const reset = document.createElement('button');
    reset.classList.add('reset');
    reset.classList.add('button-classic')
    reset.innerText = 'RESET';
    content.appendChild(reset);

    for(let i = 0; i < 9; i++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.setAttribute('data-id', i);
        game.appendChild(cell);
    }

    return game;
}

export default initialPage
