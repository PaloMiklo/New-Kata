function walk(coordinates) {
    let current = { x:0, y:0 };
    let x = current.x;
    let y = current.y;
  for (const i in coordinates) {
    switch (coordinates[i]) {
      case 'n': y--; break;
      case 's': y++; break;
      case 'w': x--; break;
      case 'e': x++; break;
    }
  }
  if (x === 0 && y === 0) {
    return 'Loop!';
  }
  current = { x, y }
  return current;
}

console.log(walk(['s', 's', 'n', 'n']));
console.log(walk(['s', 's', 'n', 'n', 's']));