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

    changeGroupName(newGroupName) {
        if (typeof newGroupName !== "string" || newGroupName.length === 0) throw Error(`${newGroupName} is not a valid value.`)
        this.groupName = newGroupName
    }

}

export default Group