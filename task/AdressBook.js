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

class AddressBook  {
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

    removeContactFromList() {
        
    }

}

export default AddressBook