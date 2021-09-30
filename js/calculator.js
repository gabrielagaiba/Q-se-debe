/*This file contains the objects*/
class Calculator {
    constructor() {
        this.userName = null;
        this.event = null;
        this.spends = [];
    }

    setUserName(userName){
        this.userName = userName;
    }

    setEventName(eventName){
        this.event = eventName;
    }

    /*This method returns the user answer*/
    getOperation() {
        let operation = (prompt(this.userName + ' pulsa A para agregar una compra, D para saber cuanto debe cada uno o S para salir. También puedes ordenar las compras según su precio de forma ascendente con ASC o descendente con DESC.').toUpperCase())
        return operation;
    }

    /*This method alerts what the user bought*/
    showItem(purchase) {
        alert('Compraste ' + purchase);
    }
    
    /*This method adds an expense*/
    addBalance(payment) {
        this.spends.push(payment);
    }

    getSpendsString(){
        return JSON.stringify(this.spends);
    }
    
    /*This method iterates over the array to get the total balance*/
    getBalance(){
        let auxiliar = 0;
        let index = 0;       
        for (index = 0; index < this.spends.length ; index++) {
            auxiliar = auxiliar + this.spends[index];
        }
        return auxiliar;
    }

    /*This method returns the cost per person*/
    paymentPerPerson(person) {
        let result = this.getBalance() / person;
        return result;
    }
    
    /*This method displays on console how much has been spent*/
    logBalance() {
        console.log(this.getBalance());
    }

    getBalanceString(){
        return JSON.stringify(this.getBalance());
    }

    /*This method show the resumes of balance*/
    showResume() {
        alert(this.userName + ' La operacion se ha cargado correctamente, llevas gastado $ ' + this.getBalance());
    }

    /*This methor can be orders the price of items upwad or falling*/
    sortSpends(order){
        if (order == 'ASC'){
            this.spends.sort( (firstEl, secondEl) => {
                if (firstEl < secondEl) {
                    return -1;
                  }
                  if (secondEl < firstEl) {
                    return 1;
                  }
                  return 0;
            })
        }
        else {
            this.spends.sort( (firstEl, secondEl) => {
                if(firstEl > secondEl) {
                    return -1;
                }
                if (secondEl > firstEl) {
                    return 1;
                }
                return 0;
            }) 
        }
    }

    /*This method displays on console the price in order as desired by the user*/
    logSpends () {
        console.log(this.spends);
    }
}

