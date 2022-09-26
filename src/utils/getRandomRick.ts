const RICK_COUNT = 107;

export const getRandomRick = (notThisOne?: number) => {
  const rickIndex = Math.floor(Math.random() * (RICK_COUNT - 1));

  if (rickIndex !== notThisOne) return rickIndex;
  return getRandomRick(notThisOne);
};

export const getOptionsForVote = () => {
  const firstIndex = getRandomRick();
  const secondIndex = getRandomRick(firstIndex);

  return [firstIndex, secondIndex];
};
