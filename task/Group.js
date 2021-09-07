import {
    v4 as uuidv4
} from 'uuid';
uuidv4();

class Group {
    constructor(group) {
        this.constactList = []
        this.group = [group]
        this.uuid = uuidv4()
    }

}