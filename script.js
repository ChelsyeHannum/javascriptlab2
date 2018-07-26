"use strict";

class AddressBook {
    constructer() {
        this.contacts = ["Katie", "Ashley", "Chelsye"];
    }

    add(info) {
        this.contacts.push(info)
    }

    deleteAt(index) {
        const removeContacts = () => {
            contacts.splice(contacts.indexOf(index), 1);
            console.log(contacts);
        };
    }

    deleteByName(name) {
        const removeContacts = () => {
            this.contacts.splice(contacts.name), 1);
        console.log(this.contacts);
    };
}

printAll() {
    for (let i = 0; i < AddressBook.length; i++) {
        console.log(AddressBook[i]);
    }
}
update() {
    AddressBook[i];
}

}



class Contact {
    constructor(name, relation, email, phone) {
        this.name = name;
        this.relation = relation;
        this.email = email;
        this.phone = phone;
    }
}
const book = new AddressBook();
book.add(new Contact());
console.log(book);

// book.DeleteAt(new Contact(0));
// console.log(book);


while (true) {
    let answer = prompt("Would you like to add, delete, print, or quit?")
    if (answer === "add") {
        let info = {
            name: prompt("What is your name?"),
            relation: prompt("Relation?"),
            email: prompt("What is your email?"),
            phone: prompt("What is your phone number?"),
        };
        book.add(info);
    } else if (response === "delete") {
        let deleteName = prompt("Would you like to delete by name or index")
        if (deleteName === "name") {
            addressbook.deleteByName(name);
        } else if (deleteName === "index") {
            addressbook.deleteAt(index);
        } else if (response === "print") {
            addressBook.print();
        } else if (response === quit) {
            console.log(Farewell);
            break;
        }

    }
}