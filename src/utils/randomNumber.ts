export function randomNumber(size = 6) {
  const keyString = '0123456789';

  let hexNumber = '';

  while (hexNumber.length < size) {
    const randomNumber = Math.floor(Math.random() * keyString.length);
    
    hexNumber += keyString[randomNumber];
  }

  return hexNumber;
}
