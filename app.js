import Contact from "./task/Contact.js";
import Group from "./task/Group.js";
import AddressBook from "./task/AdressBook.js";
const damian = new Contact("Damian", "Cur", "email@asdsa.asd", "")
const natalia = new Contact("Natalia", "Żymełka", "asdasd@asdas.asd")
const friends = new Group("Znajomi")
const familly = new Group("Rodzina")
const adressBook = new AddressBook()
adressBook.addContactToList(damian)
adressBook.addContactToList(natalia)
// adressBook.changeContactData(damian, "email", "losowy@email.com")
friends.addContact(damian)
friends.addContact(natalia)
friends.isInGroup("Damian")

// console.log(adressBook.contactList[0])

// friends.addContact(natalia)
// _adressBook.addContactToList(damian)
// _adressBook.addGroupToList(friends)
// console.log(_adressBook);