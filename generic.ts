function f<T>(args: T):T {
    return args
}

const f2 = <T>(args: T):T => {
    return args
}

f2<number>(1)
f<string>("1")

class Channel<T> {
    private name: T

    constructor(name: T) {
        this.name = name
    }

    getName():T {
        return this.name
    }
}

new Channel<string>('red')
new Channel<number>(1)

interface IPair<K, V> {
    key: K
    value: V
}

const pair1:IPair<string, number> = {
    key: '1',
    value: 1
}

const pair2:IPair<string, string> = {
    key: '1',
    value: '1'
}

type TypeLength = {
    length: number
}

function getNameLength<T extends TypeLength>(entity: T): number {
    return entity.length
}

getNameLength('wewewr')
getNameLength([0,1,2,3])