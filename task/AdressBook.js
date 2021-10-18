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

    addContactToList(value) {
        //walidacja
        this.contactList.push(value)
    }

    addGroupToList(value) {
        //walidacja
        this.groupList.push(value)
    }

    removeContactFromList(value) {
        //walidacja
        this.contactList.splice(value)
    }

    removeGroupFromList(value) {
        //walidacja
        this.groupList.splice(value)
    }

}

export default AddressBook