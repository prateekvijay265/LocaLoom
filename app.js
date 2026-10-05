// MohallaMeet - Streamlined Community Events Application

// Application State
let currentUser = null;
let isLoggedIn = false;
let currentPage = 'home';
let map = null;
let eventMarkers = [];
let filteredEvents = [];

// Application Data from provided JSON
const events = [
    {
        id: 1,
        title: "Heritage Walk: Chandni Chowk Stories",
        description: "Explore the rich history and culture of Old Delhi's most famous market. Walk through narrow lanes, visit historic monuments, and taste traditional foods.",
        date: "2025-10-08",
        time: "09:00",
        location: "Chandni Chowk Metro Station",
        coordinates: [28.6562, 77.2303],
        category: "Heritage Walk",
        organizer: "Delhi Heritage Club",
        price: 250,
        attendees: 15,
        maxAttendees: 25,
        image: "https://user-gen-media-assets.s3.amazonaws.com/seedream_images/9e710570-1b59-4a77-9312-ccb9e0addf26.png",
        realImage: "https://ppl-ai-code-interpreter-files.s3.amazonaws.com/web/direct-files/21af31181bb0b8fe4b1fd045aebe695a/image_7.jpeg"
    },
    {
        id: 2,
        title: "Food Walk: Khan Market Delights",
        description: "Discover hidden culinary gems in one of Delhi's most popular markets. Taste local street food, visit famous restaurants, and learn about Delhi's food culture.",
        date: "2025-10-10",
        time: "11:00",
        location: "Khan Market",
        coordinates: [28.5984, 77.2219],
        category: "Food Walk",
        organizer: "Delhi Food Explorers",
        price: 400,
        attendees: 8,
        maxAttendees: 20,
        image: "https://user-gen-media-assets.s3.amazonaws.com/seedream_images/8f9f70e0-6a8d-44f7-9e88-e0d1774d07db.png"
    },
    {
        id: 3,
        title: "Morning Yoga at Lodhi Garden",
        description: "Start your day with peaceful yoga session surrounded by nature. Suitable for all levels. Mats and props provided.",
        date: "2025-10-07",
        time: "06:30",
        location: "Lodhi Garden",
        coordinates: [28.5926, 77.2173],
        category: "Fitness",
        organizer: "Wellness Warriors",
        price: 0,
        attendees: 12,
        maxAttendees: 30,
        image: "https://user-gen-media-assets.s3.amazonaws.com/seedream_images/50ffa85e-6d43-44ea-8ffa-7b8920fa9617.png",
        realImage: "https://ppl-ai-code-interpreter-files.s3.amazonaws.com/web/direct-files/21af31181bb0b8fe4b1fd045aebe695a/image_10.jpeg"
    },
    {
        id: 4,
        title: "Photography Workshop: Street Photography",
        description: "Learn the art of capturing life on Delhi streets. Professional photographer will teach composition, lighting, and storytelling through images.",
        date: "2025-10-12",
        time: "16:00",
        location: "Connaught Place",
        coordinates: [28.6315, 77.2167],
        category: "Learn",
        organizer: "Delhi Photography Club",
        price: 800,
        attendees: 6,
        maxAttendees: 15,
        image: "https://user-gen-media-assets.s3.amazonaws.com/seedream_images/1cbe3c79-1a0c-4148-b265-ae85aa0f1b41.png",
        realImage: "https://ppl-ai-code-interpreter-files.s3.amazonaws.com/web/direct-files/21af31181bb0b8fe4b1fd045aebe695a/image_8.jpeg"
    },
    {
        id: 5,
        title: "Community Clean-Up Drive",
        description: "Join us in making our neighborhood cleaner and greener. Volunteer for a community clean-up drive. All supplies provided.",
        date: "2025-10-09",
        time: "08:00",
        location: "Karol Bagh Market",
        coordinates: [28.6519, 77.1889],
        category: "Volunteer",
        organizer: "Green Delhi Initiative",
        price: 0,
        attendees: 20,
        maxAttendees: 50,
        image: "https://user-gen-media-assets.s3.amazonaws.com/seedream_images/07fdf4c7-4027-445c-aee4-16c31e82a414.png"
    },
    {
        id: 6,
        title: "Board Games Meetup",
        description: "Fun evening of board games, snacks, and meeting new people. Perfect for making friends in your neighborhood. Games and refreshments included.",
        date: "2025-10-11",
        time: "19:00",
        location: "Cafe Coffee Day, CP",
        coordinates: [28.6292, 77.2190],
        category: "Social",
        organizer: "Delhi Board Gamers",
        price: 200,
        attendees: 10,
        maxAttendees: 16,
        image: "https://user-gen-media-assets.s3.amazonaws.com/seedream_images/07fdf4c7-4027-445c-aee4-16c31e82a414.png"
    }
];

// Categories configuration with provided data
const categories = [
    {
        name: "Heritage Walk",
        icon: "",
        color: "#8B5A2B",
        image: "https://user-gen-media-assets.s3.amazonaws.com/seedream_images/9e710570-1b59-4a77-9312-ccb9e0addf26.png",
        description: "Explore Delhi's rich historical heritage"
    },
    {
        name: "Food Walk", 
        icon: "",
        color: "#E74C3C",
        image: "https://user-gen-media-assets.s3.amazonaws.com/seedream_images/8f9f70e0-6a8d-44f7-9e88-e0d1774d07db.png",
        description: "Discover authentic Delhi street food"
    },
    {
        name: "Fitness",
        icon: "",
        color: "#27AE60",
        image: "https://user-gen-media-assets.s3.amazonaws.com/seedream_images/50ffa85e-6d43-44ea-8ffa-7b8920fa9617.png",
        description: "Stay fit with outdoor activities"
    },
    {
        name: "Learn",
        icon: "",
        color: "#3498DB",
        image: "https://user-gen-media-assets.s3.amazonaws.com/seedream_images/1cbe3c79-1a0c-4148-b265-ae85aa0f1b41.png",
        description: "Acquire new skills and knowledge"
    },
    {
        name: "Volunteer",
        icon: "",
        color: "#9B59B6",
        image: "https://user-gen-media-assets.s3.amazonaws.com/seedream_images/07fdf4c7-4027-445c-aee4-16c31e82a414.png",
        description: "Give back to your community"
    },
    {
        name: "Social",
        icon: "",
        color: "#F39C12",
        image: "https://user-gen-media-assets.s3.amazonaws.com/seedream_images/07fdf4c7-4027-445c-aee4-16c31e82a414.png",
        description: "Meet new people and make friends"
    }
];

// User data simulation
const userData = {
    name: "Rahul Sharma",
    email: "rahul@example.com",
    location: "Connaught Place, Delhi",
    joinedEvents: [1, 3, 6],
    createdEvents: [2, 4]
};

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Set initial filtered events
    filteredEvents = [...events];
    
    // Initialize event listeners
    setupEventListeners();
    
    // Render initial content
    renderCategories();
    renderEvents();
    updateActiveNavigation();
    
    // Initialize the map after a longer delay to ensure everything is ready
    setTimeout(() => {
        initializeMap();
    }, 500);
    
    // Set minimum date for event creation
    const today = new Date().toISOString().split('T')[0];
    const dateInput = document.getElementById('event-date');
    if (dateInput) {
        dateInput.min = today;
    }
}

function setupEventListeners() {
    // Navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.dataset.page;
            if (page) {
                navigateToPage(page);
            }
        });
    });

    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu when clicking backdrop
        mobileMenu.addEventListener('click', function(e) {
            if (e.target === mobileMenu) {
                mobileMenu.classList.add('hidden');
            }
        });
    }

    // Search functionality
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            filterEvents();
        });
        
        searchInput.addEventListener('keyup', function(e) {
            filterEvents();
        });
    }

    // Category filters
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            filterEvents();
        });
    });

    // Event creation form
    const createEventForm = document.getElementById('create-event-form');
    if (createEventForm) {
        createEventForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleCreateEvent(e);
        });
        
        const formInputs = createEventForm.querySelectorAll('input, textarea, select');
        formInputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.style.borderColor = '#F97316';
            });
            
            input.addEventListener('blur', function() {
                this.style.borderColor = '#F3F4F6';
            });
        });
    }

    // Authentication forms
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleLogin(e);
        });
    }
    
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleRegister(e);
        });
    }

    // Auth form switching
    const switchToRegister = document.getElementById('switch-to-register');
    const switchToLogin = document.getElementById('switch-to-login');
    
    if (switchToRegister) {
        switchToRegister.addEventListener('click', function(e) {
            e.preventDefault();
            navigateToPage('register');
        });
    }
    
    if (switchToLogin) {
        switchToLogin.addEventListener('click', function(e) {
            e.preventDefault();
            navigateToPage('login');
        });
    }

    // Modal handling
    setupModalHandlers();
}

function setupModalHandlers() {
    const modal = document.getElementById('event-modal');
    const closeModalBtn = document.getElementById('close-modal');
    const closeModalFooterBtn = document.getElementById('close-modal-btn');
    const joinEventBtn = document.getElementById('join-event-btn');

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', function(e) {
            e.preventDefault();
            closeModal();
        });
    }
    
    if (closeModalFooterBtn) {
        closeModalFooterBtn.addEventListener('click', function(e) {
            e.preventDefault();
            closeModal();
        });
    }
    
    if (joinEventBtn) {
        joinEventBtn.addEventListener('click', function(e) {
            e.preventDefault();
            handleJoinEvent();
        });
    }

    // Close modal when clicking backdrop
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target.classList.contains('modal-backdrop')) {
                closeModal();
            }
        });
    }
}

function navigateToPage(page) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    
    // Show target page
    const targetPage = document.getElementById(`${page}-page`);
    if (targetPage) {
        targetPage.classList.add('active');
        currentPage = page;
        updateActiveNavigation();
        
        // Close mobile menu
        const mobileMenu = document.querySelector('.mobile-menu');
        if (mobileMenu) {
            mobileMenu.classList.add('hidden');
        }
        
        // Special handling for profile page
        if (page === 'profile') {
            renderUserProfile();
        }
        
        // Refresh map when returning to home page
        if (page === 'home' && map) {
            setTimeout(() => {
                map.invalidateSize();
            }, 200);
        }
    }
}

function updateActiveNavigation() {
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.dataset.page === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

function scrollToEvents() {
    const eventsSection = document.getElementById('events-section');
    if (eventsSection) {
        eventsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function renderCategories() {
    const categoriesGrid = document.getElementById('categories-grid');
    if (!categoriesGrid) return;

    categoriesGrid.innerHTML = categories.map(category => `
        <div class="category-card" onclick="filterByCategory('${category.name}')" style="--category-color: ${category.color}">
            <div class="category-image" style="background-image: url('${category.image}')">
                <div class="category-icon">${category.icon}</div>
            </div>
            <h3 class="category-name">${category.name}</h3>
            <p class="category-description">${category.description}</p>
        </div>
    `).join('');
}

function filterByCategory(categoryName) {
    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === categoryName) {
            btn.classList.add('active');
        }
    });
    
    // Scroll to events section
    scrollToEvents();
    
    // Filter events
    setTimeout(() => {
        filterEvents();
    }, 300);
}

function initializeMap() {
    const mapElement = document.getElementById('map');
    if (!mapElement) {
        console.log('Map element not found');
        return;
    }
    
    try {
        console.log('Initializing map...');
        
        // Check if Leaflet is available
        if (typeof L === 'undefined') {
            console.error('Leaflet library not loaded');
            return;
        }
        
        // Initialize Leaflet map centered on Delhi
        map = L.map('map', {
            center: [28.6139, 77.2090],
            zoom: 11,
            zoomControl: true
        });

        console.log('Map initialized, adding tiles...');

        // Add OpenStreetMap tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 18
        }).addTo(map);

        // Wait for map to be ready, then add markers
        map.whenReady(function() {
            console.log('Map is ready, adding markers...');
            setTimeout(() => {
                addEventMarkers();
            }, 100);
        });

        // Force map to invalidate size after a delay
        setTimeout(() => {
            if (map) {
                map.invalidateSize();
                console.log('Map size invalidated');
            }
        }, 1000);

    } catch (error) {
        console.error('Error initializing map:', error);
    }
}

function addEventMarkers() {
    if (!map) {
        console.log('Map not available for adding markers');
        return;
    }
    
    console.log('Adding markers for', filteredEvents.length, 'events');
    
    // Clear existing markers
    eventMarkers.forEach(marker => {
        try {
            map.removeLayer(marker);
        } catch (e) {
            console.log('Error removing marker:', e);
        }
    });
    eventMarkers = [];

    // Add markers for filtered events
    filteredEvents.forEach(event => {
        try {
            const marker = L.marker(event.coordinates).addTo(map);
            
            // Custom popup content
            const popupContent = `
                <div class="map-popup">
                    <h4 style="margin: 0 0 8px 0; color: #F97316; font-weight: 600; font-size: 14px;">${event.title}</h4>
                    <p style="margin: 0 0 8px 0; font-size: 12px; color: #374151;">${event.location}</p>
                    <p style="margin: 0 0 8px 0; font-size: 12px;">📅 ${formatDate(event.date)} at ${formatTime(event.time)}</p>
                    <p style="margin: 0 0 12px 0; font-size: 12px; font-weight: 500;">
                        ${event.price === 0 ? '🆓 Free' : `💰 ₹${event.price}`}
                    </p>
                    <button onclick="openEventModal(${event.id})" style="
                        background: #F97316; 
                        color: white; 
                        border: none; 
                        padding: 6px 12px; 
                        border-radius: 6px; 
                        font-size: 12px; 
                        cursor: pointer;
                        font-weight: 500;
                        transition: background 0.2s;
                    " onmouseover="this.style.background='#ea580c'" onmouseout="this.style.background='#F97316'">View Details</button>
                </div>
            `;
            
            marker.bindPopup(popupContent, {
                maxWidth: 250,
                className: 'custom-popup'
            });
            eventMarkers.push(marker);
        } catch (error) {
            console.error('Error adding marker for event:', event.title, error);
        }
    });
    
    console.log('Added', eventMarkers.length, 'markers to map');
}

function filterEvents() {
    const searchInput = document.getElementById('search-input');
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
    const activeFilter = document.querySelector('.filter-btn.active');
    const activeCategory = activeFilter ? activeFilter.dataset.category : 'all';

    filteredEvents = events.filter(event => {
        const matchesSearch = searchTerm === '' || 
            event.title.toLowerCase().includes(searchTerm) ||
            event.description.toLowerCase().includes(searchTerm) ||
            event.location.toLowerCase().includes(searchTerm) ||
            event.organizer.toLowerCase().includes(searchTerm);

        const matchesCategory = activeCategory === 'all' || event.category === activeCategory;

        return matchesSearch && matchesCategory;
    });

    renderEvents();
    
    // Update map markers with a delay
    setTimeout(() => {
        addEventMarkers();
    }, 100);
}

function renderEvents() {
    const eventsContainer = document.getElementById('events-list');
    if (!eventsContainer) return;

    if (filteredEvents.length === 0) {
        eventsContainer.innerHTML = `
            <div style="text-align: center; padding: 40px; color: #9CA3AF; grid-column: 1 / -1;">
                <i class="fas fa-search" style="font-size: 48px; margin-bottom: 16px;"></i>
                <p style="font-size: 18px; margin-bottom: 8px;">No events found</p>
                <p style="font-size: 14px;">Try adjusting your search or filter criteria.</p>
            </div>
        `;
        return;
    }

    eventsContainer.innerHTML = filteredEvents.map(event => `
        <div class="event-card" onclick="openEventModal(${event.id})">
            <div class="event-card-header">
                <h3 class="event-title">${event.title}</h3>
                <div class="event-meta">
                    <span class="event-category">${event.category}</span>
                    <span class="event-price ${event.price === 0 ? 'free' : 'paid'}">
                        ${event.price === 0 ? 'FREE' : '₹' + event.price}
                    </span>
                </div>
            </div>
            
            <p class="event-description">${event.description}</p>
            
            <div class="event-details">
                <div class="event-detail">
                    <i class="fas fa-calendar"></i>
                    <span>${formatDate(event.date)}</span>
                </div>
                <div class="event-detail">
                    <i class="fas fa-clock"></i>
                    <span>${formatTime(event.time)}</span>
                </div>
                <div class="event-detail">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${event.location}</span>
                </div>
                <div class="event-detail">
                    <i class="fas fa-users"></i>
                    <span>${event.attendees}/${event.maxAttendees} attending</span>
                </div>
            </div>
            
            <div class="event-footer">
                <span class="event-organizer">by ${event.organizer}</span>
                <div class="event-attendees">
                    <i class="fas fa-users"></i>
                    <span>${event.attendees} joined</span>
                </div>
            </div>
        </div>
    `).join('');
}

function openEventModal(eventId) {
    const event = events.find(e => e.id === eventId);
    if (!event) return;

    // Populate modal content
    document.getElementById('modal-event-title').textContent = event.title;
    document.getElementById('modal-event-category').textContent = event.category;
    document.getElementById('modal-event-price').textContent = event.price === 0 ? 'FREE' : `₹${event.price}`;
    document.getElementById('modal-event-description').textContent = event.description;
    document.getElementById('modal-event-date').textContent = formatDate(event.date);
    document.getElementById('modal-event-time').textContent = formatTime(event.time);
    document.getElementById('modal-event-location').textContent = event.location;
    document.getElementById('modal-event-organizer').textContent = event.organizer;
    document.getElementById('modal-event-attendees').textContent = `${event.attendees}/${event.maxAttendees} attending`;

    // Set event image if available
    const modalImage = document.getElementById('modal-event-image');
    if (event.realImage || event.image) {
        modalImage.style.backgroundImage = `url('${event.realImage || event.image}')`;
        modalImage.innerHTML = '';
    } else {
        modalImage.style.backgroundImage = 'none';
        modalImage.innerHTML = '<div class="event-image-placeholder"><i class="fas fa-image"></i></div>';
    }

    // Store event ID for join functionality
    document.getElementById('join-event-btn').dataset.eventId = eventId;

    // Show modal
    document.getElementById('event-modal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('event-modal').classList.add('hidden');
}

function handleJoinEvent() {
    const eventId = parseInt(document.getElementById('join-event-btn').dataset.eventId);
    const event = events.find(e => e.id === eventId);
    
    if (event && event.attendees < event.maxAttendees) {
        event.attendees += 1;
        showToast('Successfully joined the event!', 'success');
        renderEvents();
        closeModal();
        
        // Update modal content if reopened
        document.getElementById('modal-event-attendees').textContent = `${event.attendees}/${event.maxAttendees} attending`;
    } else {
        showToast('Event is full or unavailable', 'error');
    }
}

function handleCreateEvent(e) {
    e.preventDefault();
    
    // Get form data directly from form elements
    const title = document.getElementById('event-title').value.trim();
    const description = document.getElementById('event-description').value.trim();
    const category = document.getElementById('event-category').value;
    const organizer = document.getElementById('event-organizer').value.trim();
    const date = document.getElementById('event-date').value;
    const time = document.getElementById('event-time').value;
    const location = document.getElementById('event-location').value.trim();
    const price = parseInt(document.getElementById('event-price').value) || 0;
    const maxAttendees = parseInt(document.getElementById('max-attendees').value) || 20;
    
    // Validation
    if (!title || !description || !category || !organizer || !date || !time || !location) {
        showToast('Please fill in all required fields', 'error');
        return;
    }
    
    const eventData = {
        id: events.length + 1,
        title: title,
        description: description,
        category: category,
        organizer: organizer,
        date: date,
        time: time,
        location: location,
        price: price,
        maxAttendees: maxAttendees,
        attendees: 0,
        coordinates: [28.6139 + (Math.random() - 0.5) * 0.1, 77.2090 + (Math.random() - 0.5) * 0.1],
    };

    // Add to events array
    events.push(eventData);
    filteredEvents = [...events];

    // Reset form
    document.getElementById('create-event-form').reset();
    
    // Show success message
    showToast('Event created successfully!', 'success');
    
    // Navigate back to home
    navigateToPage('home');
    
    // Re-render events and map
    renderEvents();
    setTimeout(() => {
        addEventMarkers();
    }, 200);
}

function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value.trim();
    
    if (email && password) {
        isLoggedIn = true;
        currentUser = userData;
        
        showToast('Welcome back!', 'success');
        navigateToPage('home');
        
        document.getElementById('login-form').reset();
        updateNavigationForLoggedInUser();
    } else {
        showToast('Please enter valid credentials', 'error');
    }
}

function handleRegister(e) {
    e.preventDefault();
    
    const name = document.getElementById('register-name').value.trim();
    const email = document.getElementById('register-email').value.trim();
    const password = document.getElementById('register-password').value.trim();
    const location = document.getElementById('register-location').value.trim();
    
    if (name && email && password && location) {
        isLoggedIn = true;
        currentUser = {
            name: name,
            email: email,
            location: location,
            joinedEvents: [],
            createdEvents: []
        };
        
        showToast('Account created successfully!', 'success');
        navigateToPage('home');
        
        document.getElementById('register-form').reset();
        updateNavigationForLoggedInUser();
    } else {
        showToast('Please fill all fields', 'error');
    }
}

function updateNavigationForLoggedInUser() {
    // For demo purposes, keeping existing navigation
}

function renderUserProfile() {
    if (currentUser) {
        // Profile is already rendered in HTML for demo
    }
}

function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastIcon = document.querySelector('.toast-icon');
    const toastMessage = document.querySelector('.toast-message');
    
    if (!toast || !toastIcon || !toastMessage) return;

    toastMessage.textContent = message;
    
    if (type === 'success') {
        toastIcon.className = 'toast-icon fas fa-check-circle';
        toast.className = 'toast success';
    } else if (type === 'error') {
        toastIcon.className = 'toast-icon fas fa-exclamation-circle';
        toast.className = 'toast error';
    }
    
    toast.classList.remove('hidden');
    
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 3000);
}

// Utility functions
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { 
        weekday: 'short', 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
    };
    return date.toLocaleDateString('en-US', options);
}

function formatTime(timeString) {
    const [hours, minutes] = timeString.split(':');
    const date = new Date();
    date.setHours(parseInt(hours), parseInt(minutes));
    return date.toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit',
        hour12: true 
    });
}

// Handle window resize for map
window.addEventListener('resize', function() {
    if (map) {
        setTimeout(() => {
            map.invalidateSize();
        }, 100);
    }
});

// Global functions accessible from HTML
window.openEventModal = openEventModal;
window.scrollToEvents = scrollToEvents;
window.filterByCategory = filterByCategory;