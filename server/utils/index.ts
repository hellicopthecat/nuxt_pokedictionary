export function addClass(...classname: string[]) {
  return classname.join(" ");
}
export function colorMaker(color: string) {
  switch (color) {
    case "green":
      return "#2ecc71";
    case "red": {
      return "#e67e22";
    }
    case "blue": {
      return "#3498db";
    }
    case "white": {
      return "#f7f1e3";
    }
    case "brown": {
      return "#f8c291";
    }
    case "yellow": {
      return "#fad390";
    }
    case "purple": {
      return "#a29bfe";
    }
    case "pink": {
      return "#fab1a0";
    }
    case "gray": {
      return "#b2bec3";
    }
    case "black": {
      return "#808e9b";
    }
  }
}
