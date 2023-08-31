function generateThought() {
  thoughts = [
    "Life is about creating yourself.",
    "The only way to do great work is to love what you do.",
    "Don't count the days, make the days count.",
    "Believe you can and you're halfway there.",
    "The journey of a thousand miles begins with one step.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "The best way to predict the future is to create it.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "In the middle of every difficulty lies opportunity.",
    "The harder I work, the luckier I get.",
    // Add more thoughts here...
    "Strive for progress, not perfection.",
    "Life isn't about waiting for the storm to pass, it's about learning how to dance in the rain.",
    "You are never too old to set another goal or to dream a new dream.",
    "The only person you should try to be better than is the person you were yesterday.",
    "Happiness is not by chance, but by choice.",
    // Add more thoughts as needed...
  ];

  randomIndex = Math.floor(Math.random() * thoughts.length);
  thoughtElement = document.getElementById("thought");
  thoughtElement.innerHTML = thoughts[randomIndex];
}
