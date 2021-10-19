const switchStringValidation = (key, value) => {
    // if (typeof key !== "string" || key.length === 0) throw Error("You have to type in what you want to change.")
    // if (typeof value !== "string" || value.length === 0) throw Error("You have to type in value.")

    if (typeof value !== "string" || value.length === 0) throw Error(`${key} is invalid string`)
}

const stringValidation = (value) => {
    if (typeof value !== "string" || value.length === 0) throw Error('Type in proper value.')
}

const emailValidaiton = (testingEmail) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(re.test(testingEmail) !== true) throw Error('Type in correct email adress')
}

export {switchStringValidation, stringValidation, emailValidaiton}