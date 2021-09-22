import Contact from "./task/Contact.js";
import Group from "./task/Group.js";
const damian = new Contact("Damian", "Cur", "email", "")
const contactList = new Group("praca")
contactList.addContact(damian)
console.log(contactList)