
let userName = prompt('¡Hola! Ingresa tu nombre para comenzar a operar.');
alert('Bienvenid@ ' + (userName.toUpperCase()));
let eventName = prompt('¿ ' + userName + ' cuál es el nombre del evento? ');
let calculator = new Calculator(userName, eventName);
let operation = calculator.getOperation();

while (operation != 'S') {
    if (operation == 'A'){  
        let item = prompt('¿' + userName + ' qué compraste?');
        calculator.showItem(item);
        let cost = parseFloat(prompt(userName + ' cuánto costó?'));
        calculator.addBalance(cost);  
        calculator.logBalance();
        calculator.showResume();        
    }
    else if (operation == 'D') {     
        let person = parseInt(prompt('¿' + userName + ' cuantos participantes tiene el ' + eventName + '?'));              
        let balancePerPerson = calculator.paymentPerPerson(person);
        alert(userName + ' La operacion se ha cargado correctamente, cada uno debe abonar $ ' + balancePerPerson);    
    }
    else if (operation == 'ASC' || operation == 'DESC') {
        calculator.sortSpends(operation);
        calculator.logSpends();
    }
    else { 
        alert('Operación invalida');
    }
    operation = calculator.getOperation();
}