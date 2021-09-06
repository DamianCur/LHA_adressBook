import {
    v4 as uuidv4
} from 'uuid';
uuidv4();

//--------------------------------------UTILITY--------------------------------------------

const stringValidation = (key, value) => {
    if (typeof key !== "string" || key.length === 0) throw Error("You have to type in what you want to change.")
    if (typeof value !== "string" || value.length === 0) throw Error("You have to type in value.")
}

// import stringValidation from "../example.js"



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
                if (typeof key !== "string" || key.length === 0) throw Error("You hve to type in what you want to change.")
                if (typeof value !== "string" || value.length === 0) throw Error("You have to type in value.")
                // stringValidation()
                //jak poprawnie uzyc walidacji korzystajac z funkcji zewnetrznej
                this.name = value
                break;
            case "surname":
                stringValidation()
                this.surname = value
                break;
            case "email":
                stringValidation()
                this.email = value
                break;
            case "modificateDate":
                //walidacja
                this.modificateDate = new Date().toLocaleDateString()

        }
    }
}

const damian = new Contact("Damian", "Cur", "email", "")
damian.changeData("name", "asdfg")
console.log(damian);