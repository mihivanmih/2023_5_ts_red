interface ICar {
    id: number
    name: string
    price: number
    yearBuilt: number
}

interface ICarCreate extends Omit<ICar, 'id'>{ } //Omit вырезали id оставили все остальные поля
interface ICarId extends Pick<ICar, 'id'>{ } //Pick оставляем только id
interface IOptionalCar extends Partial<ICar>{ } //Partial делает все свойства не обязательными
interface IRequiredCar extends Required<ICar>{ } //Required делает все свойства обязательными
interface IReadonlyCar extends Readonly<ICar>{ } //Readonly делает все поля доступными только для чтения

type TypeCarRecord = Record<'name' | 'price', string | number>

type TypeGetName = () => string
type Return = ReturnType<TypeGetName>

type Any = Extract<'max' | 'andrey', 'andrey' | 'maisha'> // возвращается совпадение andrey
type Any2 = Exclude<'max' | 'andrey', 'andrey' | 'maisha'> // возвращает только 1

type NotNull = NonNullable<string | number | null | undefined> // удаляет null и undefined

const car: Any = {

}