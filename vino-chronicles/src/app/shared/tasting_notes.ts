/** Map of tasting notes to emojis that users can add to wine.  */
export const WINE_TASTING_NOTES = new Map([
  // Fruits
  ['apple', '🍏'],
  ['pear', '🍐'],
  ['citrus', '🍋'],
  ['berry', '🍓'], // Could be more specific: blackberry, raspberry, etc.
  ['cherry', '🍒'],
  ['tropical', '🍍'], // Mango, pineapple, passionfruit

  // Earthy / Floral
  ['minerality', '🪨'],
  ['herbal', '🌿'],
  ['floral', '🌼'],
  ['mushroom', '🍄'],

  // Spices / Wood
  ['vanilla', '🍦'], // Oak influence
  ['spice', '🌶️'], // Baking spices, pepper
  ['oak', '🪵'],
  ['cedar', '🌲'],

  // Other
  ['butter', '🧈'],
  ['honey', '🍯'],
  ['chocolate', '🍫'],
  ['tobacco', '🚬'],

  // Descriptors
  ['acidic', '😖'], // For high acidity
  ['tannic', '渋'], // For strong tannins
  ['sweet', '🍭'],
  ['dry', '🌵'], // Opposite of sweet
  ['smooth', '😌'],
  ['full-bodied', '🏋️'],
]);
