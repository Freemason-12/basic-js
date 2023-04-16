const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
    // throw new NotImplementedError('Not implemented');
// write this to each method to mute it ^^^

class VigenereCipheringMachine {
  
  constructor(dir = true){
    this.direct = dir
    this.table = this.generateTable()
  }

  generateTable(){
    let a = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    let res = []
    res.push(a)
    for(let i = 0; i < 25; i++){
      let cp = [...res[res.length - 1]]
      cp.push(cp.shift())
      res.push(cp)
    }
    return res
  }

  encrypt(message = null, key = null) {

    if(message === null || key === null) throw new Error('Incorrect arguments!')
    message = message.toUpperCase(); key = key.toUpperCase()

    let enc = [], ml = message.length, kl = key.length, offset = 0
    for(let i = 0; i < ml; i++){

      const x = message[i].charCodeAt(0) - 65
      const y = key[(i - offset) % kl].charCodeAt(0) - 65

      if(x >= 0 && x < 26) enc.push(this.table[x][y])
      else { enc.push(message[i]); offset++; }

    }
    return (this.direct)? enc.join("") : enc.reverse().join("")
  }
  decrypt(encrypted = null, key = null) {

    if(encrypted === null || key === null) throw new Error('Incorrect arguments!')
    encrypted = encrypted.toUpperCase(); key = key.toUpperCase()
    
    let dec = [], el = encrypted.length, kl = key.length, offset = 0

    for(let i = 0; i < el; i++){
      const x = encrypted[i].charCodeAt(0) - 65

      if(x >= 0 && x < 26) {
        const xx = encrypted[i]
        const y = key[(i - offset) % kl].charCodeAt(0) - 65
        const char = this.table[y].indexOf(xx)
        dec.push(this.table[0][char])
      }
      else { dec.push(encrypted[i]); offset++; }
    }
    return (this.direct)? dec.join("") : dec.reverse().join("")
  }

}

// let cp = new VigenereCipheringMachine(true)
// console.log(cp.decrypt('UWJJW XAGWLNFM VNNNDXHVWWL :)', 'js'))

module.exports = {
  VigenereCipheringMachine
};
