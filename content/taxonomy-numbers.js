/**
 * TAXONOMY NUMBERS — Single source of truth
 * To update counts: edit ONLY this file.
 * Order: L0 → L1 → L2 → L3
 *
 * Format: { count: string, label: string }
 * Count can be "43", "230+", "4,370+", "50,000+" etc.
 */
const TAXONOMY_NUMBERS = {
  L0: { count: "43",       label: "Macro Markets"  },
  L1: { count: "230+",     label: "Sub-markets"    },
  L2: { count: "4,370+",   label: "Segments"       },
  L3: { count: "50,000+",  label: "Niches"         }
};
