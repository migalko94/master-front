console.log("*****206 players order*****");
const getPlayersOrder = (players: string[], turns: number): string[] => {
  for (let i = 0; i < turns; i++) {
    [players[0], ...players] = [...players, players[0]];
  }

  return players;
};

// Un ejemplo:
const newOrderIn2Turns = getPlayersOrder(["Ana", "Juan", "Pablo", "Lucia"], 2);
console.log(newOrderIn2Turns); // ["Pablo", "Lucia", "Ana", "Juan"]
