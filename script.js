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

    printAll() {
        for (let i = 0; i < AddressBook.length; i++) {
            console.log(AddressBook[i]);
        }
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
console.log(book);

// book.DeleteAt(new Contact(0));
// console.log(book);


while (true) {
    let answer = prompt("Would you like to add, delete, print, or quit?")
    if (answer === "add") {
        book.add(new Contact());
    }
}