/** 
* This function addition the products in the array and return the total value
* @param {Array} products cartProducts: Array of  objects
* @returns {number} Total price
*
*
*/
export const totalPrice = (products) => {
    let sum = 0;
    products.forEach(product => sum += product.price);

    return sum
}