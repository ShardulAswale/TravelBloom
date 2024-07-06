document.addEventListener('DOMContentLoaded', function () {
    fetch('travel_recommendation_api.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (!data.countries || !data.temples || !data.beaches) {
                throw new Error('Invalid data format');
            }

            const cardList = document.getElementById('card-list');

            // Function to create cards
            function createCard(place) {
                const card = document.createElement('div');
                card.className = 'card-item';
                card.innerHTML = `
                    <h3>${place.name}</h3>
                    <img src="${place.imageUrl}" alt="${place.name}">
                    <p>${place.description}</p>
                    <button class="visit-button">Visit</button>
                `;
                cardList.appendChild(card);
            }

            // Add country cities to the card list
            data.countries.forEach(country => {
                country.cities.forEach(city => {
                    createCard(city);
                });
            });

            // Add temples to the card list
            data.temples.forEach(temple => {
                createCard(temple);
            });

            // Add beaches to the card list
            data.beaches.forEach(beach => {
                createCard(beach);
            });
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
});

function filterCards() {
    const searchValue = document.getElementById('search').value.toLowerCase();
    const cards = document.querySelectorAll('.card-item');
    cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        if (title.includes(searchValue)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}

function resetFilter() {
    document.getElementById('search').value = '';
    const cards = document.querySelectorAll('.card-item');
    cards.forEach(card => {
        card.style.display = '';
    });
}
