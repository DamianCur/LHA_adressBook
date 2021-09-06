

class Contact {
    constructor(name, surname, email, modificationDate, createdDate, uuid) {
        this.name = name
        this.surname = surname
        this.email = email
        this.modificationDate = modificationDate
        this.createdDate = createdDate
        this.uuid = uuid()
    }
}