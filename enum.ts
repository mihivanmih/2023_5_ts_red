enum EnumRolers {
    ADMIN = 0,
    GUEST = 1,
    USER = 2
}

interface IUser {
    role: EnumRolers
    color?: EnumColors
}

const user: IUser = {
    role: EnumRolers.ADMIN
}

const enum EnumColors {
    black, pink, green
}

const color: IUser = {
    role: EnumRolers.ADMIN,
    color: EnumColors.green
}

console.log(EnumRolers[EnumRolers.ADMIN])