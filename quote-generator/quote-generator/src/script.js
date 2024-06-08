const quotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Stay hungry, stay foolish. – Steve Jobs",
    "You miss 100% of the shots you don’t take. – Wayne Gretzky",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. – Nelson Mandela",
    "The way to get started is to quit talking and begin doing. – Walt Disney",
    "Don’t cry because it’s over, smile because it happened. – Dr. Seuss",
    "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "Be yourself; everyone else is already taken. – Oscar Wilde",
    "Life is what happens when you're busy making other plans. – John Lennon",
    "There is no greater agony than bearing an untold story inside you. - Maya Angelou, I Know Why the Caged Bird Sings",
    "With really good literature you’re allowed to take multiple journeys as your perspective shifts over time. It continues to resonate, as you find different ways of entering and engaging with the narrative. - Glory Edim, Well-Read Black Girl",
    "Art is not mere entertainment or decoration, it has meaning, and we both want and need to fathom that meaning. - Toni Morrison, The Source of Self-Regard",
    // Add more quotes here
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteElement = document.getElementById('quote');
    quoteElement.textContent = quotes[randomIndex];
}
