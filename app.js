import Contact from "./task/Contact.js";
import Group from "./task/Group.js";
const damian = new Contact("Damian", "Cur", "email", "")
const natalia = new Contact("Natalia", "Żymełka", "asdasd@asdas.pl")
const friends = new Group("Znajomi")
const familly = new Group ("Rodzina")
friends.addContact(damian)
familly.addContact(natalia)

friends.isInGroup(natalia)





