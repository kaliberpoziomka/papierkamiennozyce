
    //FUNKCJA ODPOWIEDZIALNA ZA ROZEGRANIE RUNDY - PORÓWNANIE WYNIKÓW I OZNAJMIENIE WYNIKU POJEDYŃCZEJ RUNDY
    function playRound(playerSelection, computerSelection) {

		function computerPlay() {
		let gameElements = ['rock', 'paper', 'scissors'];
		return gameElements[Math.floor(Math.random()*gameElements.length)];
		}

		computerSelection = computerPlay();
		let result
		
		if (computerSelection == 'rock' && playerSelection == 'scissors') {
			result = 'Przegrałeś, Kamień bije Nożyce!';
			
		} else if (computerSelection == 'paper' && playerSelection == 'rock') {
			result = 'Przegrałeś, Papier bije Kamień!';
			
		} else if (computerSelection == 'scissors' && playerSelection == 'paper') {
			result = 'Przegrałeś, Nożyce biją Papier!';
			
		} else if (computerSelection == playerSelection) {
			result = `Remis!`;
			
		} else if (computerSelection == 'scissors' && playerSelection == 'rock') {
            result = 'Wygrana, Kamień bije Nożyce!';
            
			
		} else if (computerSelection == 'rock' && playerSelection == 'paper') {
            result = 'Wygrana, Papier bije Kamień!';
            
			
		} else if (computerSelection == 'paper' && playerSelection == 'scissors') {
            result = 'Wygrana, Nożyce biją Papier!';
           
			
		} else {
			result = 'To nie jest broń!';	
			
        }
       
        message = document.getElementById('pInfo');
        message.classList.add('pInfo');
        message.textContent = result;
        return result; 

    }       



   
//DZIAŁANIE PRZYCISKÓW I GŁÓWNE ODPALANIE FUNKCJI
        
            let point;

            let paper = document.getElementById('paper');
            paper.addEventListener('click', function() {
                let output = 'paper';
                point = playRound(output);
                game();
            })

            let rock = document.getElementById('rock');
            rock.addEventListener('click', function() {
                let output = 'rock';
                point = playRound(output);
                game();
            })

            let scissors = document.getElementById('scissors');
            scissors.addEventListener('click', function() {
                let output = 'scissors';
                point = playRound(output);
                game();
            })

//ODPALA WSZYSTKIE FUNKCJE PODCZAS KLIKNIĘCIA PRZYCISKU
            function game() {
                score();
                win();
            }
        

//FUNKCJA ODPOWIEDZIALNA ZA ZMIANĘ WYNIKU NA TABLICY WYNIKÓW
        function score() {
            if(point.includes('Wygrana')){
                userPointsNumber = document.getElementById('userPointsNumber');
                userPointsNumber.textContent = userPointsNumber.textContent - (-1);
            } else if (point.includes('Przegrałeś')){
                userPointsNumber = document.getElementById('computerPointsNumber');
                userPointsNumber.textContent = userPointsNumber.textContent - (-1);
            }
        }



//FUNKCJA ODPOWIEDZIALNA ZA ZAKOŃCZENIE GRY - WERDYKT KTO ZOSTAŁ ZWYCIĘZCĄ I RESTART GRY
        function win() {
            userPointsNumber = document.getElementById('userPointsNumber');
            userNumber = userPointsNumber.textContent;

            computerPointsNumber = document.getElementById('computerPointsNumber');
            computerNumber = computerPointsNumber.textContent;

            if(userNumber == 3){
                message = document.getElementById('pInfo');
                message.classList.add('pInfo');
                message.textContent = 'KONIEC GRY - GRATULACJE!';
                userPointsNumber = document.getElementById('userPointsNumber');
                userPointsNumber.textContent = 3;
                setTimeout( (function() {
                    userPointsNumber.textContent = 0;
                    computerPointsNumber.textContent = 0;
                    message.textContent = 'Naciśnij Papier, Kamień lub Nożyce';
                    } ) , 7000);
            } else if(computerNumber == 3) {
                message = document.getElementById('pInfo');
                message.classList.add('pInfo');
                message.textContent = 'KONIEC GRY - PRZEGRAŁEŚ';
                computerPointsNumber = document.getElementById('computerPointsNumber');
                computerPointsNumber.textContent = 3;
                setTimeout( (function() {
                    userPointsNumber.textContent = 0;
                    computerPointsNumber.textContent = 0;
                    message.textContent = 'Naciśnij Papier, Kamień lub Nożyce';
                    } ) , 7000);
            }

            
           
        }

        
        
       

            
        
            
         

         
