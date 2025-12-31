// Contact Form
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('thankYou').style.display = 'block';
    this.reset();
    setTimeout(() => {
        document.getElementById('thankYou').style.display = 'none';
    }, 3000);
});

// Quotes API - Using zenquotes.io (more reliable)
async function fetchQuote() {
    try {
        const response = await fetch('https://zenquotes.io/api/random');
        const data = await response.json();
        document.getElementById('quote').textContent = `"${data[0].q}" — ${data[0].a}`;
    } catch (error) {
        // Fallback to hardcoded inspirational quotes if API fails
        const fallbackQuotes = [
            { text: "Hope is the only thing stronger than fear.", author: "Unknown" },
            { text: "Cancer may have started the fight, but I will finish it.", author: "Unknown" },
            { text: "Every day is a gift. That's why they call it the present.", author: "Unknown" },
            { text: "Strength doesn't come from what you can do, it comes from overcoming the things you thought you couldn't.", author: "Unknown" },
            { text: "You are braver than you believe, stronger than you seem, and smarter than you think.", author: "A.A. Milne" }
        ];
        const randomQuote = fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];
        document.getElementById('quote').textContent = `"${randomQuote.text}" — ${randomQuote.author}`;
    }
}

// Load quote on page load
fetchQuote();

// Refresh quote button
document.getElementById('refreshQuote').addEventListener('click', fetchQuote);
