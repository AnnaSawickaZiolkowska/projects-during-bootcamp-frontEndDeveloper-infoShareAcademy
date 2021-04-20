export const createMonster = (playerLevel) => {
  const level = calculateMonsterLevel(playerLevel);
  const { power, toughness } = calculateMonsterStats(playerLevel, level);
  const { name, pic } = monsterTypes[
    Math.floor(Math.random() * monsterTypes.length)
  ];