
class Spends {
    constructor(item, cost, type) {
        this.item = item;
        this.cost = cost;
        this.type = type;
    }   

    toString(){
        return `Compraste ${this.item}, pagaste con ${this.type} a $${this.cost}.`;
    }

    getCost(){
        return this.cost;
    }
}