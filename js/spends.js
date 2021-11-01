
class Spends {
    constructor(item, type, cost) {
        this.item = item;        
        this.type = type;
        this.cost = cost;
    }   

    toString(){
        return `Compraste ${this.item}, pagaste con ${this.type} a $${this.cost}.`;
    }

    getCost(){
        return this.cost;
    }
}