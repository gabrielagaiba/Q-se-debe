class Calculator {
    constructor(userName, event) {
        this.userName = userName;
        this.event = event;
        this.userBalance = 0;
    }

    getOperation() {
        let operation = (prompt(this.userName + ' pulsa A para agregar una compra, D para saber cuanto debe cada uno o S para salir.').toUpperCase())
        return operation;
    }

    showItem(purchase) {
        alert('Compraste ' + purchase);
    }

    addBalance(payment) {
        this.userBalance = this.userBalance + payment;
    }

    paymentPerPerson(person) {
        let result = this.userBalance / person;
        return result;
    }

    showUserBalance() {
        alert(this.userName + ' La operacion se ha cargado correctamente, llevas gastado $ ' + this.userBalance);
    }

    logBalance() {
        console.log(' $ ' + this.userBalance);
    }
}

let userName = prompt('¡Hola! Ingresa tu nombre para comenzar a operar.');
alert('Bienvenid@ ' + (userName.toUpperCase()));
let eventName = prompt('¿ ' + userName + ' cuál es el nombre del evento? ');
let calculator = new Calculator(userName, eventName);
let operation = calculator.getOperation();

while (operation != 'S') {
    if (operation == 'A'){  
        let item = prompt('¿ ' + userName + ' qué compraste? ');
        calculator.showItem(item);
        let amount = parseFloat(prompt(userName + ' cuánto costó?.'));
        calculator.addBalance(amount);        
        calculator.logBalance();        
        calculator.showUserBalance();
        //alert(userName + ' La operacion se ha cargado correctamente, llevas gastado $ ' + userBalance);
    }
    else if (operation == 'D') {     
        let person = parseFloat(prompt('¿ ' + userName + ' cuantos participantes tiene el ' + eventName + '?'));              
        balancePerPerson = calculator.paymentPerPerson(person);
        calculator.logBalance(balancePerPerson);
        alert(userName + ' La operacion se ha cargado correctamente, cada uno debe abonar $ ' + balancePerPerson);    
    }
    else { 
        alert('Operación invalida');
    }
    operation = calculator.getOperation();
}

