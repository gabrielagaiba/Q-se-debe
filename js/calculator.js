//This file contains the objects
class Calculator {
    constructor() {
        this.userName = null;
        this.event = null;
        this.spends = [];
    }

    // This method sets the user name
    setUserName(userName){
        this.userName = userName;
    }

    //This method sets the event name
    setEventName(eventName){
        this.event = eventName;
    }
    
    // This method adds an expense
    addSpend(spend) {
        this.spends.push(spend);
    }

    // This method removes an spend in the balance
    removeSpend(index){
        this.spends.splice(index,1);
    }

    // This method iterates over the array to get the total balance
    getBalance(){
        let auxiliar = 0;
        for (let index = 0; index < this.spends.length ; index++) {
            let spend = this.spends[index];
            auxiliar = auxiliar + spend.getCost();
        }
        return auxiliar;
    }

    getSpends(){
        return this.spends;
    }

    getSpendsString(){
        return JSON.stringify(this.spends);
    }

    // This method get the spends length
    getSpendsLength(){
        return this.spends.length;
    }
    
    // This method returns the cost per person
    paymentPerPerson(person) {
        let result = this.getBalance() / person;
        return result;
    }

    // This methor can be orders the price of items upwad or falling
    sortSpends(order){
        if (order == 'UP'){
            this.spends.sort( (firstEl, secondEl) => {
                if (firstEl.getCost() < secondEl.getCost()) {
                    return -1;
                  }
                  if (secondEl.getCost() < firstEl.getCost()) {
                    return 1;
                  }
                  return 0;
            })
        }
        else {
            this.spends.sort( (firstEl, secondEl) => {
                if(firstEl.getCost() > secondEl.getCost()) {
                    return -1;
                }
                if (secondEl.getCost() > firstEl.getCost()) {
                    return 1;
                }
                return 0;
            }) 
        }
    }
}

