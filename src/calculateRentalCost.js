/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;

  if (days >= 7) {
    return DAILY_RATE * days - LONG_TERM_DISCOUNT;
  } else if (days >= 3) {
    return DAILY_RATE * days - SHORT_TERM_DISCOUNT;
  } else {
    return DAILY_RATE * days;
  }
}

module.exports = calculateRentalCost;
