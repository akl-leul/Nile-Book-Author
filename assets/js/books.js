const books = {
    richdad: {
        title: "Rich Dad Poor Dad",
        description: "Rich Dad Poor Dad is a personal finance book by Robert Kiyosaki. It advocates financial education and wealth-building through investing in assets like real estate and small businesses.",
        authorName: "Robert Kiyosaki",
        authorImage: "assets/img/robert-kiyosaki.jpg",
        genre: "Personal Finance",
        language: "English",
        format: "Hardcover, Paperback, eBook, Audiobook",
        year: 1997,
        rating: "4.7",
        image: "assets/img/rich-dad-poor-dad.png",
    },
   
    milionaire: {
            title: "The Millionaire Next Door",
            description: "The Millionaire Next Door explores the habits and behaviors of wealthy individuals, emphasizing frugality, hard work, and smart financial decisions.",
            authorName: "Thomas J. Stanley & William D. Danko",
            authorImage: "assets/img/thomas-william.jpg",
            genre: "Personal Finance",
            language: "English",
            format: "Hardcover, Paperback, eBook, Audiobook",
            year: 1996,
            rating: "4.6",
            image: "assets/img/millionaire-next-door.png",
    },
    intelligent: {
            title: "The Intelligent Investor",
            description: "This classic book by Benjamin Graham teaches the principles of value investing and the importance of a long-term strategy for investors.",
            authorName: "Benjamin Graham",
            authorImage: "assets/img/benjamin-graham.jpg",
            genre: "Investing",
            language: "English",
            format: "Hardcover, Paperback, eBook, Audiobook",
            year: 1949,
            rating: "4.8",
            image: "assets/img/intelligent-investor.png",
        },
        the4hour: {
            title: "Think and Grow Rich",
            description: "A timeless personal development book by Napoleon Hill that outlines principles for achieving wealth and success through mindset, goals, and action.",
            authorName: "Napoleon Hill",
            authorImage: "assets/img/napoleon-hill.jpg",
            genre: "Self-help",
            language: "English",
            format: "Hardcover, Paperback, eBook, Audiobook",
            year: 1937,
            rating: "4.7",
            image: "assets/img/think-grow-rich.png",
        },
        the7habits: {
            title: "Atomic Habits",
            description: "James Clear's book provides a comprehensive guide on how small habits can lead to massive personal and professional transformation over time.",
            authorName: "James Clear",
            authorImage: "assets/img/james-clear.jpg",
            genre: "Self-help",
            language: "English",
            format: "Hardcover, Paperback, eBook, Audiobook",
            year: 2018,
            rating: "4.8",
            image: "assets/img/atomic-habits.png",
        },
        therichestmaninbabylon: {
            title: "The Richest Man in Babylon",
            description: "A classic book by George S. Clason that teaches timeless financial principles through parables set in ancient Babylon.",
            authorName: "George S. Clason",
            authorImage: "assets/img/george-clason.jpg",
            genre: "Personal Finance",
            language: "English",
            format: "Hardcover, Paperback, eBook, Audiobook",
            year: 1926,
            rating: "4.6",
            image: "assets/img/richest-man-in-babylon.png",
        },
        thepyschologyofmoney: {
            title: "The Psychology of Money",
            description: "Morgan Housel discusses the emotional and psychological aspects of money and how human behavior influences financial decisions.",
            authorName: "Morgan Housel",
            authorImage: "assets/img/morgan-housel.jpg",
            genre: "Finance, Psychology",
            language: "English",
            format: "Hardcover, Paperback, eBook, Audiobook",
            year: 2020,
            rating: "4.7",
            image: "assets/img/the-pyscholog-of-money.jpeg",
        },
        youareabadassatmakingmoney: {
            title: "You Are a Badass at Making Money",
            description: "Jen Sincero's motivational book combines personal finance advice with self-development principles to inspire readers to achieve financial success.",
            authorName: "Jen Sincero",
            authorImage: "assets/img/jen-sincero.jpg",
            genre: "Self-help, Personal Finance",
            language: "English",
            format: "Hardcover, Paperback, eBook, Audiobook",
            year: 2017,
            rating: "4.5",
            image: "assets/img/you-are-a-badass.png",
        },
        daretolead: {
            title: "Dare to Lead",
            description: "Brené Brown focuses on leadership and the courage needed to lead, including discussions about vulnerability, trust, and courage in decision-making.",
            authorName: "Brené Brown",
            authorImage: "assets/img/brene-brown.jpg",
            genre: "Leadership, Self-help",
            language: "English",
            format: "Hardcover, Paperback, eBook, Audiobook",
            year: 2018,
            rating: "4.8",
            image: "assets/img/dare-to-lead.png",
        },
       the4hourworkweek:  {
            title: "The 4-Hour Workweek",
            description: "Tim Ferriss introduces unconventional strategies to achieve financial independence, emphasizing automation, outsourcing, and productivity hacks.",
            authorName: "Tim Ferriss",
            authorImage: "assets/img/tim-ferriss.jpg",
            genre: "Entrepreneurship, Productivity",
            language: "English",
            format: "Hardcover, Paperback, eBook, Audiobook",
            year: 2007,
            rating: "4.6",
            image: "assets/img/4-hour-workweek.png",
        },
        principles: {
            title: "Principles: Life and Work",
            description: "Ray Dalio shares the principles that guided his personal and professional life, offering practical insights into decision-making, business, and leadership.",
            authorName: "Ray Dalio",
            authorImage: "assets/img/ray-dalio.jpg",
            genre: "Business, Personal Development",
            language: "English",
            format: "Hardcover, Paperback, eBook, Audiobook",
            year: 2017,
            rating: "4.7",
            image: "assets/img/principles.png",
        },
       thesubtleartofnotgivingafuck: {
            title: "The Subtle Art of Not Giving a Fuck",
            description: "Mark Manson discusses the importance of embracing life's challenges, rejecting societal pressures, and focusing on what truly matters.",
            authorName: "Mark Manson",
            authorImage: "assets/img/mark-manson.jpg",
            genre: "Self-help",
            language: "English",
            format: "Hardcover, Paperback, eBook, Audiobook",
            year: 2016,
            rating: "4.5",
            image: "assets/img/subtle-art.png",
        },
        thetotal:{
            title: "The Total Money Makeover",
            description: "Dave Ramsey's step-by-step plan to achieve financial freedom, get out of debt, and build wealth through a series of straightforward financial principles.",
            authorName: "Dave Ramsey",
            authorImage: "assets/img/dave-ramsey.jpg",
            genre: "Personal Finance",
            language: "English",
            format: "Hardcover, Paperback, eBook, Audiobook",
            year: 2003,
            rating: "4.6",
            image: "assets/img/total-money-makeover.png",
        },
       themyth: {
            title: "The E-Myth Revisited",
            description: "Michael E. Gerber discusses how small businesses can avoid common pitfalls and become scalable and successful by focusing on systems and processes.",
            authorName: "Michael E. Gerber",
            authorImage: "assets/img/michael-gerber.jpg",
            genre: "Entrepreneurship",
            language: "English",
            format: "Hardcover, Paperback, eBook, Audiobook",
            year: 1995,
            rating: "4.5",
            image: "assets/img/e-myth-revisited.png",
        },
       artofwar: {
            title: "The Art of War",
            description: "Sun Tzu's ancient text on military strategy and leadership, often applied in modern business contexts for its lessons on competition and decision-making.",
            authorName: "Sun Tzu",
            authorImage: "assets/img/sun-tzu.jpg",
            genre: "Business, Leadership",
            language: "English",
            format: "Hardcover, Paperback, eBook, Audiobook",
            year: -500,
            rating: "4.7",
            image: "assets/img/art-of-war.png",
        }
    
   
};

// Initial setup to display books
let filteredBooks = Object.keys(books); // Initially show all books

// Function to filter books based on category
function filterBooks(category, value) {
    if (!value) return;  // Prevent filtering with no value

    if (category === 'rating') {
        const ratingRange = value.split('-');
        const minRating = parseFloat(ratingRange[0]);
        const maxRating = ratingRange[1] ? parseFloat(ratingRange[1]) : minRating;

        filteredBooks = Object.keys(books).filter(book => {
            const bookRating = parseFloat(books[book].rating);
            return bookRating >= minRating && bookRating <= maxRating;
        });
    } else {
        filteredBooks = Object.keys(books).filter(book => {
            const bookValue = books[book][category];
            if (typeof bookValue === 'string') {
                return bookValue.toLowerCase().includes(value.toLowerCase());
            } else if (typeof bookValue === 'number') {
                return bookValue === Number(value);
            }
            return false;
        });
    }

    displayBooks(); // Update the displayed books after filtering
}
function generateRandomID(length = 4) {
    // Define the characters that can be used in the ID
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomID = '';

    // Loop to create a random ID of the desired length
    for (let i = 0; i < length; i++) {
        // Get a random index from the characters string
        const randomIndex = Math.floor(Math.random() * characters.length);
        // Append the random character to the ID
        randomID += characters[randomIndex];
    }

    return randomID;
};
// Function to display books
function displayBooks() {
    const booksListContainer = document.getElementById('books-list');
    booksListContainer.innerHTML = ''; // Clear the current list

    // Check if there are any filtered books
    if (filteredBooks.length === 0) {
        const noResultsMessage = document.createElement('p');
        noResultsMessage.className = 'no-results';
        noResultsMessage.innerHTML = 'No results found for this category.';
        booksListContainer.appendChild(noResultsMessage);
    } else {
        // Loop through the filtered books and display them
        filteredBooks.forEach(bookKey => {
            const book = books[bookKey];
            const bookCard = document.createElement('div');
            bookCard.classList.add('col-md-4');
            bookCard.classList.add('mb-4');
            bookCard.innerHTML = `
                <div class="card" onclick="showBookDetails('${bookKey}')">
                    <img id="${generateRandomID()}" src="${book.image}" class="card-img-top" alt="${book.title}">
                    <div class="card-body">
                        <h5 class="card-title">${book.title}</h5>
                        <p class="card-text">${book.authorName}</p>
                    </div>
                    
                </div>
            `;
            booksListContainer.appendChild(bookCard);
        });
    }
};


 

// Function to show book details
function showBookDetails(bookKey) {
    const book = books[bookKey];
    document.getElementById('book-title').innerText = book.title;
    document.getElementById('book-description').innerText = book.description;
    document.getElementById('author-name').innerText = book.authorName;
    document.getElementById('book-genre').innerText = book.genre;
    document.getElementById('book-language').innerText = book.language;
    document.getElementById('book-format').innerText = book.format;
    document.getElementById('book-year').innerText = book.year;
    document.getElementById('book-rating').innerText = book.rating;
    document.getElementById('author-image').src = book.authorImage;
    document.getElementById('book-image').src = book.image;
}

// Initialize display with all books
displayBooks();