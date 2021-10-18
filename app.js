import Contact from "./task/Contact.js";
import Group from "./task/Group.js";
import AddressBook from "./task/AdressBook.js";
const damian = new Contact("Damian", "Cur", "email", "")
const natalia = new Contact("Natalia", "Żymełka", "asdasd@asdas.pl")
const friends = new Group("Znajomi")
const familly = new Group ("Rodzina")
const _adressBook = new AddressBook()
friends.addContact(natalia)
_adressBook.addContactToList(damian)
_adressBook.addGroupToList(friends)
console.log(_adressBook);






