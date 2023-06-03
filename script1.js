let body = document.querySelector('.body')
let menu = document.querySelector('.menu')
let main_player = document.querySelector(".main_player")
let location2 = document.querySelector('.kitch')
let stolovka = document.querySelector('.stolovka')
let pe = document.querySelector('.pe')
let math = document.querySelector('.math')
let location3 = document.querySelector('.location3')
let location4 = document.querySelector('.location4')
let row = document.querySelector(".row");

pe.onclick = function(){
    main_player.style.top = "52%";
    main_player.style.left = "65%";


    function changeLocation3(){
        menu.style.display = 'none'
        location3.style.display = 'block'
        body.style.backgroundImage = 'url(pe.jpg)'

        
    }
    setTimeout(changeLocation3, 2000)

    let player1_choise;
    let player2_choise;
    let player1 = true;
    let player2 = false;
    let choise1 = document.querySelector('.choice-player-1')
    let choise2 = document.querySelector('.choice-player-2')
    let text = document.querySelector('.info')
    document.addEventListener('keydown', function(arg) {
        if(player1 == true && player2 == false) {
            if(arg.code == 'KeyA') {
                console.log('я выбрал камень')
                player1_choise = 'камень'  
                player1 = false
                player2 = true
                text.innerHTML = 'физрук может ходить'
            }
                
            else if(arg.code == 'KeyS') {
                console.log('я выбрал ножницы')
                player1_choise = 'ножницы'        
                player1 = false
                player2 = true
                text.innerHTML = 'физрук может ходить'
            }
                
            else if(arg.code == 'KeyD') {
                console.log('я выбрал бумагу')
                player1_choise = 'бумага'
                player1 = false
                player2 = true
                text.innerHTML = 'физрук может ходить'
            }
        }
        if(player1 == false && player2 == true) {
                
            if(arg.code == 'KeyJ') {
                console.log('физрук выбрал камень')
                player2_choise = 'камень'
                
                player2 = false
                text.innerHTML = 'я могу ходить'
                setTimeout(finish, 1000);
                setTimeout(showItems, 1000);
            }
                
            else if(arg.code == 'KeyK') {
                console.log('физрук выбрал ножницы')
                player2_choise = 'ножницы'
                
                player2 = false
                text.innerHTML = 'я могу ходить'
                setTimeout(finish, 1000);
                setTimeout(showItems, 1000);
            }
                
            else if(arg.code == 'KeyL') {
                console.log('физрук выбрал бумагу')
                player2_choise = 'бумага'
                
                player2 = false
                text.innerHTML = 'я могу ходить'
                setTimeout(finish, 1000);
                setTimeout(showItems, 1000);
            }
        }
    })   
    function showItems() {
        if(player1_choise == 'камень'){
            choise1.style.background = 'url(rock.png)'
            choise1.style.backgroundSize = '100% 100%'
        }
        else if(player1_choise == 'ножницы'){
            choise1.style.background = 'url(cut.png)'
            choise1.style.backgroundSize = '100% 100%'
        }
        else if(player1_choise == 'бумага'){
            choise1.style.background = 'url(bum.png)'
            choise1.style.backgroundSize = '100% 100%'
        }
        if(player2_choise == 'камень'){
            choise2.style.background = 'url(rock.png)'
            choise2.style.backgroundSize = '100% 100%'
        }
        else if(player2_choise == 'ножницы'){
            choise2.style.background = 'url(cut.png)'
            choise2.style.backgroundSize = '100% 100%'
        }
        else if(player2_choise == 'бумага'){
            choise2.style.background = 'url(bum.png)'
            choise2.style.backgroundSize = '100% 100%'
        }
    }     

    function finish() {
        if (player1_choise == player2_choise) {
            alert('ничья')
        }
        else if(player1_choise == 'камень' && player2_choise == 'ножницы') {
            alert('я победил')
            body.style.backgroundImage = 'url(menu.jpg)'
            menu.style.display = 'block'
            location3.style.display = 'none'
            main_player.style.display = 'block'
        }
        else if (player1_choise == 'ножницы' && player2_choise == 'бумага') {
            alert('я выиграл')
            body.style.backgroundImage = 'url(menu.jpg)'
            menu.style.display = 'block'
            location2.style.display = 'none'
            main_player.style.display = 'block'
        }
        else if (player1_choise == 'бумага' && player2_choise == 'камень') {
            alert('я выиграл')
            body.style.backgroundImage = 'url(menu.jpg)'
            menu.style.display = 'block'
            location2.style.display = 'none'
            main_player.style.display = 'block'
        }
        else {
            alert('физрук выиграл')
            body.style.backgroundImage = 'url(menu.jpg)'
            menu.style.display = 'block'
            location2.style.display = 'none'
            main_player.style.display = 'block'
        }
    }  
}


stolovka.onclick = function(){
    main_player.style.top = "69%";
    main_player.style.left = "43%";


    function changeLocation2(){
        menu.style.display = 'none'
        location2.style.display = 'block'
        body.style.backgroundImage = 'url(stol.jpg)'
        main_player.style.display = 'none'



        
    }
    setTimeout(changeLocation2, 2000)
    

        
    
    let ground = document.querySelector('.ground')
    let topRandom = [0]
    let och = document.querySelector('.och');
    let score = 0
    let topS = 0
    let images = ['pizza.png', 'egg.png', 'bor.png']
    let stol = document.querySelector('.stol')

    for(i=0; i<10; i=i+1) {

        let sphere = document.createElement('div')
        document.body.appendChild(sphere);
        sphere.classList.add('sphere');
        let index = Math.round(Math.random()*2)
        sphere.style.backgroundImage = 'url(' + images[index] + ')';

        
        
        let randomX = Math.round(Math.random()*1200)
        sphere.style.left = randomX + 'px'
        
        sphere.style.backgroundSize = '100% 100%'

        sphere.onclick = function() {
            score = score + 15;
            och.innerHTML = score
            sphere.style.display = 'none'
            if (score>=60) {
                alert('Ты победил!')
                body.style.backgroundImage = 'url(menu.jpg)'
                menu.style.display = 'block'
                location2.style.display = 'none'
                main_player.style.display = 'block'
            }
        }


    }   
    let sphere = document.querySelectorAll('.sphere')
        let sphereID = 0
        let changeTop = function() {
            topS = topS + 150
            sphere[sphereID].style.top = topS + 'px'
            
            if(topS>=1200) {
                topS = 0
                sphere[sphereID].style.display = 'none'
                sphereID = sphereID + 1
                
            }
        }

    setTimeout(changeTop, 2000)
    let int = setInterval(changeTop, 500)
    let stop = function() {
        clearInterval(int)
        

    }
}



