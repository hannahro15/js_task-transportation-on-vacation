/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const car = 40;

  if (days >= 7) {
    return car * days - 50;
  } else if (days >= 3) {
    return car * days - 20;
  } else {
    return car * days;
  }
}

module.exports = calculateRentalCost;
