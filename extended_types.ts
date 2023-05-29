type TypeIsNumber<T> = T extends number ? 'yes' : 'no'

type Type1 = TypeIsNumber<number>
type Type2 = TypeIsNumber<string>

type TypeBrand = 'bmw' | 'mclaren' | 'mercedes'
type TypePrice = '1000$' | '23000$' | '500$'

type TypeCar = `${TypeBrand} - ${TypePrice}`

const car1: TypeCar = 'bmw - 23000$'