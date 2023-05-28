interface IUserAge {
    age: number
}

interface IUser extends IUserAge{
    name: string
    email: string
}

type TypePerson = {
    age: number
}

type TypeUser = {
    name: string
    email: string
} & TypePerson

const user: TypeUser = {
    email: 'dasdas',
    name: 'max',
    age: 23
}