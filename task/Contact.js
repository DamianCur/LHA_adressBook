import {
    v4 as uuidv4
} from 'uuid';
uuidv4();

import stringValidation from './utility.js';


class Contact {
    constructor(name, surname, email) {
        this.name = name
        this.surname = surname
        this.email = email
        this.modificateDate = new Date().toLocaleDateString()
        this.createdDate = new Date().toLocaleDateString()
        this.uuid = uuidv4()
    }

    changeName(value) {
        if (typeof value !== "string" || value.length === 0) throw Error("You have to type in value.")
        this.name = value
        this.modificateDate = new Date().toLocaleDateString()
    }

    changeSurename(value) {
        if (typeof value !== "string" || value.length === 0) throw Error("You have to type in value.")
        this.surname = value
        this.modificateDate = new Date().toLocaleDateString()
    }

    changeEmail(value) {
        if (typeof value !== "string" || value.length === 0) throw Error("You have to type in value.")
        this.email = value
        this.modificateDate = new Date().toLocaleDateString()
    }

    changeData(key, value) {
        switch (key) {
            case "name":
                stringValidation(key, value)
                this.changeName(value)
                break;
            case "surname":
                stringValidation(key, value)
                this.changeSurename(value)
                break;
            case "email":
                stringValidation(key, value)
                this.changeEmail(value)
                break;
            case "modificateDate":
                //walidacja??
                this.modificateDate = new Date().toLocaleDateString()
                break;
            default:
                throw Error("Choose data to change.")

        }
    }

    findContact(value) {
        const fullName = `${this.name} ${this.surname}`
        if(value.toUpperCase() !== fullName.toUpperCase()) {
            throw Error (`There is no contact ${value}`)
        } else {
            console.log(this)
        }        
    }
}




export default Contact