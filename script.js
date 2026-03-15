// Destinations Data
const destinations = [
    {
        id: 1,
        name: "Kerala Backwaters",
        image: "https://images.unsplash.com/photo-1537713366759-be7bed881c64?auto=format&fit=crop&w=500&q=60",
        description: "Experience serene backwaters with houseboat stays and sunset cruises.",
        rating: 4.8,
        reviews: 512,
        temp: "28-32°C"
    },
    {
        id: 2,
        name: "Jaipur Pink City",
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=500&q=60",
        description: "Explore royal palaces, forts, and vibrant markets of Rajasthan.",
        rating: 4.6,
        reviews: 428,
        temp: "25-35°C"
    },
    {
        id: 3,
        name: "Goa Beaches",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=60",
        description: "Beautiful beaches with Portuguese architecture and water sports.",
        rating: 4.7,
        reviews: 650,
        temp: "26-30°C"
    },
    {
        id: 4,
        name: "Himachal Pradesh",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=500&q=60",
        description: "Snow-capped mountains, adventure activities, and scenic trails.",
        rating: 4.9,
        reviews: 380,
        temp: "5-20°C"
    },
    {
        id: 5,
        name: "Ladakh Mountains",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=500&q=60",
        description: "High altitude desert with Buddhist monasteries and stark beauty.",
        rating: 4.8,
        reviews: 295,
        temp: "-10 to 20°C"
    },
    {
        id: 6,
        name: "Varanasi Ghats",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=500&q=60",
        description: "Spiritual hub with ancient temples, rituals, and river Ganges.",
        rating: 4.5,
        reviews: 520,
        temp: "15-40°C"
    },
    {
        id: 7,
        name: "Darjeeling Tea Gardens",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=500&q=60",
        description: "Rolling tea plantations with Kanchenjunga views and toy trains.",
        rating: 4.7,
        reviews: 340,
        temp: "8-18°C"
    },
    {
        id: 8,
        name: "Udaipur City",
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=500&q=60",
        description: "Lake city with white marble palaces and romantic ambiance.",
        rating: 4.8,
        reviews: 450,
        temp: "20-38°C"
    }
];

// Food Data
const foods = [
    {
        name: "Butter Chicken",
        region: "North India",
        description: "Creamy tomato-based curry with tender chicken pieces",
        price: "₹350-450"
    },
    {
        name: "Dosa",
        region: "South India",
        description: "Crispy fermented rice crepe with spiced potato filling",
        price: "₹80-150"
    },
    {
        name: "Biryani",
        region: "Hyderabad",
        description: "Aromatic rice dish with meat, spices, and herbs",
        price: "₹200-350"
    },
    {
        name: "Thali",
        region: "All India",
        description: "Complete meal with rice, dal, vegetables, and bread",
        price: "₹150-300"
    },
    {
        name: "Appam",
        region: "Kerala",
        description: "Soft, fluffy rice cake with egg curry",
        price: "₹120-200"
    },
    {
        name: "Gujhiya",
        region: "Rajasthan",
        description: "Sweet dumpling filled with nuts and milk solids",
        price: "₹100-180"
    },
    {
        name: "Tandoori Chicken",
        region: "Punjab",
        description: "Spiced grilled chicken marinated in yogurt",
        price: "₹300-400"
    },
    {
        name: "Pani Puri",
        region: "Street Food",
        description: "Crispy shells with spiced water and savory filling",
        price: "₹30-50"
    }
];

// Pricing Data
const pricing = [
    {
        name: "Budget Explorer",
        price: "12,000",
        features: [
            "3-star accommodation",
            "Basic meals included",
            "Group tours",
            "Local guide",
            "Travel insurance"
        ],
        badge: false
    },
    {
        name: "Comfort Journey",
        price: "25,000",
        features: [
            "4-star accommodation",
            "Premium meals",
            "Guided tours",
            "Activities included",
            "Travel insurance",
            "24/7 support"
        ],
        badge: true
    },
    {
        name: "Premium Experience",
        price: "45,000",
        features: [
            "5-star accommodation",
            "Gourmet dining",
            "Private guides",
            "All activities",
            "Wellness sessions",
            "Premium insurance"
        ],
        badge: false
    },
    {
        name: "Royal Luxury",
        price: "75,000+",
        features: [
            "Luxury resorts",
            "Chef-curated meals",
            "Personal concierge",
            "Exclusive tours",
            "Spa & wellness",
            "VIP treatment"
        ],
        badge: false
    }
];

// AI Responses
const aiResponses = {
    greetings: [
        "Hello! 👋 I'm excited to help you plan an amazing trip!",
        "Hi there! 🧳 Where would you like to explore in India?",
        "Welcome! 🌟 Tell me about your travel dreams!"
    ],
    destinations: [
        "🗺️ Popular destinations: Kerala Backwaters, Jaipur, Goa, Ladakh, Varanasi, and Darjeeling. Each offers unique experiences!",
        "✈️ Based on your interests, I'd recommend Kerala for backwaters, Jaipur for culture, or Ladakh for adventure!",
        "🏔️ Looking for mountains? Try Himachal or Ladakh. Beach lover? Goa and Kerala are perfect!"
    ],
    food: [
        "🍜 India has amazing cuisines! North India: Butter Chicken & Tandoori. South: Dosa & Idli. Try Biryani in Hyderabad!",
        "🍛 My recommendations: Start with regional Thali, then try local specialties like Appam in Kerala or Gujhiya in Rajasthan!",
        "🥘 Food budget: Street food costs ₹30-50, meals ₹150-300, fine dining ₹500+. Delicious at every price point!"
    ],
    budget: [
        "💰 Budget options: ₹12,000 for budget explorer, ₹25,000 for comfort, ₹45,000+ for premium experiences per person.",
        "💳 Your budget determines: Accommodation (₹500-5000/night), food (₹200-1000/day), activities (₹500-2000/day).",
        "🤑 Smart tip: Travel in shoulder season for better rates and fewer crowds!"
    ],
    default: [
        "That's interesting! 🤔 Tell me more about what you're looking for - destinations, food, budget, or activities?",
        "Great question! 😊 I can help with itineraries, food recommendations, pricing, or travel tips. What interests you?",
        "Awesome! 🎉 I'm here to make your trip perfect. Any specific preferences or questions?"
    ]
};

// Populate Destinations
function populateDestinations() {
    const container = document.getElementById('destinationCards');
    container.innerHTML = destinations.map(dest => `
        <div class="card">
            <img src="${dest.image}" alt="${dest.name}" class="card-image" onerror="this.src='https://via.placeholder.com/320x250?text=${dest.name}'">
            <div class="card-content">
                <h3>${dest.name}</h3>
                <p>${dest.description}</p>
                <div class="card-meta">
                    <span>⭐ ${dest.rating} (${dest.reviews} reviews)</span>
                    <span>🌡️ ${dest.temp}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Populate Food Items
function populateFood() {
    const container = document.getElementById('foodGrid');
    container.innerHTML = foods.map((food, index) => `
        <div class="food-card">
            <img src="https://via.placeholder.com/280x200?text=${encodeURIComponent(food.name)}" alt="${food.name}" class="food-image">
            <div class="food-info">
                <h3>${food.name}</h3>
                <p class="food-region">${food.region}</p>
                <p class="food-description">${food.description}</p>
                <p class="food-price">${food.price}</p>
            </div>
        </div>
    `).join('');
}

// Populate Pricing
function populatePricing() {
    const container = document.getElementById('pricingGrid');
    container.innerHTML = pricing.map((plan, index) => `
        <div class="pricing-card ${plan.badge ? 'featured' : ''}">
            ${plan.badge ? '<div class="pricing-badge">⭐ MOST POPULAR</div>' : ''}
            <h3>${plan.name}</h3>
            <div class="pricing-price">₹<span>${plan.price}</span></div>
            <p style="color: #636e72; margin-bottom: 20px;">per person</p>
            <ul class="pricing-features">
                ${plan.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
            <button class="pricing-btn">Choose Plan</button>
        </div>
    `).join('');
}

// AI Chat Functionality
function sendAIQuery() {
    const input = document.getElementById('aiInput');
    const message = input.value.trim();
    
    if (!message) return;
    
    const chatWindow = document.getElementById('chatWindow');
    
    // Add user message
    const userMsg = document.createElement('div');
    userMsg.className = 'chat-message user-message';
    userMsg.textContent = message;
    chatWindow.appendChild(userMsg);
    
    // Generate AI response
    let response = '';
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
        response = aiResponses.greetings[Math.floor(Math.random() * aiResponses.greetings.length)];
    } else if (lowerMessage.includes('destination') || lowerMessage.includes('place') || lowerMessage.includes('visit')) {
        response = aiResponses.destinations[Math.floor(Math.random() * aiResponses.destinations.length)];
    } else if (lowerMessage.includes('food') || lowerMessage.includes('eat') || lowerMessage.includes('cuisine')) {
        response = aiResponses.food[Math.floor(Math.random() * aiResponses.food.length)];
    } else if (lowerMessage.includes('budget') || lowerMessage.includes('price') || lowerMessage.includes('cost')) {
        response = aiResponses.budget[Math.floor(Math.random() * aiResponses.budget.length)];
    } else {
        response = aiResponses.default[Math.floor(Math.random() * aiResponses.default.length)];
    }
    
    // Add AI response with delay
    setTimeout(() => {
        const aiMsg = document.createElement('div');
        aiMsg.className = 'chat-message ai-message';
        aiMsg.textContent = response;
        chatWindow.appendChild(aiMsg);
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }, 500);
    
    input.value = '';
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

// Trip Planning Function
function initializeTrip() {
    const departure = document.getElementById('departure').value;
    const destination = document.getElementById('destination').value;
    const budget = document.getElementById('budget').value;
    
    if (!departure || !destination || !budget) {
        alert('Please fill in all fields!');
        return;
    }
    
    const chatWindow = document.getElementById('chatWindow');
    chatWindow.innerHTML = '';
    
    const greeting = document.createElement('div');
    greeting.className = 'ai-greeting';
    greeting.innerHTML = `<p>🎉 Great! Planning your trip from ${departure} to ${destination} with budget ₹${budget}</p>`;
    chatWindow.appendChild(greeting);
    
    setTimeout(() => {
        const msg = document.createElement('div');
        msg.className = 'chat-message ai-message';
        msg.textContent = `Perfect! I'm creating a personalized itinerary for you. Let me suggest the best packages, local foods, and hidden gems in ${destination}. Ask me anything about activities, accommodation, or travel tips!`;
        chatWindow.appendChild(msg);
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }, 1000);
    
    document.getElementById('ai-assistant').scrollIntoView({ behavior: 'smooth' });
}

// Hamburger Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
        });
    }
    
    // Close menu when link is clicked
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.style.display = 'none';
        });
    });
    
    // Initialize sections
    populateDestinations();
    populateFood();
    populatePricing();
    
    // Contact form
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon. 🙏');
            this.reset();
        });
    }
    
    // AI Input - Send on Enter key
    const aiInput = document.getElementById('aiInput');
    if (aiInput) {
        aiInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendAIQuery();
            }
        });
    }
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});