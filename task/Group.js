import {
    v4 as uuidv4
} from 'uuid';




class Group {
    constructor(groupName) {
        this.constactList = []
        this.groupName = groupName
        this.uuid = uuidv4()
    }

    addContact(value) {

        // if(!value instanceof Contact) throw Error ("The object isn't an instance of Contact class")
        //poprawic niedziałającą walidację
        this.constactList.push(value)
    }

    removeContact(value) {
        this.constactList.splice(value)
    }

    changeGroupName(newGroupName) {
        if (typeof newGroupName !== "string" || newGroupName.length === 0) throw Error(`${newGroupName} is not a valid value.`)
        this.groupName = newGroupName
    }

    isInGroup(value) {
        //walidacja

        if (this.constactList.includes(value)) {
            console.log(`${this.groupName} contains searching contact.`);
        } else {
            console.log(`${this.groupName} does not contains searching contact.`);
        }
    }

}

export default Group