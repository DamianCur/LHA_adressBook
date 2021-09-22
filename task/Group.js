import {
    v4 as uuidv4
} from 'uuid';

import Contact from "./Contact.js"



class Group {
    constructor(groupName) {
        this.constactList = []
        this.group = groupName
        this.uuid = uuidv4()
    }

    addContact(value) {
       
        // if(!value instanceof Contact) throw Error ("The object isn't an instance of Contact class")
        //poprawic niedziałającą walidację
        this.constactList.push(value)
    }

}

export default Group