export const Modes = {
  MACRO: {
    id: "macro",
    label: "MACRO",
    range: { min: 0, max: 150 },
    icon: "macro",
  },
  MICRO: {
    id: "micro",
    label: "MICRO",
    range: { min: 0, max: 150 },
    icon: "macro",
  },
  STANDARD: {
    id: "standard",
    label: "STANDARD",
    range: { min: 0, max: 50 },
    icon: "macro",
  },
};

export const allModes = [Modes.MACRO, Modes.MICRO, Modes.STANDARD];

export function getMode(id) {
  switch (id) {
    case Modes.MACRO.id:
      return Modes.MACRO;
    case Modes.MICRO.id:
      return Modes.MICRO;
    case Modes.STANDARD.id:
      return Modes.STANDARD;
    default:
      return null;
  }
}
