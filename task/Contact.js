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

        this.name = value
        this.modificateDate = new Date().toLocaleDateString()
    }

    changeSurename(value) {
        this.surname = value
        this.modificateDate = new Date().toLocaleDateString()
    }

    changeEmail(value) {
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
                // case "modificateDate":
                //     //walidacja
                //     this.modificateDate = new Date().toLocaleDateString()
            default:
                throw Error("Choose data to change.")

        }
    }
}




export default Contact