type TypeChannelReturm = {
    name: string
}

function getChannel(name: string): TypeChannelReturm {
    return { name }
}

type TypeChannelFunction = (name: string) => TypeChannelReturm

const getChannelName: TypeChannelFunction = (name): TypeChannelReturm => {
    return { name }
}

const getNumbers = (...numbers: number[]) => {
    return numbers
}

function getCar(name:string): string
function getCar(name:string, price: number): string


function getCar(name:string, price?: number): string {
    return price ? `Название ${name}, Цена ${price}` : `Название ${name}`
}

const car1 = getCar('bmv')
const car2 = getCar('bmv', 1000)