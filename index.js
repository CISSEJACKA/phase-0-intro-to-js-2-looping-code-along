function writeCards(names, eventName) {
    let thankYouMessages = [];
    for (let i = 0; i < names.length; i++) {
let message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`; // Build the thank you message
 thankYouMessages.push(message);   
}
return thankYouMessages;
}
let names = ["Ali", "Peter", "Chase"];
let eventName = "birthday";
let messages = writeCards(names, eventName);
console.log(messages);

    
  

  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  countDown(10);
