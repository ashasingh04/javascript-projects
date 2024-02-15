// Define your Book class here:
class Book {
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded)
    {
        this.title = title;
        this.author = author;
        this.copyright = copyright;
        this.isbn = isbn;
        this.pages = pages;
        this.timesCheckedOut = timesCheckedOut;
        this.discarded = discarded;
    }
    checkOut(issued = 1)
    {
        this.timesCheckedOut += issued;
    }
}

// Define your Manual and Novel classes here:
class Manual extends Book {
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded)
    {
        super(title, author, copyright, isbn, pages, timesCheckedOut, discarded);
    }
    dispose(currentYear)
    {
        if(currentYear - this.copyright > 5){
            this.discarded = 'Yes';
        }
    }
}


class Novel extends Book {
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded){
        super(title, author, copyright, isbn, pages, timesCheckedOut, discarded);
    }
    dispose(){
        if(this.timesCheckedOut > 100){
            this.discarded = 'Yes';
        }
    }
}
// Declare the objects for exercises 2 and 3 here:

let novel1 = new Novel('Pride and Prejudice', 'Jane Austen', 1813, '1111111111111', 432, 32, 'No');

let manual1 = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, '0000000000000', 1147, 1, 'No');

// Code exercises 4 & 5 here:
//Calling dispose() method of Manual to discard one manual
let currentYear = new Date().getFullYear();
console.log(currentYear);
manual1.dispose(currentYear);

//calling dispose() Method of Novel to update the timesOfCheckedOut
novel1.checkOut(5);
console.log(novel1);
console.log(manual1);