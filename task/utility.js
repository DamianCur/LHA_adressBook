const stringValidation = (key, value) => {
    // if (typeof key !== "string" || key.length === 0) throw Error("You have to type in what you want to change.")
    // if (typeof value !== "string" || value.length === 0) throw Error("You have to type in value.")

    if (typeof value !== "string" || value.length === 0) throw Error(`${key} is invalid string`)
}

export default stringValidation