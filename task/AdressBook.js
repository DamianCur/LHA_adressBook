import Contact from './Contact.js'
import Group from './Group.js'

class AddressBook {
    constructor() {
        this.contactList = []
        this.groupList = []
    }

    addContactToList(newContact) {
        if (!newContact instanceof Contact) throw Error("New contact isn't a valid contact.")

        const contactIndex = this.contactList.findIndex(contact => contact.uuid === newContact.uuid)

        if (contactIndex !== -1) throw Error("Contact already exists")

        this.contactList.push(newContact)
    }
    addGroupToList(newGroup) {
        if (!newGroup instanceof Group) throw Error("This group is not valid.")
        this.groupList.push(newGroup)
    }

    removeContactFromList(contactToRemove) {
        if (!contactToRemove instanceof Contact) throw Error("This contact is not valid.")

        const contactIndex = this.contactList.findIndex(contact => contact.uuid === contactToRemove.uuid)
        if (contactIndex === -1) throw Error("Given contact doesnt exists")

        this.contactList.splice(contactToRemove)
    }

    removeGroupFromList(groupToRemove) {
        if(!groupToRemove instanceof Group) throw Error ("This group doesn't exists.")
        this.groupList.splice(value)
    }

    changeContactData(contact, key, value) {
        if(!this.contactList.includes(contact)) throw Error ("Contact not find.")

        const index = this.contactList.findIndex((el) => el.uuid === contact.uuid)

        this.contactList[index].changeData(key, value);
    }

    findContacts() {
        // filter
        this.contactList.forEach(el => {
            el.findPhrase();
        })

        // return result;
    }
}

export default AddressBook