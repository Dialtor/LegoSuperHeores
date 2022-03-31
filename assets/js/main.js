const modal = document.querySelector('.modal')
const buttons = document.querySelectorAll('#button');
buttons.forEach((button)=>{
    button.addEventListener('click', ()=>{
    modal.classList.toggle('visible');
    modal.classList.remove('hidden');
})
})


const InfoSpider =  () => {
   
    const spiderman = document.getElementsByClassName('spiderman');
    console.log(spiderman)

    const modal = document.getElementById('modal-info');
    modal.innerHTML = `
            <div class="modal-content">
                <img class="modal-close" src="./assets/img/macos-close.png" alt="">
                <div class="modal__content--slider">
                    <input type="radio" name="slider-1" id="radio-1">
                    <input type="radio" name="slider-1" id="radio-2" checked>
                    <input type="radio" name="slider-1" id="radio-3">
                    <div class="cards">
                        <label for="radio-1" id="card-1" class="card">
                            <img src="./assets/img/spiderman-card1.png" alt="">
                        </label>
                        <label for="radio-2" id="card-2" class="card">
                            <img src="./assets/img/spiderman-card2.png" alt="">
                        </label>
                        <label for="radio-3" id="card-3" class="card">
                            <img src="./assets/img/spiderman.png" alt="">
                        </label>
                    </div>
                    <div class="modal-button">
                        <button>¡Lo Quiero!</button>
                    </div>
                </div>
            </div>
    `
    const closeButton = document.querySelector('.modal-close')
    closeButton.addEventListener('click', () => {
        // console.log('hey')
        // modal.classList.toggle('hidden');
        modal.classList.remove('visible');
        modal.classList.toggle('hidden');
    })
}

const InfoRobin = () => {
    const robin = document.getElementsByClassName('robin');
    console.log(robin)
    const modal = document.getElementById('modal-info');
    modal.innerHTML = `
            <div class="modal-content">
                <img class="modal-close" src="./assets/img/macos-close.png" alt="">
                <div class="modal__content--slider">
                    <input type="radio" name="slider-1" id="radio-1">
                    <input type="radio" name="slider-1" id="radio-2" checked>
                    <input type="radio" name="slider-1" id="radio-3">
                    <div class="cards">
                        <label for="radio-1" id="card-1" class="card">
                            <img src="./assets/img/robin-card2.webp" alt="">
                        </label>
                        <label for="radio-2" id="card-2" class="card">
                            <img src="./assets/img/robin-card1.png" alt="">
                        </label>
                        <label for="radio-3" id="card-3" class="card">
                            <img src="./assets/img/robin-card3.png" alt="">
                        </label>
                    </div>
                    <div class="modal-button">
                        <button>¡Lo Quiero!</button>
                    </div>
                </div>
            </div>
    `
    const closeButton = document.querySelector('.modal-close')
    closeButton.addEventListener('click', () => {
        // console.log('hey')
        // modal.classList.toggle('hidden');
        modal.classList.remove('visible');
        modal.classList.toggle('hidden');
    })
}

const InfoBatman = () => {
    const batman = document.getElementsByClassName('batman');
    console.log(batman)

    const robin = document.getElementsByClassName('robin');
    console.log(robin)
    const modal = document.getElementById('modal-info');
    modal.innerHTML = `
            <div class="modal-content">
                <img class="modal-close" src="./assets/img/macos-close.png" alt="">
                <div class="modal__content--slider">
                    <input type="radio" name="slider-1" id="radio-1">
                    <input type="radio" name="slider-1" id="radio-2" checked>
                    <input type="radio" name="slider-1" id="radio-3">
                    <div class="cards">
                        <label for="radio-1" id="card-1" class="card">
                            <img src="./assets/img/batman-card1.png" alt="">
                        </label>
                        <label for="radio-2" id="card-2" class="card">
                            <img src="./assets/img/batman-card2.png" alt="">
                        </label>
                        <label for="radio-3" id="card-3" class="card">
                            <img src="./assets/img/batman-card3.png" alt="">
                        </label>
                    </div>
                    <div class="modal-button">
                        <button>¡Lo Quiero!</button>
                    </div>
                </div>
            </div>
    `
    const closeButton = document.querySelector('.modal-close')
    closeButton.addEventListener('click', () => {
        // console.log('hey')
        // modal.classList.toggle('hidden');
        modal.classList.remove('visible');
        modal.classList.toggle('hidden');
    })
}


    const menu = document.getElementById('menu');
    const imgburguer = document.getElementById('menuburguer')

    imgburguer.addEventListener('click', () => {
        menu.classList.toggle('visible-menu');
    })



