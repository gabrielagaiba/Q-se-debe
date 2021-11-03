/*Class to create de spends arrays */
class Spends {
    constructor(item, type, cost) {
        this.item = item;
        this.type = type;
        this.cost = cost;
    }   

    toString(){
        return `Compraste ${this.item}, pagaste con ${this.type} a $${this.cost}.`;
    }

    getItem(){
        return this.item;
    }

    getType(){
        return this.type;
    }

    getCost(){
        return this.cost;
    }
}