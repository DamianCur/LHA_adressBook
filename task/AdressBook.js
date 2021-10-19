import Contact from './Contact.js'

// class AddressBook {
//     constructor() {
//         this.contactList = []
//         this.groupList = []
//     }

//     searchContact(value){

//     }

//     //jak uzyskać dostęp do metod z innych klas?

//     // Ma umożliwiać: szukanie kontaktu po frazie, dodawanie/usuwanie/modyfikacje nowych kontaktów, 
//     // dodawanie/usuwanie/modyfikacje nowych grup




// }

// czy klasa powinna być rozszerzeniem class contact i group aby mieć dostęp do metod?
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
        //walidacja
        this.groupList.push(newGroup)
    }

    removeContactFromList(contactToRemove) {
        if(!contactToRemove instanceof Contact) throw Error ("asdasd")
        
        const contactIndex = this.contactList.findIndex(contact => contact.uuid === contactToRemove.uuid)

        if (contactIndex === -1) throw Error("Given contact doesnt exists")

        this.contactList.splice(contactToRemove)
    }

    removeGroupFromList(value) {
        //walidacja
        this.groupList.splice(value)
    }

    changeContactData(contact, key, value) {
        // sprawdzić czy kontakt istnieje w tablicy

        // index tego kontaktu3
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

// EmailBuilder
// EmailBuilder.addEmail("email").addName("Name").addTitle("abbdaf").send();