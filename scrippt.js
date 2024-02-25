function getRandomReply() {
  const replies = [
    "I'm sorry, I didn't quite catch that.",
    "Interesting! Tell me more.",
    "That's a great question!",
    "Hmm, let me think about that for a moment.",
    "I'm here to help. What can I assist you with?",
    "That's fascinating! Can you elaborate?",
    "I'm not sure I understand. Could you please rephrase?",
    "Absolutely!",
    "I'm glad you asked! Here's what I think...",
    "Let me check on that for you.",
  ];

  const randomIndex = Math.floor(Math.random() * replies.length);
  return replies[randomIndex];
}

// Example usage:
const userMessage = "Can you tell me more about this topic?";
const botReply = getRandomReply();
console.log("User: " + userMessage);
console.log("Bot: " + botReply);
