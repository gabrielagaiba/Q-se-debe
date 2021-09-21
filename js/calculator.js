/*This file contains the objects*/
class Calculator {
    constructor(userName, event) {
        this.userName = userName;
        this.event = event;
        this.spends = [];
    }
    /*This method returns the user answer*/
    getOperation() {
        let operation = (prompt(this.userName + ' pulsa A para agregar una compra, D para saber cuanto debe cada uno o S para salir.').toUpperCase())
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
    showResume() {
        alert(this.userName + ' La operacion se ha cargado correctamente, llevas gastado $ ' + this.getBalance());
    }
}
