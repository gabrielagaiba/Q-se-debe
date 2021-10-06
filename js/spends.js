
class Spends {
    constructor(item, cost, type) {
        this.item = item;
        this.cost = cost;
        this.type = type;
    }   

    toString(){
        return `Compraste ${this.item}, a $${this.cost} y lo pagaste con ${this.type}.`;
    }

    getCost(){
        return this.cost;
    }
}