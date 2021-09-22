import {
    v4 as uuidv4
} from 'uuid';
import Contact from './Contact';

uuidv4();


class Group {
    constructor() {
        this.constactList = []
        this.group = []
        this.uuid = uuidv4()
    }

    addContact(value) {
        //zbudować logikę pushowania instancji z klasy Contact do tablicy z listą
        if(!value instanceof Contact) throw Error ("The object isn't an instance of Contact class")
        this.constactList.push(value)
    }

}

export default Group