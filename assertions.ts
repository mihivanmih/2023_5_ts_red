const inputElement = document.querySelector('input')
const value1 = (inputElement as HTMLInputElement).value
const value2 = (<HTMLInputElement>inputElement).value


const getLength = (text: string | null) => {
    return text!.length // ! не null и не undefined
}

getLength(null)