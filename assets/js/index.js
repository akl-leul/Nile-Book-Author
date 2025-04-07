document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const resultsList = document.getElementById('resultsList');
  
    // Event listener for form submission
    searchForm.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent page reload
      const query = searchInput.value.trim().toLowerCase();
      if (query) {
        searchAcrossPages(query);
      }
    });
  
    // Function to search across multiple pages
    function searchAcrossPages(query) {
      // List of pages to search in
      const pages = ['index.html', 'books.html', 'review.html', 'about.html', 'contact.html', 'assets/js/books.js' ];
      let resultsFound = false;
  
      // Clear previous results
      resultsList.innerHTML = '';
      searchResults.style.display = 'none';
  
      // Loop through all pages and fetch their content
      pages.forEach(function (page) {
        fetch(page)
          .then(response => response.text())
          .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
  
            // Find all relevant elements to search in
            const elementsToSearch = doc.querySelectorAll('h1, h2, img, p, div, h3, h4, h5, h6, article, li, ul, ol, span, footer, form');
            let pageMatches = [];
  
            // Construct a case-insensitive exact word match regex
            const regex = new RegExp(`\\b${escapeRegExp(query)}\\b`, 'i'); // 'i' for case-insensitive
  
            // Search for the first match and stop further searches
            elementsToSearch.forEach(function (element) {
              const text = element.innerText;
  
              // Test for exact word match (case insensitive)
              if (regex.test(text)) {
                if (pageMatches.length === 0) {  // Only add the first match per page
                  pageMatches.push({
                    title: getElementTitle(element),
                    url: page,
                    id: element.id, // Store the element's ID
                    element: element
                  });
                }
              }
            });
  
            // Display the first match for this page if any
            if (pageMatches.length > 0) {
              pageMatches.forEach(function (match) {
                const resultItem = document.createElement('li');
                resultItem.classList.add('list-group-item');
  
                // Create a clickable link for the result that includes the element's ID
                const resultLink = document.createElement('a');
                if (match.id) {
                  resultLink.href = `${match.url}#${match.id}`;  // Append the ID to the URL
                } else {
                  resultLink.href = match.url;  // If no ID, just link to the page
                }
                resultLink.textContent = `Found in ${match.url} - ${match.title}`;
  
                // Add event listener to scroll and highlight section when clicked
                resultLink.addEventListener('click', function () {
                  // When clicked, scroll to the matching element and highlight it
                  highlightAndScrollTo(match.element);
                });
  
                resultItem.appendChild(resultLink);
                resultsList.appendChild(resultItem);
                resultsFound = true;
              });
            }
  
            // Show results if matches found
            if (resultsFound) {
              searchResults.style.display = 'block';
            } else {
              resultsList.innerHTML = '<li class="list-group-item no"><i class="fa-solid fa-face-frown"></i> No results found.</li>';
              searchResults.style.display = 'block';
            }
          })
          .catch(error => console.error('Error fetching page:', error));
      });
    }
  
    // Function to escape special characters in regex
    function escapeRegExp(str) {
      return str.replace(/[.*+?^=!:${}()|\[\]\/\\]/g, '\\$&'); // Escape special characters
    }
  
    // Function to get a title or meaningful string for each element
    function getElementTitle(element) {
      // We can assume the title of a section may be inside an <h1>, <h2>, or similar tags
      if (element.tagName === 'H2' || element.tagName === 'H1') {
        return element.innerText; // If it's an <h2> or <h1>, consider it the title
      }
      return element.innerText.substring(0, 50); // Fallback to first 50 characters if no <h2> or <h1>
    }
  
    // Function to highlight and scroll to the matching element
    function highlightAndScrollTo(element) {
      // Scroll to the element
      element.scrollIntoView({ behavior: 'smooth' });
  
      // Highlight the element
      element.style.backgroundColor = '#f0f8ff'; // Light blue background for highlight
      setTimeout(function () {
        element.style.backgroundColor = ''; // Remove highlight after 2 seconds
      }, 2000);
    }
  });

  