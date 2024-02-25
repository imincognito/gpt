function sendMessage() {
  var userInput = document.getElementById('user-input').value;
  displayMessage('user', userInput);

  // Generate a reply
  var reply = generateReply(userInput);
  displayMessage('bot', reply);
}

function generateReply(userInput) {
  // Example logic to generate a reply
  var words = userInput.split(' ');

  // Check if the input matches any predefined arrays
  for (var i = 0; i < wordArrays.length; i++) {
    var wordArray = wordArrays[i];
    if (arraysMatch(wordArray, words)) {
      return 'Match found: ' + wordArray.join(', ');
    }
  }

  // If no match found, return a default response
  return 'Sorry, I didn\'t understand your message.';
}

function arraysMatch(arr1, arr2) {
  // Helper function to check if two arrays contain the same elements
  if (arr1.length !== arr2.length) return false;
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

function displayMessage(sender, message) {
  var chatBox = document.getElementById('chat-box');
  var messageElement = document.createElement('div');
  messageElement.classList.add('message', sender + '-message');
  messageElement.innerText = message;
  chatBox.appendChild(messageElement);
}
