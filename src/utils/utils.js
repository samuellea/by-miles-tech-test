export const capsNoUnders = (multiwordString) => {
  const noUnderscores = multiwordString.replace(/_/g, " ");
  const stringSplit = noUnderscores.split(' ');
  const allCapitalized = stringSplit.map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
  return allCapitalized;
};