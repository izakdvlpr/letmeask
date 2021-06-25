export function randomHex() {
  const keyString = '0123456789';

  let hexNumber = '';

  while (hexNumber.length < 6) {
    const randomNumber = Math.floor(Math.random() * keyString.length);
    
    hexNumber += keyString[randomNumber];
  }

  return hexNumber;
}
