function walk(coordinates) {
    let x = 0; 
    let y = 0; 
    let current = {};
      for (const i in coordinates) {
        switch (coordinates[i]) {
          case 'n': y--; break
          case 's': y++; break
          case 'w': x--; break
          case 'e': x++; break
        }
      }
      if (x === 0 && y === 0) {
        return `Loop! { x: ${x} y: ${y} }`
      }
      return current = { x, y }
    }
    
    // walk(['n', 'e', 's', 'w'])               //   'Loop! { x: 0 y: 0 }'
    // walk(['n', 'e', 's', 'w', 'w'])          //      { x: -1  y: 0 }    