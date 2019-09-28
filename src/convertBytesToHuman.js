/*
 * Функция `convertBytesToHuman` должна принимать
 * аргумент `bytes` только числового типа.
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */
export default function convertBytesToHuman(bytes) {
  if (typeof(bytes) != "number" || Number(bytes) < 0 || !((bytes ^ 0) === bytes) || bytes === Infinity) {
  	return false;
  }
  let numberOfUnits = Number(bytes);
  let units = ['B', 'KB', 'MB', 'GB', 'TB'];
  let typeOfUnits = 0;
  
  while (numberOfUnits >= 1024) {
  	typeOfUnits++;
  	numberOfUnits /= 1024;
  }
  numberOfUnits = Math.ceil(numberOfUnits * 100) / 100;
  bytes = String(numberOfUnits) + ' ' + units[typeOfUnits];
  return bytes;
}
