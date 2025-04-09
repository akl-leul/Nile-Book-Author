const books = {
    "Rich Dad Poor Dad": {
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
    
    "Me Before You": {
        title: "Me Before You",
        description: "Me Before You by Jojo Moyes is a poignant love story between Louisa Clark, a quirky young woman, and Will Traynor, a successful man left paralyzed after an accident. The book explores themes of disability, independence, and the impact of love.",
        authorName: "Jojo Moyes",
        authorImage: "assets/img/jojo-moyes.jpg",
        genre: "Romance, Contemporary",
        language: "English",
        format: "Hardcover, Paperback, eBook, Audiobook",
        year: 2012,
        rating: "4.6",
        image: "assets/img/me-before-you.png",
    },
    "The Millionaire Next Door": {
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
    "The Intelligent Investor": {
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
        "Think and Grow Rich": {
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
        "Atomic Habits": {
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
        "The Richest Man in Babylon": {
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
        "Neuromancer": {
    title: "Neuromancer",
    description: "Neuromancer is a cyberpunk novel by William Gibson that explores the world of artificial intelligence, virtual reality, and cyberspace, following a washed-up computer hacker named Case as he is hired for a heist in cyberspace.",
    authorName: "William Gibson",
    authorImage: "assets/img/william-gibson.jpg",
    genre: "Science Fiction, Cyberpunk",
    language: "English",
    format: "Hardcover, Paperback, eBook, Audiobook",
    year: 1984,
    rating: "4.5",
    image: "assets/img/neuromancer.png"
        },

"Hyperion": {
    title: "Hyperion",
    description: "Hyperion is the first book in the Hyperion Cantos by Dan Simmons. It is a complex, multi-layered science fiction novel that follows seven pilgrims as they journey to the distant planet Hyperion, sharing their stories along the way.",
    authorName: "Dan Simmons",
    authorImage: "assets/img/dan-simmons.jpg",
    genre: "Science Fiction, Space Opera",
    language: "English",
    format: "Hardcover, Paperback, eBook, Audiobook",
    year: 1989,
    rating: "4.6",
    image: "assets/img/hyperion.png"
},

"Dune": {
    title: "Dune",
    description: "Dune by Frank Herbert is a seminal science fiction epic that delves into politics, religion, and ecology, set on the desert planet Arrakis. It follows Paul Atreides as he navigates the complexities of power, survival, and destiny.",
    authorName: "Frank Herbert",
    authorImage: "assets/img/frank-herbert.jpg",
    genre: "Science Fiction, Space Opera",
    language: "English",
    format: "Hardcover, Paperback, eBook, Audiobook",
    year: 1965,
    rating: "4.8",
    image: "assets/img/dune.png"
},

        "Outlander": {
            title: "Outlander",
            description: "Outlander by Diana Gabaldon is a historical romance that combines time travel, adventure, and passion. Claire Randall, a 20th-century nurse, is mysteriously transported to 18th-century Scotland where she falls in love with a Highland warrior.",
            authorName: "Diana Gabaldon",
            authorImage: "assets/img/diana-gabaldon.jpg",
            genre: "Romance, Historical Fiction",
            language: "English",
            format: "Hardcover, Paperback, eBook, Audiobook",
            year: 1991,
            rating: "4.7",
            image: "assets/img/outlander.png",
        },
        "The Psychology of Money": {
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
        "You Are a Badass at Making Money": {
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
        "Dare to Lead": {
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
      "The 4-Hour Workweek":  {
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
        "The Kiss Quotient": {
            title: "The Kiss Quotient",
            description: "The Kiss Quotient by Helen Hoang is a contemporary romance novel that follows Stella Lane, a successful woman with Asperger's, who hires a male escort to help her navigate the complexities of romantic and physical relationships.",
            authorName: "Helen Hoang",
            authorImage: "assets/img/helen-hoang.jpg",
            genre: "Romance, Contemporary",
            language: "English",
            format: "Hardcover, Paperback, eBook, Audiobook",
            year: 2018,
            rating: "4.5",
            image: "assets/img/the-kiss-quotient.png",
        },
       "Principles: Life and Work": {
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
     "The Subtle Art of Not Giving a Fuck": {
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
        "Pride and Prejudice": {
            title: "Pride and Prejudice",
            description: "Pride and Prejudice is a classic romance novel by Jane Austen. It explores themes of love, reputation, and class as Elizabeth Bennet navigates her feelings for the proud and aloof Mr. Darcy.",
            authorName: "Jane Austen",
            authorImage: "assets/img/jane-austen.jpg",
            genre: "Romance, Classic",
            language: "English",
            format: "Hardcover, Paperback, eBook, Audiobook",
            year: 1813,
            rating: "4.9",
            image: "assets/img/pride-and-prejudice.png",
        },
       "The Total Money Makeover":{
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
         
        "The Fault in Our Stars": {
            title: "The Fault in Our Stars",
            description: "The Fault in Our Stars by John Green is a heart-wrenching romance about two teenagers, Hazel and Gus, who meet at a cancer support group and embark on a love story filled with beauty, heartbreak, and profound emotions.",
            authorName: "John Green",
            authorImage: "assets/img/john-green.jpg",
            genre: "Romance, Young Adult",
            language: "English",
            format: "Hardcover, Paperback, eBook, Audiobook",
            year: 2012,
            rating: "4.7",
            image: "assets/img/the-fault-in-our-stars.png",
        },
       "The E-Myth Revisited": {
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
       "the art of war": {
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
        },
        "the Note book": {
            title: "The Notebook",
            description: "The Notebook is a romantic novel by Nicholas Sparks. It tells the story of Noah and Allie, whose love story transcends time, obstacles, and life's challenges. Their passionate bond, rekindled years after they first met, is a timeless tale of enduring love.",
            authorName: "Nicholas Sparks",
            authorImage: "assets/img/nicholas-sparks.jpg",
            genre: "Romance",
            language: "English",
            format: "Hardcover, Paperback, eBook, Audiobook",
            year: 1996,
            rating: "4.8",
            image: "assets/img/the-notebook.png",
        }, 
        
       
       
        
        
        
      
   
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
function generateStarRating(rating) {
    let stars = "";
    let fullStars = Math.floor(rating); // Get the full stars based on the rating
    let halfStars = (rating % 1 >= 0.5) ? 1 : 0; // Check if we need a half star
    let emptyStars = 5 - fullStars - halfStars; // Total of 5 stars

    // Add full stars
    stars += "★".repeat(fullStars);

    // Add half star if needed
    if (halfStars) {
        stars += "☆";
    }

    // Add empty stars
    stars += "☆".repeat(emptyStars);

    return stars;
};
// Function to display books
function displayBooks() {
    const booksListContainer = document.getElementById('books-list');
    booksListContainer.innerHTML = ''; // Clear the current list

    // Check if there are any filtered books
    if (filteredBooks.length === 0) {
        const noResultsMessage = document.createElement('p');
        noResultsMessage.className = 'no-results';
        noResultsMessage.innerHTML = '<p class="noresult"><svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" width="647.63626" height="632.17383" viewBox="0 0 647.63626 632.17383" class="injected-svg" xmlns:xlink="http://www.w3.org/1999/xlink" role="img" artist="Katerina Limpitsouni" copyright="unDraw" scrapped="true" source="https://undraw.co/"><path d="M687.3279,276.08691H512.81813a15.01828,15.01828,0,0,0-15,15v387.85l-2,.61005-42.81006,13.11a8.00676,8.00676,0,0,1-9.98974-5.31L315.678,271.39691a8.00313,8.00313,0,0,1,5.31006-9.99l65.97022-20.2,191.25-58.54,65.96972-20.2a7.98927,7.98927,0,0,1,9.99024,5.3l32.5498,106.32Z" transform="translate(-276.18187 -133.91309)" fill="#f2f2f2"></path><path d="M725.408,274.08691l-39.23-128.14a16.99368,16.99368,0,0,0-21.23-11.28l-92.75,28.39L380.95827,221.60693l-92.75,28.4a17.0152,17.0152,0,0,0-11.28028,21.23l134.08008,437.93a17.02661,17.02661,0,0,0,16.26026,12.03,16.78926,16.78926,0,0,0,4.96972-.75l63.58008-19.46,2-.62v-2.09l-2,.61-64.16992,19.65a15.01489,15.01489,0,0,1-18.73-9.95l-134.06983-437.94a14.97935,14.97935,0,0,1,9.94971-18.73l92.75-28.4,191.24024-58.54,92.75-28.4a15.15551,15.15551,0,0,1,4.40966-.66,15.01461,15.01461,0,0,1,14.32032,10.61l39.0498,127.56.62012,2h2.08008Z" transform="translate(-276.18187 -133.91309)" fill="#3f3d56"></path><path d="M398.86279,261.73389a9.0157,9.0157,0,0,1-8.61133-6.3667l-12.88037-42.07178a8.99884,8.99884,0,0,1,5.9712-11.24023l175.939-53.86377a9.00867,9.00867,0,0,1,11.24072,5.9707l12.88037,42.07227a9.01029,9.01029,0,0,1-5.9707,11.24072L401.49219,261.33887A8.976,8.976,0,0,1,398.86279,261.73389Z" transform="translate(-276.18187 -133.91309)" fill="#f26430"></path><circle cx="190.15351" cy="24.95465" r="20" fill="#f26430"></circle><circle cx="190.15351" cy="24.95465" r="12.66462" fill="#fff"></circle><path d="M878.81836,716.08691h-338a8.50981,8.50981,0,0,1-8.5-8.5v-405a8.50951,8.50951,0,0,1,8.5-8.5h338a8.50982,8.50982,0,0,1,8.5,8.5v405A8.51013,8.51013,0,0,1,878.81836,716.08691Z" transform="translate(-276.18187 -133.91309)" fill="#e6e6e6"></path><path d="M723.31813,274.08691h-210.5a17.02411,17.02411,0,0,0-17,17v407.8l2-.61v-407.19a15.01828,15.01828,0,0,1,15-15H723.93825Zm183.5,0h-394a17.02411,17.02411,0,0,0-17,17v458a17.0241,17.0241,0,0,0,17,17h394a17.0241,17.0241,0,0,0,17-17v-458A17.02411,17.02411,0,0,0,906.81813,274.08691Zm15,475a15.01828,15.01828,0,0,1-15,15h-394a15.01828,15.01828,0,0,1-15-15v-458a15.01828,15.01828,0,0,1,15-15h394a15.01828,15.01828,0,0,1,15,15Z" transform="translate(-276.18187 -133.91309)" fill="#3f3d56"></path><path d="M801.81836,318.08691h-184a9.01015,9.01015,0,0,1-9-9v-44a9.01016,9.01016,0,0,1,9-9h184a9.01016,9.01016,0,0,1,9,9v44A9.01015,9.01015,0,0,1,801.81836,318.08691Z" transform="translate(-276.18187 -133.91309)" fill="#f26430"></path><circle cx="433.63626" cy="105.17383" r="20" fill="#f26430"></circle><circle cx="433.63626" cy="105.17383" r="12.18187" fill="#fff"></circle></svg>  No results found for this category.</p>';
        booksListContainer.appendChild(noResultsMessage);
    } else {
        // Loop through the filtered books and display them
        filteredBooks.forEach(bookKey => {
            const book = books[bookKey];
            const bookCard = document.createElement('div');
            bookCard.classList.add('col-md-4');
            bookCard.classList.add('mb-4');
            bookCard.innerHTML = `
                <div class="card books" id="bks" onclick="showBookDetails('${bookKey}')">
    <img id="${generateRandomID()}"  src="${book.image}" class="card-img-top" alt="${book.title}">
    <div class="card-body">
        <h5 class="card-title">${book.title}</h5>
        <p class="card-text"><small> By ${book.authorName} </small></p>
        
        <p class="star-rating">
            ${generateStarRating(book.rating)}
        </p>
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
    document.getElementById('book-staring').innerHTML = generateStarRating(book.rating);
}

// Initialize display with all books
displayBooks();

