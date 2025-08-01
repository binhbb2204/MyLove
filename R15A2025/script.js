// Flying hearts animation
function createFlyingHeart() {
    const heartsContainer = document.getElementById('heartsContainer');
    const heart = document.createElement('div');
    heart.className = 'flying-heart';
    
    // Random heart emoji
    const heartEmojis = ['💖', '💕', '💝', '💗', '💓', '💘', '❤️', '🩷'];
    heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
    
    // Random horizontal position
    heart.style.left = Math.random() * 100 + '%';
    
    // Random animation duration between 4-8 seconds
    heart.style.animationDuration = (Math.random() * 4 + 4) + 's';
    
    // Random delay
    heart.style.animationDelay = Math.random() * 2 + 's';
    
    heartsContainer.appendChild(heart);
    
    // Remove heart after animation
    setTimeout(() => {
        if (heart.parentNode) {
            heart.parentNode.removeChild(heart);
        }
    }, 8000);
}

// Create hearts continuously - MORE HEARTS! 💖
setInterval(createFlyingHeart, 600); // More frequent hearts!

// Create extra romantic sparkles
function createSparkle() {
    const heartsContainer = document.getElementById('heartsContainer');
    const sparkle = document.createElement('div');
    sparkle.className = 'flying-heart';
    
    // Sparkle emojis
    const sparkleEmojis = ['✨', '🌟', '💫', '⭐', '🌠', '💎'];
    sparkle.textContent = sparkleEmojis[Math.floor(Math.random() * sparkleEmojis.length)];
    
    sparkle.style.left = Math.random() * 100 + '%';
    sparkle.style.animationDuration = (Math.random() * 3 + 3) + 's';
    sparkle.style.animationDelay = Math.random() * 1 + 's';
    sparkle.style.fontSize = (Math.random() * 10 + 15) + 'px';
    
    heartsContainer.appendChild(sparkle);
    
    setTimeout(() => {
        if (sparkle.parentNode) {
            sparkle.parentNode.removeChild(sparkle);
        }
    }, 6000);
}

// Create sparkles every 1.5 seconds
setInterval(createSparkle, 1500);

// Memory navigation
let currentMemory = 0;
const memories = document.querySelectorAll('.memory-item');
const totalMemories = memories.length;

// Photo navigation
let currentPhoto = 0;
const photos = document.querySelectorAll('.love-photo');
const placeholders = document.querySelectorAll('.photo-placeholder');
const dots = document.querySelectorAll('.dot');
const totalPhotos = 5;

function showPhoto(index) {
    // Hide all photos and placeholders
    photos.forEach(photo => photo.classList.remove('active'));
    placeholders.forEach(placeholder => placeholder.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Show current photo or placeholder
    const photo = photos[index];
    const placeholder = placeholders[index];
    const dot = dots[index];
    
    if (photo && photo.complete && photo.naturalHeight !== 0) {
        // Image exists and is loaded
        photo.classList.add('active');
    } else {
        // Show placeholder
        placeholder.classList.add('active');
    }
    
    if (dot) {
        dot.classList.add('active');
    }
}

function nextPhoto() {
    currentPhoto = (currentPhoto + 1) % totalPhotos;
    showPhoto(currentPhoto);
    createHeartBurst();
}

function prevPhoto() {
    currentPhoto = (currentPhoto - 1 + totalPhotos) % totalPhotos;
    showPhoto(currentPhoto);
    createHeartBurst();
}

// Add click handlers for dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentPhoto = index;
        showPhoto(currentPhoto);
        createHeartBurst();
        // Reset photo auto-advance
        clearInterval(photoAutoAdvance);
        photoAutoAdvance = setInterval(nextPhoto, 4000);
    });
});

// Auto-advance photos every 4 seconds
let photoAutoAdvance = setInterval(nextPhoto, 4000);

function showMemory(index) {
    memories.forEach((memory, i) => {
        memory.classList.remove('active');
        if (i === index) {
            memory.classList.add('active');
        }
    });
}

function nextMemory() {
    currentMemory = (currentMemory + 1) % totalMemories;
    showMemory(currentMemory);
    
    // Add a little heart burst effect
    createHeartBurst();
}

function prevMemory() {
    currentMemory = (currentMemory - 1 + totalMemories) % totalMemories;
    showMemory(currentMemory);
    
    // Add a little heart burst effect
    createHeartBurst();
}

function createHeartBurst() {
    const card = document.querySelector('.love-card');
    // MORE HEARTS in the burst! 💕
    for (let i = 0; i < 12; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            const burstHearts = ['💕', '💖', '💗', '💘', '💝', '💓', '❤️', '🩷', '💜', '🧡'];
            heart.textContent = burstHearts[Math.floor(Math.random() * burstHearts.length)];
            heart.style.position = 'absolute';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = Math.random() * 100 + '%';
            heart.style.fontSize = (Math.random() * 15 + 20) + 'px';
            heart.style.color = '#ff69b4';
            heart.style.pointerEvents = 'none';
            heart.style.animation = 'heartBounce 1.5s ease-out forwards';
            heart.style.zIndex = '1000';
            heart.style.textShadow = '0 0 10px rgba(255, 105, 180, 0.8)';
            
            card.appendChild(heart);
            
            setTimeout(() => {
                if (heart.parentNode) {
                    heart.parentNode.removeChild(heart);
                }
            }, 1500);
        }, i * 80);
    }
    
    // Add floating words of love! 💕
    const loveWords = ['Love', 'Risa', 'Forever', 'Angel', 'Beautiful', 'Soulmate'];
    setTimeout(() => {
        const word = document.createElement('div');
        word.textContent = loveWords[Math.floor(Math.random() * loveWords.length)] + ' 💕';
        word.style.position = 'absolute';
        word.style.left = '50%';
        word.style.top = '30%';
        word.style.transform = 'translateX(-50%)';
        word.style.fontSize = '18px';
        word.style.color = '#ff1493';
        word.style.fontWeight = 'bold';
        word.style.pointerEvents = 'none';
        word.style.animation = 'heartBounce 2s ease-out forwards';
        word.style.zIndex = '1000';
        word.style.textShadow = '0 0 15px rgba(255, 20, 147, 0.8)';
        
        card.appendChild(word);
        
        setTimeout(() => {
            if (word.parentNode) {
                word.parentNode.removeChild(word);
            }
        }, 2000);
    }, 500);
}

// Auto-advance memories every 5 seconds
let autoAdvance = setInterval(nextMemory, 5000);

// Navigation buttons
document.getElementById('nextBtn').addEventListener('click', () => {
    clearInterval(autoAdvance);
    nextMemory();
    autoAdvance = setInterval(nextMemory, 5000);
});

document.getElementById('prevBtn').addEventListener('click', () => {
    clearInterval(autoAdvance);
    prevMemory();
    autoAdvance = setInterval(nextMemory, 5000);
});

// Love counter animation
let loveLevel = 0;
const loveCounter = document.getElementById('loveCounter');
const loveLevels = ['∞', '💖∞💖', '🌟∞🌟', '✨∞✨', '💕∞💕'];

setInterval(() => {
    loveLevel = (loveLevel + 1) % loveLevels.length;
    loveCounter.textContent = loveLevels[loveLevel];
}, 2000);

// Surprise modal
const surpriseBtn = document.getElementById('surpriseBtn');
const surpriseModal = document.getElementById('surpriseModal');
const closeSurprise = document.getElementById('closeSurprise');

surpriseBtn.addEventListener('click', () => {
    surpriseModal.classList.add('show');
    
    // Create explosion of hearts
    createSurpriseHearts();
    
    // Play romantic messages
    setTimeout(() => {
        playRomanticSounds();
    }, 500);
});

closeSurprise.addEventListener('click', () => {
    surpriseModal.classList.remove('show');
});

// Close modal when clicking outside
surpriseModal.addEventListener('click', (e) => {
    if (e.target === surpriseModal) {
        surpriseModal.classList.remove('show');
    }
});

function createSurpriseHearts() {
    const modal = surpriseModal;
    // MEGA HEART EXPLOSION! 💖💖💖
    for (let i = 0; i < 35; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            const megaHearts = ['💖', '💕', '💗', '💘', '💝', '💓', '❤️', '🩷', '💜', '🧡', '💛', '💚', '💙'];
            heart.textContent = megaHearts[Math.floor(Math.random() * megaHearts.length)];
            heart.style.position = 'absolute';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = Math.random() * 100 + '%';
            heart.style.fontSize = (Math.random() * 25 + 25) + 'px';
            heart.style.color = '#ff1493';
            heart.style.pointerEvents = 'none';
            heart.style.animation = 'heartBounce 3s ease-out forwards';
            heart.style.zIndex = '1001';
            heart.style.textShadow = '0 0 20px rgba(255, 20, 147, 1)';
            
            modal.appendChild(heart);
            
            setTimeout(() => {
                if (heart.parentNode) {
                    heart.parentNode.removeChild(heart);
                }
            }, 3000);
        }, i * 30);
    }
    
    // Add romantic words floating around! 💕
    const romanticWords = ['LOVE', 'RISA', 'FOREVER', 'BEAUTIFUL', 'ANGEL', 'SOULMATE', 'MINE', 'PERFECT'];
    for (let j = 0; j < 5; j++) {
        setTimeout(() => {
            const word = document.createElement('div');
            word.textContent = romanticWords[Math.floor(Math.random() * romanticWords.length)];
            word.style.position = 'absolute';
            word.style.left = Math.random() * 80 + 10 + '%';
            word.style.top = Math.random() * 80 + 10 + '%';
            word.style.fontSize = (Math.random() * 8 + 16) + 'px';
            word.style.color = '#ff69b4';
            word.style.fontWeight = 'bold';
            word.style.pointerEvents = 'none';
            word.style.animation = 'loveGlow 2s ease-in-out infinite';
            word.style.zIndex = '1002';
            word.style.textShadow = '0 0 15px rgba(255, 105, 180, 0.8)';
            
            modal.appendChild(word);
            
            setTimeout(() => {
                if (word.parentNode) {
                    word.parentNode.removeChild(word);
                }
            }, 4000);
        }, j * 400);
    }
}

function playRomanticSounds() {
    // Create visual sound effect
    const soundEffect = document.createElement('div');
    soundEffect.textContent = '🎵💕🎵';
    soundEffect.style.position = 'absolute';
    soundEffect.style.top = '20px';
    soundEffect.style.right = '20px';
    soundEffect.style.fontSize = '24px';
    soundEffect.style.animation = 'loveGlow 1s ease-in-out infinite';
    soundEffect.style.zIndex = '1002';
    
    surpriseModal.appendChild(soundEffect);
    
    setTimeout(() => {
        if (soundEffect.parentNode) {
            soundEffect.parentNode.removeChild(soundEffect);
        }
    }, 3000);
}

// Add hover effects to the main card
const loveCard = document.querySelector('.love-card');
loveCard.addEventListener('mouseenter', () => {
    loveCard.style.transform = 'scale(1.02)';
    loveCard.style.boxShadow = '0 25px 50px rgba(255, 105, 180, 0.4)';
});

loveCard.addEventListener('mouseleave', () => {
    loveCard.style.transform = 'scale(1)';
    loveCard.style.boxShadow = '0 20px 40px rgba(255, 105, 180, 0.3)';
});

// Random romantic quotes - EXTRA ROMANTIC! 💕
const romanticQuotes = [
    "Risa, you are my sunshine on cloudy days ☀️💕",
    "From Roblox to my heart, you built a home in my soul ��",
    "You make my heart skip a beat every single day 💓✨",
    "With you, I found my forever player two 🎮💍",
    "You are my favorite notification and my everything 📱💕",
    "In your arms, I found home and paradise 🏠❤️",
    "Risa, you're the reason I believe in virtual fairy tales ✨🧚‍♀️",
    "Every gaming session with you feels like magic 🌟💫",
    "You're not just my girlfriend, you're my soulmate 💝💍",
    "Risa, you make ordinary Roblox moments extraordinary 🌈💕",
    "My love for you is stronger than my WiFi connection 💓💖",
    "You're the most beautiful avatar that came to life 💭✨",
    "Risa, you're my favorite everything, in-game and IRL 💕🌸",
    "With you, every day is like winning the lottery 💌💘",
    "You're my real-life princess, better than any game ��"
];

// Show random quote occasionally - MORE FREQUENT! 💕
setInterval(() => {
    if (Math.random() < 0.5) { // 50% chance every 8 seconds - MORE ROMANTIC MESSAGES!
        showRandomQuote();
    }
}, 8000);

function showRandomQuote() {
    const quote = romanticQuotes[Math.floor(Math.random() * romanticQuotes.length)];
    const quoteElement = document.createElement('div');
    quoteElement.textContent = quote;
    quoteElement.style.position = 'fixed';
    quoteElement.style.bottom = '20px';
    quoteElement.style.right = '20px';
    quoteElement.style.background = 'rgba(255, 255, 255, 0.9)';
    quoteElement.style.padding = '10px 15px';
    quoteElement.style.borderRadius = '20px';
    quoteElement.style.border = '2px solid #ff69b4';
    quoteElement.style.color = '#d63384';
    quoteElement.style.fontSize = '14px';
    quoteElement.style.fontWeight = 'bold';
    quoteElement.style.zIndex = '1000';
    quoteElement.style.animation = 'modalFadeIn 0.5s ease-in-out';
    quoteElement.style.maxWidth = '250px';
    quoteElement.style.textAlign = 'center';
    
    document.body.appendChild(quoteElement);
    
    setTimeout(() => {
        if (quoteElement.parentNode) {
            quoteElement.style.opacity = '0';
            setTimeout(() => {
                quoteElement.parentNode.removeChild(quoteElement);
            }, 500);
        }
    }, 4000);
}

// Initial setup
document.addEventListener('DOMContentLoaded', () => {
    // Start with first memory and first photo
    showMemory(0);
    showPhoto(0);
    
    // Create initial MEGA burst of hearts! 💖
    setTimeout(() => {
        for (let i = 0; i < 20; i++) {
            setTimeout(createFlyingHeart, i * 150);
        }
        // Add initial sparkles too! ✨
        for (let j = 0; j < 10; j++) {
            setTimeout(createSparkle, j * 200);
        }
    }, 1000);
    
    // Show welcome message
    setTimeout(() => {
        showRandomQuote();
    }, 2000);
    
    // Extra romantic welcome message! 💕
    setTimeout(() => {
        const welcomeMsg = document.createElement('div');
        welcomeMsg.textContent = 'Welcome to our love story, beautiful Risa! 💕✨';
        welcomeMsg.style.position = 'fixed';
        welcomeMsg.style.top = '50%';
        welcomeMsg.style.left = '50%';
        welcomeMsg.style.transform = 'translate(-50%, -50%)';
        welcomeMsg.style.background = 'rgba(255, 192, 203, 0.95)';
        welcomeMsg.style.padding = '20px 30px';
        welcomeMsg.style.borderRadius = '30px';
        welcomeMsg.style.border = '3px solid #ff69b4';
        welcomeMsg.style.color = '#d63384';
        welcomeMsg.style.fontSize = '18px';
        welcomeMsg.style.fontWeight = 'bold';
        welcomeMsg.style.zIndex = '2000';
        welcomeMsg.style.animation = 'heartBounce 3s ease-in-out';
        welcomeMsg.style.textAlign = 'center';
        welcomeMsg.style.boxShadow = '0 10px 30px rgba(255, 105, 180, 0.5)';
        welcomeMsg.style.textShadow = '0 0 10px rgba(255, 105, 180, 0.8)';
        
        document.body.appendChild(welcomeMsg);
        
        setTimeout(() => {
            if (welcomeMsg.parentNode) {
                welcomeMsg.style.opacity = '0';
                welcomeMsg.style.transform = 'translate(-50%, -50%) scale(0.8)';
                setTimeout(() => {
                    welcomeMsg.parentNode.removeChild(welcomeMsg);
                }, 1000);
            }
        }, 4000);
    }, 3000);
    
    // Handle image loading errors
    photos.forEach((photo, index) => {
        photo.addEventListener('error', () => {
            console.log(`Image ${index + 1} failed to load, showing placeholder`);
        });
        
        photo.addEventListener('load', () => {
            console.log(`Image ${index + 1} loaded successfully`);
            if (index === currentPhoto) {
                showPhoto(currentPhoto);
            }
        });
    });
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        clearInterval(autoAdvance);
        nextMemory();
        autoAdvance = setInterval(nextMemory, 5000);
    } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        clearInterval(autoAdvance);
        prevMemory();
        autoAdvance = setInterval(nextMemory, 5000);
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        clearInterval(photoAutoAdvance);
        nextPhoto();
        photoAutoAdvance = setInterval(nextPhoto, 4000);
    } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        clearInterval(photoAutoAdvance);
        prevPhoto();
        photoAutoAdvance = setInterval(nextPhoto, 4000);
    } else if (e.key === 'Enter') {
        e.preventDefault();
        surpriseBtn.click();
    } else if (e.key === 'Escape') {
        e.preventDefault();
        surpriseModal.classList.remove('show');
    }
});
