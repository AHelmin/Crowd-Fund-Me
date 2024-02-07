// Here are the helper functions you'll need... you do the first two, I gave you the third one:

module.exports = {

  format_date: (date) => {
    // Look up how to format a date value and put the code below:

  },

  format_amount: (amount) => {
    // format large numbers with commas

  },

  get_emoji: () => {
    const randomNum = Math.random();

    // Return a random emoji
    if (randomNum > 0.7) {
      return `<span for="img" aria-label="lightbulb">💡</span>`;
    } else if (randomNum > 0.4) {
      return `<span for="img" aria-label="laptop">💻</span>`;
    } else {
      return `<span for="img" aria-label="gear">⚙️</span>`;
    }
  },
};