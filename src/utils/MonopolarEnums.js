export const CutModes = {
  CUT1: {
    id: "cut1",
    label: "CUT I",
    range: { min: 0, max: 300 },
    icon: "cut",
  },
  CUT2: {
    id: "cut2",
    label: "CUT II",
    range: { min: 0, max: 300 },
    icon: "cut2",
  },
  BLEND1: {
    id: "blend1",
    label: "BLEND I",
    range: { min: 0, max: 200 },
    icon: "blend",
  },
  BLEND2: {
    id: "blend2",
    label: "BLEND II",
    range: { min: 0, max: 200 },
    icon: "blend2",
  },
  BLEND3: {
    id: "blend3",
    label: "BLEND III",
    range: { min: 0, max: 200 },
    icon: "blend3",
  },
};

export const CoagModes = {
  SPAY: {
    id: "spray",
    label: "SPRAY",
    range: { min: 0, max: 120 },
    icon: "spray",
  },
  PINPOINT: {
    id: "pinpoint",
    label: "PINPOINT",
    range: { min: 0, max: 120 },
    icon: "pinpoint",
  },
  GENTLE: {
    id: "gentle",
    label: "GENTLE",
    range: { min: 0, max: 120 },
    icon: "gentle",
  },
};

export function getCutMode(id) {
  switch (id) {
    case CutModes.CUT1.id:
      return CutModes.CUT1;
    case CutModes.CUT2.id:
      return CutModes.CUT2;
    case CutModes.BLEND1.id:
      return CutModes.BLEND1;
    case CutModes.BLEND2.id:
      return CutModes.BLEND2;
    case CutModes.BLEND3.id:
      return CutModes.BLEND3;
    default:
      return null;
  }
}

export const allCutModes = [
  CutModes.CUT1,
  CutModes.CUT2,
  CutModes.BLEND1,
  CutModes.BLEND2,
  CutModes.BLEND3,
];

export function getCoagMode(id) {
  switch (id) {
    case CoagModes.GENTLE.id:
      return CoagModes.GENTLE;
    case CoagModes.SPAY.id:
      return CoagModes.SPAY;
    case CoagModes.PINPOINT.id:
      return CoagModes.PINPOINT;
    default:
      return null;
  }
}

export const allCoagModes = [
  CoagModes.GENTLE,
  CoagModes.PINPOINT,
  CoagModes.SPAY,
];
