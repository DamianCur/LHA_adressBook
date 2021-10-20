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
friends.addContact(damian)
friends.addContact(natalia)
adressBook.findContacts(natalia)