function walk(coordinates) {
    let current = { x:0, y:0 };
    let x = 0;
    let y = 0;
  for (const i in coordinates) {
    switch (coordinates[i]) {
      case 'n': y--; break;
      case 's': y++; break;
      case 'w': x--; break;
      case 'e': x++; break;
    }
  }
  if (current.x === x && current.y === y) {
    return 'Loop!';
  }
  else if (current = {} && x === 0 && y === 0) {
    return 'Loop!';
  }
  current = { x, y }
  return current;
}

console.log(walk(['s', 's']));