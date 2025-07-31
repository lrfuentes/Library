const myLibrary = [];

function Book(name, author, current_price, summary, publish_Date=null, publisher=null, ISBN=null, pages) {
    this.name = name;
    this.author = author;
    this.current_price = current_price;
    this.summary = summary;
    this.publish_date = publish_date;
    this.publisher = publisher;
    this.ISBN = ISBN;
    this.pages = pages;
    this.has_been_read = false;
    this.uuid = self.crypto.randomUUID();
}

function addBookToLibrary(name, author, current_price, summary, publish_Date=null, publisher=null, ISBN=null, pages) {
  // take params, create a book then store it in the array
}

function getBooksFromLibrary(book_uuid = null) {
  // take params, create a book then store it in the array
}

/**
 * Initial Load
 */
const initial_list_books = [
    {   
        name: "A Court of Thorns and Roses",
        author: "Sarah J. Maas",
        current_price: 19.00,
        summary: "When nineteen-year-old huntress Feyre kills a wolf in the woods, a terrifying creature arrives to demand retribution. Dragged to a treacherous magical land she knows about...",
        publish_date: "June 2nd, 2020",
        publisher: "Bloomsbury Publishing",
        ISBN: 9781635575569,
        pages: 448,
        has_been_read: false,
        uuid: self.crypto.randomUUID()
    },
    {
        name: "Everything I Know About Love: A Memoir",
        author: "Dolly Alderton",
        current_price: 18.99,
        summary: "Like Bridget Jones' Diary but all true— a wildly funny, occasionally heartbreaking memoir from the funny, sharp British journalist and podcast host, who Elizabeth Gilbert calls 'a sparkling Roman candle of talent.'",
        publish_date: "February 9th, 2021",
        publisher: "Harper Perennial",
        ISBN: 9780062968791,
        pages: 368,
        has_been_read: false,
        uuid: self.crypto.randomUUID()
    },
    {
        name: "Funny Story",
        author: "Emily Henry",
        current_price: 29.00,
        summary: "#1 NEW YORK TIMES BESTSELLER ∙ A shimmering, joyful novel about a pair of opposites with the wrong thing in common, from #1 New York Times bestselling author Emily Henry.",
        publish_date: "April 23rd, 2024",
        publisher: "Berkley",
        ISBN: 9780593441282,
        pages: 400,
        has_been_read: false,
        uuid: self.crypto.randomUUID()
    },
    {
        name: "The Heaven & Earth Grocery Store: A Novel",
        author: "James McBride",
        current_price: 28.00,
        summary: "THE RUNAWAY NEW YORK TIMES BESTSELLER. A NEW YORK TIMES NOTABLE BOOK. A NEW YORK TIMES READERS PICK: 100 BEST BOOKS OF THE 21ST CENTURY. WINNER OF THE 2024 LIBRARY OF CONGRESS PRIZE FOR AMERICAN FICTION",
        publish_date: "August 8th, 2023",
        publisher: "Riverhead Books",
        ISBN: 9780593422946,
        pages: 400,
        has_been_read: false,
        uuid: self.crypto.randomUUID()
    },
    {
        name: "Crying in H Mart: A Memoir",
        author: "Michelle Zauner",
        current_price: 17.00,
        summary: "From the indie rock sensation known as Japanese Breakfast, an unforgettable memoir about family, food, grief, love, and growing up Korean American—'in losing her mother and cooking to bring her back to life, Zauner became herself'",
        publish_date: "March 28th, 2023",
        publisher: "Vintage",
        ISBN: 9781984898951,
        pages: 256,
        has_been_read: false,
        uuid: self.crypto.randomUUID()
    },
    {
        name: "James (Pulitzer Prize Winner): A Novel",
        author: "Percival Everett",
        current_price: 28.00,
        summary: "A brilliant, action-packed reimagining of Adventures of Huckleberry Finn, both harrowing and darkly humorous, told from the enslaved Jim's point of view",
        publish_date: "March 19th, 2024",
        publisher: "Doubleday",
        ISBN: 9780385550369,
        pages: 320,
        has_been_read: false,
        uuid: self.crypto.randomUUID()
    },
    {
        name: "The Midnight Library: A GMA Book Club Pick: A Novel",
        author: "Matt Haig",
        current_price: 18.00,
        summary: "The #1 New York Times bestselling WORLDWIDE phenomenon. Winner of the Goodreads Choice Award for Fiction.  A Good Morning America Book Club Pick.  Independent (London) Ten Best Books of the Year. 'A feel-good book guaranteed to lift your spirits.'—The Washington Post",
        publish_date:  "May 9th, 2023",
        publisher: "Penguin Books",
        ISBN: 9780525559498,
        pages: 304,
        has_been_read: false,
        uuid: self.crypto.randomUUID()
    },
    {
        name: "North Woods: A Novel",
        author: "Daniel Mason",
        current_price: 18.00,
        summary: "A WASHINGTON POST TOP TEN BOOK OF THE YEAR. FINALIST FOR THE NATIONAL BOOK CRITICS CIRCLE AWARD AND THE MARK TWAIN AMERICAN VOICE IN LITERATURE AWARD. A sweeping novel about a single house in the woods of New England, told...",
        publish_date: "October 1st, 2024",
        publisher: "Random House Trade Paperbacks",
        ISBN: 9780593597040,
        pages: 400,
        has_been_read: false,
        uuid: self.crypto.randomUUID()
    },
    {
        name: "A Little Life",
        author: "Hanya Yanagihara",
        current_price: 18.00,
        summary: "A stunning 'portrait of the enduring grace of friendship' (NPR) about the families we are born into, and those that we make for ourselves. A masterful depiction of love in the twenty-first century.",
        publish_date: "January 26th, 2016",
        publisher: "Vintage",
        ISBN: 9780804172707,
        pages: 832,
        has_been_read: false,
        uuid: self.crypto.randomUUID()
    },
    {
        name: "The Seven Husbands of Evelyn Hugo: A Novel",
        author: "Taylor Jenkins Reid",
        current_price: 17.00,
        summary: "'If you're looking for a book to take on holiday this summer, The Seven Husbands of Evelyn Hugo has got all the glitz and glamour to make it a perfect beach read.' —Bustle",
        publish_date: "May 29th, 2018",
        publisher: "Atria Books",
        ISBN: 9781501161933,
        pages: 400,
        has_been_read: false,
        uuid: self.crypto.randomUUID()
    },
    {
        name: "This Is How You Lose the Time War",
        author: "Amal El-Mohtar, Max Gladstone",
        current_price: 17.99,
        summary: "'[An] exquisitely crafted tale...Part epistolary romance, part mind-blowing science fiction adventure, this dazzling story unfolds bit by bit, revealing layers of meaning as it plays with cause and effect, wildly...",
        publish_date:  "March 17th, 2020",
        publisher: "S&S/Saga Press",
        ISBN: 9781534430990,
        pages: 224,
        has_been_read: false,
        uuid: self.crypto.randomUUID()
    },
    {
        name: "Happy Place",
        author: "Emily Henry",
        current_price: 19.00,
        summary: "A couple who broke up months ago pretend to still be together for their annual weeklong vacation with their best friends in this glittering and wise novel from #1 New York Times bestselling author Emily Henry.",
        publish_date: "March 5th, 2024",
        publisher: "Berkley",
        ISBN: 9780593441190,
        pages: 416,
        has_been_read: false,
        uuid: self.crypto.randomUUID()
    },
    {
        name: "Dune",
        author: "Frank Herbert",
        current_price: 18.00,
        summary: "Set on the desert planet Arrakis, Dune is the story of Paul Atreides—who would become known as Muad'Dib—and of a great family's ambition to bring to fruition humankind's...",
        publish_date: "August 2nd, 2005",
        publisher: "Ace",
        ISBN: 9780441013593,
        pages: 704,
        has_been_read: false,
        uuid: self.crypto.randomUUID()
    },
    {
        name: "Make Way for Ducklings",
        author: "Robert McCloskey",
        current_price: 20.99,
        summary: "The timeless and brilliantly illustrated classic that teaches the importance of kindness, perseverance, and familial love. Let the Mallard family waddle right off the page and into your child's heart!",
        publish_date: "January 1st, 1941",
        publisher: "Viking Books for Young Readers",
        ISBN: 9780670451494,
        pages: 72,
        has_been_read: false,
        uuid: self.crypto.randomUUID()
    }
]

function initialLoad(){
    if (myLibrary.length == 0) {
        myLibrary.push(...initial_list_books);
    }
}

initialLoad();