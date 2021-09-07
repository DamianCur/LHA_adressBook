import {
    v4 as uuidv4
} from 'uuid';

uuidv4();


class Group {
    constructor() {
        this.constactList = []
        this.group = []
        this.uuid = uuidv4()
    }

    addContact() {
        //zbudować logikę pushowania instancji z klasy Contact do tablicy z listą
    }

}

export default Group