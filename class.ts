class Car {
    name: string
    price: number

    constructor(name:string, price:number) {
        this.name = name
        this.price = price
    }

    private getInfo():string {
        return `${this.name} - ${this.price}`
    }

    protected getInfoPro():string {
        return `${this.name} - ${this.price}`
    }

    anything() {
        this.getInfo()
    }

}

class Bus extends Car{
    constructor(name:string, price:number) {
        super(name, price)
    }

    test() {
        return this.getInfoPro()
    }
}

new Car('BMW', 100).anything()