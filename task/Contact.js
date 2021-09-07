import {
    v4 as uuidv4
} from 'uuid';
uuidv4();

import stringValidation from './utility.js';


class Contact {
    constructor(name, surname, email, modificateDate) {
        this.name = name
        this.surname = surname
        this.email = email
        this.modificateDate = modificateDate
        this.createdDate = new Date().toLocaleDateString()
        this.uuid = uuidv4()
    }



    changeData(key, value) {
        switch (key) {
            case "name":
                stringValidation(key, value)
                this.name = value
                break;
            case "surname":
                stringValidation(key, value)
                this.surname = value
                break;
            case "email":
                stringValidation(key, value)
                this.email = value
                break;
            case "modificateDate":
                //walidacja
                this.modificateDate = new Date().toLocaleDateString()

        }
    }
}




export default Contact