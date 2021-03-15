const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(machine = true) {
    this.machine = machine;
  }

  encrypt(message, key) {

    if (!message || !key)
      throw new Error('No arguments');

    message = message.toUpperCase();
    key = key.toUpperCase();

    while (key.length < message.length) {
      key += key;
    }
    key = key.slice(0, message.length);

    let result = [];
    let count = 0;

    for (let i = 0; i < message.length; i++) {
      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
        let k = count % key.length;
        count++;
        let simbol = message.charCodeAt(i) + key.charCodeAt(k) - 65;
        if (simbol > 90 || simbol < 65) {
          simbol = simbol - 26;
        }
        result.push(String.fromCharCode(simbol));
      } else {
        result.push(message[i]);
      }
    }

    return this.machine ? result.join('') : result.reverse().join('');
  }

  decrypt(message, key) {

    if (!message || !key)
      throw new Error('No arguments');

    message = message.toUpperCase();
    key = key.toUpperCase();

    while (key.length < message.length) {
      key += key;
    }
    key = key.slice(0, message.length);

    let result = [];
    let count = 0;

    for (let i = 0; i < message.length; i++) {
      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
        let k = count % key.length;
        count++;
        let simbol = message.charCodeAt(i) - key.charCodeAt(k) + 65;
        if (simbol < 65 || simbol > 90) {
          simbol = simbol + 26;
        }
        result.push(String.fromCharCode(simbol));
      } else {
        result.push(message[i]);
      }
    }

    return this.machine ? result.join('') : result.reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;