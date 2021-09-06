const stringValidation = () => {
    if (typeof key !== "string" || key.length === 0) throw Error("You hve to type in what you want to change.")
    if (typeof value !== "string" || value.length === 0) throw Error("You have to type in value.")
}