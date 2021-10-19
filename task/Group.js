import {
    v4 as uuidv4
} from 'uuid';
import Contact from './Contact.js';

class Group {
    constructor(groupName) {
        // walidacja

        this.constactList = []
        this.groupName = groupName
        this.uuid = uuidv4()
    }

    addContact(value) {
        if(!value instanceof Contact) throw Error ("The object isn't an instance of Contact class")

        //poprawic niedziałającą walidację
        this.constactList.push(value)
    }

    removeContact(value) {
        // czy w ogóle ten contact jest w liscie

        // poszukać index tego kontaktu

        this.constactList.splice(value) // contactIndex, 1
    }

    changeGroupName(newGroupName) {
        if (typeof newGroupName !== "string" || newGroupName.length === 0) throw Error(`${newGroupName} is not a valid value.`)
        this.groupName = newGroupName
    }

    isInGroup(name, surname) {
        //walidacja
        this.constactList.forEach(el => {
            //jak dostać się do wartości obiektu contact żeby porównać wartości value i el
            console.log(el.uuid);
        })
    }

}

export default Group