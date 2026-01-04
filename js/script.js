document.addEventListener('DOMContentLoaded', () => {
    // Festival Data
    const websitesData = [
        {
            id: 1,
            title: "Diwali",
            description: "The festival of lights, celebrating the victory of light over darkness.",
            category: "hindu",
            image: "images/Diwali.jpg",
            link: "Diwali.html",
            date: "20 October 2025"
        },
        {
            id: 2,
            title: "Eid Mubarak",
            description: "Celebrating the end of Ramadan with prayers, feasting, and charity.",
            category: "muslim",
            image: "images/Eid.jpg",
            link: "Eid.html",
            date: "31 March 2025"
        },
        {
            id: 3,
            title: "Merry Christmas",
            description: "Celebrating the birth of Jesus Christ with joy, gifts, and carols.",
            category: "christian",
            image: "images/Christmas.jpg",
            link: "Christmas.html",
            date: "25 December 2025"
        },
        {
            id: 4,
            title: "Janmashtami",
            description: "Celebrating the birth of Lord Krishna with devotion and joy.",
            category: "hindu",
            image: "images/Janmashtami.jpg",
            link: "Janmashtami.html",
            date: "16 August 2025"
        },
        {
            id: 5,
            title: "Holi",
            description: "The festival of colors, celebrating the arrival of spring.",
            category: "hindu",
            image: "images/Holi.jpg",
            link: "Holi.html",
            date: "14 March 2025"
        },
        {
            id: 6,
            title: "Maha Shivaratri",
            description: "A major Hindu festival celebrated in honor of the god Shiva.",
            category: "hindu",
            image: "images/MahaShivaratri.jpg",
            link: "MahaShivaratri.html",
            date: "26 February 2025"
        },
        {
            id: 7,
            title: "Raksha Bandhan",
            description: "Celebrating the bond between brothers and sisters.",
            category: "hindu",
            image: "images/RakshaBandhan.jpg",
            link: "RakshaBandhan.html",
            date: "9 August 2025"
        },
        {
            id: 8,
            title: "Ganesh Chaturthi",
            description: "Celebrating the birth of Lord Ganesha.",
            category: "hindu",
            image: "images/GaneshChaturthi.jpg",
            link: "GaneshChaturthi.html",
            date: "27 August 2025"
        },
        {
            id: 9,
            title: "Navratri",
            description: "Nine nights of worship of Goddess Durga.",
            category: "hindu",
            image: "images/Navratri.jpg",
            link: "Navratri.html",
            date: "22 September 2025"
        },
        {
            id: 10,
            title: "Dussehra",
            description: "Celebrating the victory of good over evil.",
            category: "hindu",
            image: "images/Dussehra.jpg",
            link: "Dussehra.html",
            date: "2 October 2025"
        }
    ];

    // State
    let currentCategory = 'all';
    let searchQuery = '';
    let favorites = JSON.parse(localStorage.getItem('festhub-favorites') || '[]');

    // Elements
    const websitesGrid = document.getElementById('websitesGrid');
    const categoryTabs = document.querySelectorAll('.category-tab');
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const favoritesBtn = document.getElementById('favoritesBtn');
    const favoritesCount = document.getElementById('favoritesCount');
    const notificationsBtn = document.getElementById('notificationsBtn');
    const notificationCount = document.getElementById('notificationCount');
    const eventsSlider = document.getElementById('eventsSlider');
    
    // Modal Elements
    const modal = document.getElementById('festivalModal');
    const modalClose = document.getElementById('closeModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDate = document.getElementById('modalDate');
    const modalDesc = document.getElementById('modalDescription');
    const modalLink = document.getElementById('modalLink');

    // Initialize
    renderWebsites();
    updateFavoritesCount();
    renderEvents();
    loadNotifications();

    // Event Listeners
    if (notificationsBtn) {
        notificationsBtn.addEventListener('click', showNotifications);
    }

    categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Update Active Tab
            categoryTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Filter
            currentCategory = tab.dataset.category;
            renderWebsites();
        });
    });

    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') performSearch();
        else {
            searchQuery = searchInput.value.toLowerCase();
            renderWebsites();
        }
    });

    function performSearch() {
        searchQuery = searchInput.value.toLowerCase();
        renderWebsites();
    }

    favoritesBtn.addEventListener('click', () => {
        // Simple alert for now, could be a modal
        const favTitles = favorites.map(id => {
            const site = websitesData.find(s => s.id === id);
            return site ? site.title : '';
        }).filter(Boolean).join('\n');
        
        alert(favTitles ? `Your Favorites:\n${favTitles}` : 'No favorites yet!');
    });

    // Modal Close
    modalClose.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    // Render Functions
    function renderWebsites() {
        websitesGrid.innerHTML = '';
        
        const filtered = websitesData.filter(site => {
            const matchCategory = currentCategory === 'all' || site.category === currentCategory;
            const matchSearch = site.title.toLowerCase().includes(searchQuery) || 
                              site.description.toLowerCase().includes(searchQuery);
            return matchCategory && matchSearch;
        });

        if (filtered.length === 0) {
            websitesGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; font-size: 1.2rem; color: var(--gray);">No festivals found matching your criteria.</p>';
            return;
        }

        filtered.forEach(site => {
            const isFav = favorites.includes(site.id);
            const card = document.createElement('div');
            card.className = 'website-card';
            card.innerHTML = `
                <img src="${site.image}" alt="${site.title}" class="card-image">
                <div class="card-content">
                    <span class="card-category">${site.category}</span>
                    <h3 class="card-title">${site.title}</h3>
                    <p class="card-description">${site.description}</p>
                    <div class="card-footer">
                        <a href="${site.link}" class="btn-visit">Create Wish</a>
                        <div class="card-actions">
                            <button class="action-btn ${isFav ? 'active' : ''}" onclick="toggleFavorite(${site.id})">
                                <i class="${isFav ? 'fas' : 'far'} fa-heart"></i>
                            </button>
                            <button class="action-btn" onclick="openModal(${site.id})">
                                <i class="fas fa-info-circle"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `;
            websitesGrid.appendChild(card);
        });
    }

    function renderEvents() {
        // Sort by date
        const sortedSites = [...websitesData].sort((a, b) => {
            return new Date(a.date) - new Date(b.date);
        });

        eventsSlider.innerHTML = ''; // Clear existing content
        
        sortedSites.forEach(site => {
            const card = document.createElement('div');
            card.className = 'event-card';
            card.innerHTML = `
                <div class="event-date">${site.date}</div>
                <h3>${site.title}</h3>
                <p>${site.description.substring(0, 50)}...</p>
            `;
            eventsSlider.appendChild(card);
        });
    }

    // Global Functions
    window.toggleFavorite = (id) => {
        if (favorites.includes(id)) {
            favorites = favorites.filter(favId => favId !== id);
        } else {
            favorites.push(id);
        }
        localStorage.setItem('festhub-favorites', JSON.stringify(favorites));
        updateFavoritesCount();
        renderWebsites(); // Re-render to update heart icon
    };

    window.openModal = (id) => {
        const site = websitesData.find(s => s.id === id);
        if (!site) return;

        modalTitle.textContent = site.title;
        modalDate.textContent = site.date;
        modalDesc.textContent = site.description;
        modalLink.href = site.link;
        
        modal.classList.add('active');
    };

    function updateFavoritesCount() {
        const count = favorites.length;
        favoritesCount.textContent = count;
        favoritesCount.style.display = count > 0 ? 'block' : 'none';
    }

    // Notifications
    let notifications = [];

    async function loadNotifications() {
        try {
            const response = await fetch('notifications.json');
            notifications = await response.json();
            updateNotificationCount();
        } catch (error) {
            console.error('Error loading notifications:', error);
        }
    }

    function updateNotificationCount() {
        if (!notificationCount) return;
        const unreadCount = notifications.filter(n => !n.read).length;
        notificationCount.textContent = unreadCount;
        notificationCount.style.display = unreadCount > 0 ? 'block' : 'none';
    }

    function showNotifications() {
        const unread = notifications.filter(n => !n.read);
        if (unread.length === 0) {
            alert('No new notifications!');
            return;
        }

        const msg = unread.map(n => `• ${n.title}: ${n.message}`).join('\n\n');
        alert(`New Notifications:\n\n${msg}`);
        
        // Mark as read (locally for this session)
        notifications.forEach(n => n.read = true);
        updateNotificationCount();
    }
});
