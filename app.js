import Contact from "./task/Contact.js";
import Group from "./task/Group.js";

const damian = new Contact("Damian", "Cur", "email", "")
const group = new Group()
damian.changeData("modificateDate")
group.addContact(damian)
console.log(group)
// console.log(damian);