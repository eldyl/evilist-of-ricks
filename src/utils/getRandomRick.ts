const RICK_COUNT = 107;

export const getRandomRick: (notThisOne?: number) => number = (notThisOne) => {
  const rickIndex = Math.floor(Math.random() * RICK_COUNT);

  if (rickIndex !== notThisOne) return rickIndex;
  return getRandomRick(notThisOne);
};

export const getOptionsForVote = () => {
  const firstIndex = getRandomRick();
  const secondIndex = getRandomRick(firstIndex);

  return [firstIndex, secondIndex];
};
